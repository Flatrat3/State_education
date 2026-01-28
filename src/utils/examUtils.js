import { Capacitor } from '@capacitor/core';

export const fetchAndParseExams = async () => {
    const targetUrl = 'https://exidmet.dim.gov.az/dqq/ImtQeyd';
    const isNative = Capacitor.isNativePlatform();

    // Helper to validate response
    const isValidResponse = (text) => text && text.length > 100 && text.includes('<table');

    // Strategy 1: Primary (Native Direct or Local Proxy)
    try {
        const url = isNative ? targetUrl : '/api-dim/dqq/ImtQeyd';
        console.log("Attempting Strategy 1 (Primary):", url);

        const response = await fetch(url);
        if (!response.ok) throw new Error(`Primary fetch failed: ${response.status}`);

        const text = await response.text();
        if (!isValidResponse(text)) throw new Error('Primary response invalid');

        return parseExamData(text);
    } catch (err) {
        console.warn("Strategy 1 failed:", err);
    }

    // Strategy 2: corsproxy.io (Best specialized CORS proxy)
    if (!isNative) {
        try {
            // corsproxy.io requires the target URL to be appended directly
            const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(targetUrl)}`;
            console.log("Attempting Strategy 2 (corsproxy.io):", proxyUrl);

            const response = await fetch(proxyUrl);
            if (!response.ok) throw new Error(`Strategy 2 failed: ${response.status}`);

            const text = await response.text();
            // corsproxy.io might return the proxy page itself on error, so check content
            if (!isValidResponse(text)) throw new Error('Strategy 2 response invalid');

            return parseExamData(text);
        } catch (err) {
            console.warn("Strategy 2 failed:", err);
        }

        // Strategy 3: allorigins (Backup)
        try {
            const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(targetUrl)}`;
            console.log("Attempting Strategy 3 (allorigins):", proxyUrl);

            const response = await fetch(proxyUrl);
            if (!response.ok) throw new Error(`Strategy 3 failed: ${response.status}`);

            const text = await response.text();
            if (!isValidResponse(text)) throw new Error('Strategy 3 response invalid');

            return parseExamData(text);
        } catch (err) {
            console.error("Strategy 3 failed. All strategies exhausted:", err);
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
