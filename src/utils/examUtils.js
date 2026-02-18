import { Capacitor } from '@capacitor/core';

export const fetchAndParseExams = async () => {
    const targetUrl = 'https://exidmet.dim.gov.az/dqq/ImtQeyd';
    const isNative = Capacitor.isNativePlatform();

    // Helper to validate response
    const isValidResponse = (text) => text && text.length > 500 && text.includes('<table') && text.includes('<tr');

    // List of strategies to try
    const strategies = [
        {
            name: "AllOrigins",
            url: `https://api.allorigins.win/raw?url=${encodeURIComponent(targetUrl)}`,
            condition: () => !isNative
        },
        {
            name: "CodeTabs",
            url: `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(targetUrl)}`,
            condition: () => !isNative
        },
        {
            name: "CorsProxy.io",
            url: `https://corsproxy.io/?${encodeURIComponent(targetUrl)}`,
            condition: () => !isNative
        }
    ];

    for (const strategy of strategies) {
        if (!strategy.condition()) continue;

        try {
            console.log(`Attempting Strategy: ${strategy.name} (${strategy.url})`);
            const response = await fetch(strategy.url);

            if (!response.ok) {
                console.warn(`${strategy.name} failed with status: ${response.status}`);
                continue;
            }

            const text = await response.text();

            if (isValidResponse(text)) {
                console.log(`${strategy.name} succeeded!`);
                return parseExamData(text);
            } else {
                console.warn(`${strategy.name} returned invalid content`);
            }
        } catch (err) {
            console.warn(`${strategy.name} error:`, err);
        }
    }

    throw new Error("Məlumatı yeniləmək mümkün olmadı. Zəhmət olmasa internet bağlantınızı yoxlayın və ya daha sonra cəhd edin.");
};

const parseExamData = (htmlString) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    // Select all rows in the table body
    const rows = doc.querySelectorAll('table tbody tr');
    const parsedExams = [];

    rows.forEach(row => {
        // row.cells collection includes th if present.
        if (row.cells.length >= 4) {
            const dateText = row.cells[1]?.innerText?.trim();

            if (dateText) {
                // Parse date string (e.g., "05.02.2026 10:00") to Date object
                let dateObject = null;
                try {
                    const [datePart, timePart] = dateText.split(' ');
                    const [day, month, year] = datePart.split('.');
                    const [hour, minute] = timePart ? timePart.split(':') : ['00', '00'];
                    dateObject = new Date(year, month - 1, day, hour, minute);
                } catch (e) {
                    console.error("Error parsing date:", dateText, e);
                }

                parsedExams.push({
                    dateTime: dateText,
                    dateObject: dateObject,
                    regStart: row.cells[2]?.innerText?.trim(),
                    regEnd: row.cells[3]?.innerText?.trim(),
                    group: row.cells[8]?.innerText?.trim(),
                });
            }
        }
    });

    return parsedExams;
};
