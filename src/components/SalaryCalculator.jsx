import { useState, useRef, useEffect } from "react";

const payScales = {
  administrative: {
    1: [13680, 14020, 14365, 14705, 15050, 15390, 15730], 2: [12725, 13045, 13360, 13680, 14000, 14315, 14635],
    3: [11835, 12135, 12430, 12725, 13020, 13315, 13615], 4: [11010, 11285, 11560, 11835, 12115, 12390, 12665],
    5: [10245, 10500, 10755, 11010, 11265, 11525, 11780], 6: [9530, 9765, 10005, 10245, 10480, 10720, 10960],
    7: [8865, 9085, 9305, 9530, 9750, 9970, 10195], 8: [8245, 8450, 8660, 8865, 9070, 9275, 9485],
    9: [7670, 7860, 8055, 8245, 8435, 8630, 8820], 10: [7135, 7315, 7490, 7670, 7850, 8025, 8205],
    11: [6635, 6805, 6970, 7135, 7300, 7465, 7635], 12: [6175, 6330, 6485, 6635, 6790, 6945, 7100],
    13: [5745, 5885, 6030, 6175, 6320, 6460, 6605], 14: [5340, 5475, 5610, 5745, 5875, 6010, 6145],
    15: [4970, 5095, 5220, 5340, 5465, 5590, 5715], 16: [4625, 4740, 4855, 4970, 5085, 5200, 5315],
    17: [4300, 4410, 4515, 4625, 4730, 4840, 4945], 18: [4000, 4100, 4200, 4300, 4400, 4500, 4600],
    19: [3720, 3815, 3910, 4000, 4095, 4185, 4280], 20: [3460, 3550, 3635, 3720, 3810, 3895, 3980],
    21: [3220, 3300, 3380, 3460, 3545, 3620, 3705], 22: [2995, 3070, 3145, 3220, 3295, 3370, 3445],
    23: [2785, 2855, 2925, 2995, 3065, 3135, 3205], 24: [2590, 2655, 2720, 2785, 2850, 2915, 2980],
    25: [2410, 2470, 2530, 2595, 2650, 2715, 2775], 26: [2245, 2300, 2355, 2410, 2470, 2525, 2580],
    27: [2085, 2140, 2190, 2245, 2295, 2350, 2400], 28: [1940, 1990, 2040, 2085, 2135, 2185, 2230],
    29: [1805, 1850, 1895, 1940, 1985, 2030, 2075], 30: [1680, 1720, 1765, 1805, 1845, 1890, 1930],
    31: [1560, 1600, 1640, 1680, 1720, 1755, 1795], 32: [1455, 1490, 1525, 1560, 1600, 1635, 1670],
    33: [1355, 1385, 1420, 1455, 1485, 1520, 1555], 34: [1260, 1290, 1320, 1355, 1385, 1415, 1445],
    35: [1170, 1200, 1230, 1260, 1285, 1315, 1345],
  },
  auxiliary: {
    1: [1165, 1195, 1220, 1250, 1280, 1310, 1340], 2: [1135, 1160, 1190, 1220, 1245, 1275, 1305],
    3: [1105, 1130, 1160, 1185, 1215, 1240, 1270], 4: [1075, 1100, 1130, 1155, 1180, 1210, 1235],
    5: [1045, 1070, 1100, 1125, 1150, 1175, 1205], 6: [1020, 1045, 1070, 1095, 1120, 1145, 1170],
    7: [990, 1015, 1040, 1065, 1090, 1115, 1140], 8: [965, 990, 1015, 1040, 1065, 1085, 1110],
    9: [940, 965, 985, 1010, 1035, 1060, 1080], 10: [915, 940, 960, 985, 1010, 1030, 1055],
    11: [890, 915, 935, 960, 980, 1005, 1025], 12: [870, 890, 910, 935, 955, 975, 1000],
    13: [845, 865, 890, 910, 930, 950, 970], 14: [825, 845, 865, 885, 905, 925, 945],
    15: [800, 820, 840, 860, 880, 900, 920], 16: [780, 800, 820, 840, 860, 880, 900],
    17: [760, 780, 800, 815, 835, 855, 875],
  }
};

const ixtisasList = [
  { label: "Seçin (yoxdur)", value: 0 },
  { label: "Həqiqi dövlət müşaviri", value: 600 },
  { label: "1-ci dərəcə dövlət müşaviri", value: 550 },
  { label: "2-ci dərəcə dövlət müşaviri", value: 500 },
  { label: "3-cü dərəcə dövlət müşaviri", value: 450 },
  { label: "Dövlət qulluğunun baş müşaviri", value: 400 },
  { label: "Dövlət qulluğunun müşaviri", value: 350 },
  { label: "Dövlət qulluğunun kiçik müşaviri", value: 300 },
  { label: "1-ci dərəcə dövlət qulluqçusu", value: 275 },
  { label: "2-ci dərəcə dövlət qulluqçusu", value: 250 },
  { label: "3-cü dərəcə dövlət qulluqçusu", value: 225 },
  { label: "Kiçik dövlət qulluqçusu", value: 200 },
  { label: "Dövlət qulluğunun baş referenti", value: 175 },
  { label: "Dövlət qulluğunun böyük referenti", value: 150 },
  { label: "1-ci dərəcə referenti", value: 125 },
  { label: "2-ci dərəcə referenti", value: 100 },
  { label: "3-cü dərəcə referenti", value: 75 },
  { label: "Dövlət qulluğunun kiçik referenti", value: 50 },
];

const organData = [
  {
    organ: "AR Prezidenti Administrasiyası",
    vezifeler: [
      "Rəhbər", "Şöbə müdiri", "Şöbə müdirinin müavini", "Sektor müdiri",
      "Baş məsləhətçi", "Böyük məsləhətçi", "Aparıcı məsləhətçi", "Məsləhətçi",
      "Rəhbərin köməkçisi", "Baş mütəxəssis", "Böyük mütəxəssis", "Aparıcı mütəxəssis", "Mütəxəssis"
    ]
  },
  {
    organ: "AR Prezidentinin İşlər İdarəsi",
    vezifeler: [
      "İşlər müdiri", "İşlər müdirinin birinci müavini", "İşlər müdirinin müavini", "İşlər müdirinin köməkçisi",
      "Şöbə müdiri", "Şöbə müdirinin müavini", "Sektor müdiri", "Baş mühasib",
      "Baş məsləhətçi", "Böyük məsləhətçi", "Aparıcı məsləhətçi", "Məsləhətçi",
      "Baş mütəxəssis", "Böyük mütəxəssis", "Aparıcı mütəxəssis", "Mütəxəssis"
    ]
  },
  {
    organ: "AR Xüsusi Tibb Xidməti",
    vezifeler: [
      "Rəis", "Rəisin birinci müavini", "Rəisin müavini", "Rəisin köməkçisi",
      "Şöbə müdiri", "Şöbə müdirinin müavini", "Sektor müdiri", "Baş mühasib",
      "Baş məsləhətçi", "Böyük məsləhətçi", "Aparıcı məsləhətçi", "Məsləhətçi",
      "Baş mütəxəssis", "Böyük mütəxəssis", "Aparıcı mütəxəssis", "Mütəxəssis"
    ]
  },
  {
    organ: "AR Prezidentinin Protokol Xidməti",
    vezifeler: [
      "Rəis", "Rəisin birinci müavini", "Rəisin müavini",
      "Şöbə müdiri", "Şöbə müdirinin müavini", "Sektor müdiri", "Baş mühasib",
      "Baş məsləhətçi", "Böyük məsləhətçi", "Aparıcı məsləhətçi", "Məsləhətçi",
      "Baş mütəxəssis", "Böyük mütəxəssis", "Aparıcı mütəxəssis", "Mütəxəssis"
    ]
  },
  {
    organ: "AR Təhlükəsizlik Şurası",
    vezifeler: [
      "Katib", "Katibin müavini",
      "Şöbə müdiri", "Sektor müdiri",
      "Baş məsləhətçi", "Böyük məsləhətçi", "Aparıcı məsləhətçi", "Məsləhətçi"
    ]
  },
  {
    organ: "AR Birinci Vitse-Prezidentinin Katibliyı",
    vezifeler: [
      "Rəis", "Rəisin müavini", "Köməkçi"
    ]
  },
  {
    organ: "AR Nazirlər Kabineti Aparatı",
    vezifeler: [
      "Rəhbər", "Rəhbərin müavini", "Rəhbərin köməkçisi",
      "Şöbə müdiri", "Şöbə müdirinin müavini", "Sektor müdiri", "Baş mühasib",
      "Baş məsləhətçi", "Böyük məsləhətçi", "Aparıcı məsləhətçi", "Məsləhətçi",
      "Baş mütəxəssis", "Böyük mütəxəssis", "Aparıcı mütəxəssis", "Mütəxəssis"
    ]
  },
  {
    organ: "AR Nazirlər Kabinetinin İşlər İdarəsi",
    vezifeler: [
      "İşlər müdiri", "İşlər müdirinin müavini", "İşlər müdirinin köməkçisi",
      "Şöbə müdiri", "Şöbə müdirinin müavini", "Sektor müdiri", "Baş mühasib",
      "Baş məsləhətçi", "Böyük məsləhətçi", "Aparıcı məsləhətçi", "Məsləhətçi",
      "Baş mütəxəssis", "Böyük mütəxəssis", "Aparıcı mütəxəssis", "Mütəxəssis"
    ]
  },
  {
    organ: "AR Milli Məclisinin Aparatı",
    vezifeler: [
      "Rəhbər", "Rəhbərin müavini", "Rəhbərin köməkçisi",
      "Şöbə müdiri", "Şöbə müdirinin müavini", "Sektor müdiri", "Baş mühasib",
      "Baş məsləhətçi", "Böyük məsləhətçi", "Aparıcı məsləhətçi", "Məsləhətçi",
      "Baş mütəxəssis", "Böyük mütəxəssis", "Aparıcı mütəxəssis", "Mütəxəssis"
    ]
  },
  {
    organ: "AR Milli Məclisinin İşlər İdarəsi",
    vezifeler: [
      "İşlər müdiri", "İşlər müdirinin müavini", "İşlər müdirinin köməkçisi",
      "Şöbə müdiri", "Şöbə müdirinin müavini", "Sektor müdiri", "Baş mühasib",
      "Baş məsləhətçi", "Böyük məsləhətçi", "Aparıcı məsləhətçi", "Məsləhətçi",
      "Baş mütəxəssis", "Böyük mütəxəssis", "Aparıcı mütəxəssis", "Mütəxəssis"
    ]
  },
  {
    organ: "AR Konstitusiya Məhkəməsinin Aparatı",
    vezifeler: [
      "Rəhbər", "Rəhbərin müavini", "Rəhbərin köməkçisi",
      "Şöbə müdiri", "Şöbə müdirinin müavini", "Sektor müdiri", "Baş mühasib",
      "Baş məsləhətçi", "Böyük məsləhətçi", "Aparıcı məsləhətçi", "Məsləhətçi",
      "Məhkəmə iclasının katibi", "Hakimin köməkçisi",
      "Baş mütəxəssis", "Böyük mütəxəssis", "Aparıcı mütəxəssis", "Mütəxəssis"
    ]
  },
  {
    organ: "AR Ali Məhkəməsinin Aparatı",
    vezifeler: [
      "Rəhbər", "Rəhbərin müavini",
      "Şöbə müdiri", "Şöbə müdirinin müavini", "Sektor müdiri", "Baş mühasib",
      "Baş məsləhətçi", "Böyük məsləhətçi", "Aparıcı məsləhətçi", "Məsləhətçi",
      "Məhkəmə iclasının katibi", "Hakimin köməkçisi",
      "Baş mütəxəssis", "Böyük mütəxəssis", "Aparıcı mütəxəssis", "Mütəxəssis"
    ]
  },
  {
    organ: "AR Hesablama Palatası",
    vezifeler: [
      "Sədrin köməkçisi", "Sədrin müşaviri",
      "Şöbə müdiri", "Şöbə müdirinin müavini", "Sektor müdiri", "Baş mühasib",
      "Baş məsləhətçi", "Böyük məsləhətçi", "Aparıcı məsləhətçi", "Məsləhətçi",
      "Baş mütəxəssis", "Böyük mütəxəssis", "Aparıcı mütəxəssis", "Mütəxəssis"
    ]
  },
  {
    organ: "AR Məhkəmə-Hüquq Şurası",
    vezifeler: [
      "Şöbə müdiri", "Şöbə müdirinin müavini", "Sektor müdiri", "Baş mühasib",
      "Baş məsləhətçi", "Böyük məsləhətçi", "Aparıcı məsləhətçi", "Məsləhətçi",
      "Baş mütəxəssis", "Böyük mütəxəssis", "Aparıcı mütəxəssis", "Mütəxəssis"
    ]
  },
  {
    organ: "AR İnsan Hüquqları üzrə Müvəkkili (Ombudsman)",
    vezifeler: [
      "Köməkçi", "Müşavir",
      "Şöbə müdiri", "Şöbə müdirinin müavini", "Sektor müdiri", "Baş mühasib",
      "Baş məsləhətçi", "Böyük məsləhətçi", "Aparıcı məsləhətçi", "Məsləhətçi",
      "Baş mütəxəssis", "Böyük mütəxəssis", "Aparıcı mütəxəssis", "Mütəxəssis"
    ]
  },
  {
    organ: "AR Baş Prokurorluğu",
    vezifeler: [
      "Şöbə müdiri", "Şöbə müdirinin müavini", "Sektor müdiri", "Baş mühasib",
      "Baş məsləhətçi", "Böyük məsləhətçi", "Aparıcı məsləhətçi", "Məsləhətçi",
      "Baş mütəxəssis", "Böyük mütəxəssis", "Aparıcı mütəxəssis", "Mütəxəssis"
    ]
  },
  {
    organ: "AR Hərbi Prokurorluğu",
    vezifeler: [
      "Şöbə müdiri", "Sektor müdiri", "Baş mühasib",
      "Baş məsləhətçi", "Böyük məsləhətçi", "Aparıcı məsləhətçi", "Məsləhətçi",
      "Baş mütəxəssis", "Böyük mütəxəssis", "Aparıcı mütəxəssis", "Mütəxəssis"
    ]
  },
  {
    organ: "Bakı Şəhər Prokurorluğu",
    vezifeler: [
      "Şöbə müdiri", "Sektor müdiri", "Baş mühasib",
      "Baş məsləhətçi", "Böyük məsləhətçi", "Aparıcı məsləhətçi", "Məsləhətçi",
      "Baş mütəxəssis", "Böyük mütəxəssis", "Aparıcı mütəxəssis", "Mütəxəssis"
    ]
  },
  {
    organ: "Rayon/Şəhər Prokurorluğu",
    vezifeler: [
      "Sektor müdiri", "Baş mühasib",
      "Baş məsləhətçi", "Böyük məsləhətçi", "Aparıcı məsləhətçi", "Məsləhətçi"
    ]
  },
  {
    organ: "AR Mərkəzi Seçki Komissiyasının Katibliyı",
    vezifeler: [
      "Rəhbər", "Rəhbərin müavini",
      "Şöbə müdiri", "Şöbə müdirinin müavini", "Sektor müdiri", "Baş mühasib",
      "Baş məsləhətçi", "Böyük məsləhətçi", "Aparıcı məsləhətçi", "Məsləhətçi",
      "Baş mütəxəssis", "Böyük mütəxəssis", "Aparıcı mütəxəssis", "Mütəxəssis"
    ]
  },
  {
    organ: "AR Korrupsiyaya Qarşı Mübarizə üzrə Komissiyasının Katibliyı",
    vezifeler: [
      "Katib",
      "Baş məsləhətçi", "Böyük məsləhətçi", "Aparıcı məsləhətçi", "Məsləhətçi"
    ]
  },
  {
    organ: "AR Audiovizual Şurası",
    vezifeler: [
      "Sədrin köməkçisi",
      "Şöbə müdiri", "Şöbə müdirinin müavini", "Sektor müdiri", "Baş mühasib",
      "Baş məsləhətçi", "Böyük məsləhətçi", "Aparıcı məsləhətçi", "Məsləhətçi",
      "Baş mütəxəssis", "Böyük mütəxəssis", "Aparıcı mütəxəssis", "Mütəxəssis"
    ]
  },
  {
    organ: "Nazirlik (ümumi)",
    vezifeler: [
      "Nazirliyin rəhbəri (aparatın rəhbəri)", "Aparatın rəhbərinin müavini",
      "Rəhbərin müşaviri", "Rəhbərin köməkçisi",
      "Şöbə müdiri", "Şöbə müdirinin müavini", "Sektor müdiri", "Baş mühasib",
      "Baş məsləhətçi", "Böyük məsləhətçi", "Aparıcı məsləhətçi", "Məsləhətçi",
      "Baş mütəxəssis", "Böyük mütəxəssis", "Aparıcı mütəxəssis", "Mütəxəssis"
    ]
  },
  {
    organ: "Dövlət Agentliyi / Dövlət Xidməti (Prezident tərəfindən təyin)",
    vezifeler: [
      "Rəhbər", "Rəhbərin müavini", "Rəhbərin müşaviri", "Rəhbərin köməkçisi",
      "Şöbə müdiri", "Şöbə müdirinin müavini", "Sektor müdiri", "Baş mühasib",
      "Baş məsləhətçi", "Böyük məsləhətçi", "Aparıcı məsləhətçi", "Məsləhətçi",
      "Baş mütəxəssis", "Böyük mütəxəssis", "Aparıcı mütəxəssis", "Mütəxəssis"
    ]
  },
  {
    organ: "Dövlət Agentliyi / Dövlət Xidməti (Nazirlik yanında)",
    vezifeler: [
      "Rəhbər", "Rəhbərin müavini",
      "Şöbə müdiri", "Şöbə müdirinin müavini", "Sektor müdiri", "Baş mühasib",
      "Baş məsləhətçi", "Böyük məsləhətçi", "Aparıcı məsləhətçi", "Məsləhətçi",
      "Baş mütəxəssis", "Böyük mütəxəssis", "Aparıcı mütəxəssis", "Mütəxəssis"
    ]
  },
  {
    organ: "Bakı Şəhər İcra Hakimiyyəti",
    vezifeler: [
      "Başçının birinci müavini", "Başçının müavini",
      "Aparatın rəhbəri",
      "Şöbə müdiri", "Şöbə müdirinin müavini", "Sektor müdiri", "Baş mühasib",
      "Baş məsləhətçi", "Böyük məsləhətçi", "Aparıcı məsləhətçi", "Məsləhətçi",
      "Başçının müşaviri", "Başçının köməkçisi",
      "Baş mütəxəssis", "Böyük mütəxəssis", "Aparıcı mütəxəssis", "Mütəxəssis"
    ]
  },
  {
    organ: "Gəncə Şəhər İcra Hakimiyyəti",
    vezifeler: [
      "Başçının birinci müavini", "Başçının müavini",
      "Şöbə müdiri", "Şöbə müdirinin müavini", "Sektor müdiri", "Baş mühasib",
      "Baş məsləhətçi", "Böyük məsləhətçi", "Aparıcı məsləhətçi", "Məsləhətçi"
    ]
  },
  {
    organ: "Sumqayıt Şəhər İcra Hakimiyyəti",
    vezifeler: [
      "Başçının birinci müavini", "Başçının müavini",
      "Şöbə müdiri", "Şöbə müdirinin müavini", "Sektor müdiri", "Baş mühasib",
      "Baş məsləhətçi", "Böyük məsləhətçi", "Aparıcı məsləhətçi", "Məsləhətçi"
    ]
  },
  {
    organ: "Yerli İcra Hakimiyyəti (digər rayon/şəhər)",
    vezifeler: [
      "Başçının birinci müavini", "Başçının müavini",
      "Aparatın rəhbəri", "Aparatın rəhbərinin köməkçisi",
      "Şöbə müdiri", "Şöbə müdirinin müavini", "Sektor müdiri", "Baş mühasib",
      "Baş məsləhətçi", "Böyük məsləhətçi", "Aparıcı məsləhətçi", "Məsləhətçi",
      "Başçının köməkçisi",
      "Nümayəndə (şəhər/sahə dairəsi)", "Nümayəndə (qəsəbə/kənd dairəsi)"
    ]
  },
  {
    organ: "Apellyasiya Məhkəməsinin Aparatı",
    vezifeler: [
      "Rəhbər", "Rəhbərin müavini",
      "Şöbə müdiri", "Şöbə müdirinin müavini", "Sektor müdiri", "Baş mühasib",
      "Baş məsləhətçi", "Böyük məsləhətçi", "Aparıcı məsləhətçi", "Məsləhətçi",
      "Hakimin köməkçisi", "Məhkəmə iclasının katibi",
      "Baş mütəxəssis", "Böyük mütəxəssis", "Aparıcı mütəxəssis", "Mütəxəssis"
    ]
  },
  {
    organ: "Ağır Cinayətlər / İnzibati / Kommersiya / Hərbi Məhkəməsinin Aparatı",
    vezifeler: [
      "Şöbə müdiri", "Şöbə müdirinin müavini", "Sektor müdiri", "Baş mühasib",
      "Baş məsləhətçi", "Böyük məsləhətçi", "Aparıcı məsləhətçi", "Məsləhətçi",
      "Hakimin köməkçisi", "Məhkəmə iclasının katibi",
      "Baş mütəxəssis", "Böyük mütəxəssis", "Aparıcı mütəxəssis", "Mütəxəssis"
    ]
  },
  {
    organ: "Rayon / Şəhər Məhkəməsinin Aparatı",
    vezifeler: [
      "Sektor müdiri", "Baş mühasib",
      "Baş məsləhətçi", "Böyük məsləhətçi", "Aparıcı məsləhətçi", "Məsləhətçi",
      "Hakimin köməkçisi", "Məhkəmə iclasının katibi",
      "Baş mütəxəssis", "Böyük mütəxəssis", "Aparıcı mütəxəssis", "Mütəxəssis"
    ]
  },
  {
    organ: "Naxçıvan MR Ali Məclisinin Aparatı",
    vezifeler: [
      "Rəhbər", "Rəhbərin müavini", "Sədrin müşaviri", "Sədrin köməkçisi",
      "Şöbə müdiri", "Şöbə müdirinin müavini", "Sektor müdiri", "Baş mühasib",
      "Baş məsləhətçi", "Böyük məsləhətçi", "Aparıcı məsləhətçi", "Məsləhətçi",
      "Baş mütəxəssis", "Böyük mütəxəssis", "Aparıcı mütəxəssis", "Mütəxəssis"
    ]
  },
  {
    organ: "Naxçıvan MR Nazirlər Kabineti Aparatı",
    vezifeler: [
      "Rəhbər", "Rəhbərin müavini", "Baş nazirinin müşaviri", "Baş nazirinin köməkçisi",
      "Şöbə müdiri", "Şöbə müdirinin müavini", "Sektor müdiri", "Baş mühasib",
      "Baş məsləhətçi", "Böyük məsləhətçi", "Aparıcı məsləhətçi", "Məsləhətçi",
      "Baş mütəxəssis", "Böyük mütəxəssis", "Aparıcı mütəxəssis", "Mütəxəssis"
    ]
  },
  {
    organ: "Naxçıvan MR Ali Məhkəməsinin Aparatı",
    vezifeler: [
      "Rəhbər", "Rəhbərin müavini", "Sədrin köməkçisi",
      "Şöbə müdiri", "Şöbə müdirinin müavini", "Sektor müdiri", "Baş mühasib",
      "Baş məsləhətçi", "Böyük məsləhətçi", "Aparıcı məsləhətçi", "Məsləhətçi",
      "Hakimin köməkçisi", "Məhkəmə iclasının katibi",
      "Baş mütəxəssis", "Böyük mütəxəssis", "Aparıcı mütəxəssis", "Mütəxəssis"
    ]
  },
  {
    organ: "Naxçıvan MR Mərkəzi İcra Hakimiyyəti Orqanları",
    vezifeler: [
      "Aparatın rəhbəri", "Aparatın rəhbərinin müavini",
      "Şöbə müdiri", "Şöbə müdirinin müavini", "Sektor müdiri", "Baş mühasib",
      "Baş məsləhətçi", "Böyük məsləhətçi", "Aparıcı məsləhətçi", "Məsləhətçi",
      "Baş mütəxəssis", "Böyük mütəxəssis", "Aparıcı mütəxəssis", "Mütəxəssis"
    ]
  },
  {
    organ: "Naxçıvan MR Prokurorluğu",
    vezifeler: [
      "Şöbə müdiri", "Sektor müdiri", "Baş mühasib",
      "Baş məsləhətçi", "Böyük məsləhətçi", "Aparıcı məsləhətçi", "Məsləhətçi",
      "Baş mütəxəssis", "Böyük mütəxəssis", "Aparıcı mütəxəssis", "Mütəxəssis"
    ]
  },
  {
    organ: "Naxçıvan MR İnsan Hüquqları üzrə Müvəkkili (Ombudsman)",
    vezifeler: [
      "Köməkçi",
      "Şöbə müdiri", "Şöbə müdirinin müavini", "Sektor müdiri", "Baş mühasib",
      "Baş məsləhətçi", "Böyük məsləhətçi", "Aparıcı məsləhətçi", "Məsləhətçi",
      "Hakimin köməkçisi", "Məhkəmə iclasının katibi",
      "Baş mütəxəssis", "Böyük mütəxəssis", "Aparıcı mütəxəssis", "Mütəxəssis"
    ]
  },
  {
    organ: "Naxçıvan MR Mərkəzi Seçki Komissiyasının Aparatı",
    vezifeler: [
      "Şöbə müdiri", "Şöbə müdirinin müavini", "Sektor müdiri", "Baş mühasib",
      "Baş məsləhətçi", "Böyük məsləhətçi", "Aparıcı məsləhətçi", "Məsləhətçi",
      "Baş mütəxəssis", "Böyük mütəxəssis", "Aparıcı mütəxəssis", "Mütəxəssis"
    ]
  },
  {
    organ: "AR Ombudsmanın Regional Mərkəzləri",
    vezifeler: [
      "Rəhbər", "Rəhbərin müavini",
      "Sektor müdiri", "Baş mühasib",
      "Baş məsləhətçi", "Böyük məsləhətçi", "Aparıcı məsləhətçi", "Məsləhətçi",
      "Baş mütəxəssis", "Böyük mütəxəssis", "Aparıcı mütəxəssis", "Mütəxəssis"
    ]
  },
];

const allOrganNames = organData.map(o => o.organ);

const SYSTEM_PROMPT = `Sən Azərbaycan dövlət qulluğu maaş sisteminin mütəxəssisisən.
Sənə istifadəçi qurum adını və vəzifə adını yazacaq. Sən isə aşağıdakı siyahıya əsasən həmin vəzifənin ödəniş səviyyəsini (1-35 inzibati, 1-17 yardımçı) və növünü (inzibati/yardımçı) tapmalısan.
QAYDALAR:
- Yalnız JSON cavab ver, heç bir əlavə mətn yazma
- Format: {"seviyye": <ədəd>, "nov": "inzibati" və ya "yardimci", "izah": "<qısa izah Azərbaycan dilində>"}
- Əgər vəzifəni tapa bilmirsənsə: {"seviyye": null, "nov": null, "izah": "Bu vəzifə siyahıda tapılmadı"}
- "izah" sahəsində hansı bənddən tapıldığını qısa göstər
ÖDƏNIŞ SƏVİYYƏLƏRİ:
Səviyyə 1: AR Prezidenti Administrasiyasının rəhbəri
Səviyyə 2: Birinci vitse-prezidentin Katibliyinin rəisi; AR Prezidentinin İşlər müdiri; Xüsusi Tibb Xidmətinin rəisi; Təhlükəsizlik Şurasının katibi; Protokol Xidmətinin rəisi
...
Səviyyə 35: AR mərkəzi icra hakimiyyəti orqanları yanında dövlət agentlikləri yerli bölmələrində məsləhətçi; yerli icra hakimiyyəti başçılarının inzibati ərazi dairələri üzrə nümayəndəliklərində məsləhətçi
YARDIMÇI VƏZİFƏLƏR (Səviyyə 1-17): Müvafiq orqanlarda baş mütəxəssis, böyük mütəxəssis, aparıcı mütəxəssis, mütəxəssis vəzifələri. Ən yüksək səviyyəli orqanlarda (Administrasiya, Protokol, İşlər İdarəsi) 1-4-cü səviyyələr, nazirliklərdə 6-9-cu, digər orqanlarda 10-17-ci səviyyələr tətbiq olunur.`;

function getPayStep(y) { if (y < 1) return 1; if (y < 5) return 2; if (y < 10) return 3; if (y < 15) return 4; if (y < 20) return 5; if (y < 25) return 6; return 7; }

function Autocomplete({ value, onChange, onSelect, suggestions, placeholder, label }) {
  const [open, setOpen] = useState(false);
  const [highlighted, setHighlighted] = useState(0);
  const ref = useRef(null);
  const filtered = value.length > 0 ? suggestions.filter(s => s.toLowerCase().includes(value.toLowerCase())).slice(0, 8) : [];

  useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  const c = {
    border: "#e2e8f0", accent: "#005f73", bg: "#ffffff", card: "#f8f9fa",
    text: "#333333", muted: "#6c757d", dim: "#495057"
  };

  return (
    <div ref={ref} style={{ position: "relative", marginBottom: "1rem" }}>
      <label style={{ fontSize: "12px", color: c.muted, display: "block", marginBottom: "6px", letterSpacing: "0.04em", textTransform: "uppercase" }}>{label}</label>
      <input
        value={value}
        onChange={e => { onChange(e.target.value); setOpen(true); setHighlighted(0); }}
        onFocus={() => setOpen(true)}
        onKeyDown={e => {
          if (!open || !filtered.length) return;
          if (e.key === "ArrowDown") { e.preventDefault(); setHighlighted(h => Math.min(h + 1, filtered.length - 1)); }
          if (e.key === "ArrowUp") { e.preventDefault(); setHighlighted(h => Math.max(h - 1, 0)); }
          if (e.key === "Enter") { e.preventDefault(); onSelect(filtered[highlighted]); setOpen(false); }
          if (e.key === "Escape") setOpen(false);
        }}
        placeholder={placeholder}
        style={{ width: "100%", background: c.bg, border: `1px solid ${c.border}`, borderRadius: "10px", padding: "10px 14px", fontSize: "14px", color: c.text, outline: "none", boxSizing: "border-box" }}
      />
      {open && filtered.length > 0 && (
        <div style={{ position: "absolute", top: "100%", left: 0, right: 0, background: c.card, border: `1px solid ${c.border}`, borderRadius: "10px", marginTop: "4px", zIndex: 100, overflow: "hidden", boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}>
          {filtered.map((s, i) => (
            <div key={s} onMouseDown={() => { onSelect(s); setOpen(false); }}
              style={{ padding: "10px 14px", fontSize: "13px", color: i === highlighted ? "#ffffff" : c.text, background: i === highlighted ? c.accent : "transparent", cursor: "pointer", borderBottom: i < filtered.length - 1 ? `1px solid ${c.border}` : "none" }}>
              {s}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function SalaryCalculator() {
  const [organ, setOrgan] = useState("");
  const [vezife, setVezife] = useState("");
  const [years, setYears] = useState("");
  const [ixtisas, setIxtisas] = useState(0);
  const [loading, setLoading] = useState(false);
  const [aiResult, setAiResult] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [step, setStep] = useState(1);

  const selectedOrgan = organData.find(o => o.organ === organ);
  const vezifeSuggestions = selectedOrgan ? selectedOrgan.vezifeler : organData.flatMap(o => o.vezifeler).filter((v, i, a) => a.indexOf(v) === i);

  async function findLevel() {
    if (!organ.trim() || !vezife.trim()) { setError("Qurum və vəzifə adını yazın."); return; }
    setError(""); setAiResult(null); setResult(null); setLoading(true);
    try {
      const resp = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST", headers: { "Content-Type": "application/json", "x-api-key": "YOUR_API_KEY", "anthropic-version": "2023-06-01" },
        body: JSON.stringify({
          model: "claude-3-5-sonnet-20241022", max_tokens: 1000, system: SYSTEM_PROMPT,
          messages: [{ role: "user", content: `Qurum: ${organ}\nVəzifə: ${vezife}` }]
        })
      });
      const data = await resp.json();
      const parsed = JSON.parse((data.content?.[0]?.text || "").replace(/```json|```/g, "").trim());
      setAiResult(parsed);
      if (parsed.seviyye) setStep(2);
    } catch (e) { setError("Xəta: " + e.message); }
    setLoading(false);
  }

  function calcSalary() {
    setError("");
    if (!aiResult?.seviyye) { setError("Əvvəlcə vəzifəni tapın."); return; }
    const yrs = parseFloat(years);
    if (isNaN(yrs) || yrs < 0) { setError("Stajı düzgün daxil edin."); return; }
    const ps = getPayStep(yrs);
    const scale = aiResult.nov === "inzibati" ? payScales.administrative : payScales.auxiliary;
    const base = scale[aiResult.seviyye]?.[ps - 1];
    if (!base) { setError("Maaş məlumatı tapılmadı."); return; }
    const bonus = parseInt(ixtisas) || 0;
    setResult({ ps, base, bonus, total: base + bonus });
    setStep(3);
  }

  const c = { bg: "#ffffff", card: "#f8f9fa", border: "#e2e8f0", accent: "#005f73", accentMid: "rgba(0,95,115,0.3)", accentGlow: "rgba(0,95,115,0.1)", text: "#333333", muted: "#6c757d", dim: "#495057", success: "#059669", successBg: "rgba(5,150,105,0.1)", successBorder: "rgba(5,150,105,0.25)", danger: "#dc2626", dangerBg: "rgba(220,38,38,0.1)", dangerBorder: "rgba(220,38,38,0.25)", gold: "#d97706", goldBg: "rgba(217,119,6,0.1)" };
  const inp = { width: "100%", background: c.bg, border: `1px solid ${c.border}`, borderRadius: "10px", padding: "10px 14px", fontSize: "14px", color: c.text, outline: "none", boxSizing: "border-box" };
  const lbl = { fontSize: "12px", color: c.muted, display: "block", marginBottom: "6px", letterSpacing: "0.04em", textTransform: "uppercase" };

  return (
    <div style={{ background: "transparent", padding: "1.5rem 1rem", fontFamily: "var(--font-family)", color: c.text, boxSizing: "border-box" }}>
      <style>{`
        input:focus,select:focus{border-color:#005f73!important;box-shadow:0 0 0 3px rgba(0,95,115,0.15)}
        .fb{background:#005f73;color:#fff;border:none;border-radius:10px;padding:12px;font-size:14px;font-weight:500;cursor:pointer;width:100%;transition:background .2s,transform .1s}
        .fb:hover{background:#0a9396}.fb:active{transform:scale(.98)}.fb:disabled{background:#e2e8f0;color:#94a3b8;cursor:not-allowed}
        .cb{background:transparent;color:#059669;border:1px solid rgba(5,150,105,.4);border-radius:10px;padding:12px;font-size:14px;font-weight:500;cursor:pointer;width:100%;transition:all .2s}
        .cb:hover{background:rgba(5,150,105,.1)}.cb:active{transform:scale(.98)}
        .pulse{animation:pulse 2s infinite}@keyframes pulse{0%,100%{opacity:1}50%{opacity:.5}}
        .fi{animation:fi .4s ease}@keyframes fi{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
      `}</style>
      <div style={{ maxWidth: "480px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 500, margin: "0 0 6px" }}>Maaş Hesablayıcısı</h2>
          <p style={{ fontSize: "13px", color: c.muted, margin: 0 }}>Dövlət qulluqçuları üçün · 2026</p>
        </div>

        <div style={{ display: "flex", gap: "6px", marginBottom: "1.5rem" }}>
          {["Vəzifə", "Staj & İxtisas", "Nəticə"].map((l, i) => (
            <div key={i} style={{ flex: 1, textAlign: "center" }}>
              <div style={{ height: "3px", borderRadius: "2px", background: step > i ? c.accent : c.border, marginBottom: "4px", transition: "background .3s" }} />
              <span style={{ fontSize: "11px", color: step > i ? c.accent : c.dim }}>{l}</span>
            </div>
          ))}
        </div>

        <div style={{ background: c.card, border: `1px solid ${c.border}`, borderRadius: "16px", padding: "1.25rem", marginBottom: "1rem" }}>
          <Autocomplete value={organ} onChange={v => { setOrgan(v); setVezife(""); setAiResult(null); setResult(null); }} onSelect={v => { setOrgan(v); setVezife(""); setAiResult(null); setResult(null); }} suggestions={allOrganNames} placeholder="Qurum adını yazın..." label="Qurum adı" />
          <Autocomplete value={vezife} onChange={setVezife} onSelect={setVezife} suggestions={vezifeSuggestions} placeholder={organ ? "Vəzifə adını yazın..." : "Əvvəlcə qurum seçin"} label="Vəzifə adı" />
          <button className="fb" onClick={findLevel} disabled={loading}>{loading ? <span className="pulse">Axtarılır...</span> : "Ödəniş səviyyəsini tap →"}</button>
        </div>

        {error && <div className="fi" style={{ background: c.dangerBg, border: `1px solid ${c.dangerBorder}`, borderRadius: "10px", padding: "10px 14px", marginBottom: "1rem", fontSize: "13px", color: c.danger }}>{error}</div>}

        {aiResult?.seviyye && (
          <div className="fi" style={{ background: c.card, border: `1px solid ${c.border}`, borderRadius: "16px", padding: "1.25rem", marginBottom: "1rem" }}>
            <div style={{ background: c.successBg, border: `1px solid ${c.successBorder}`, borderRadius: "10px", padding: "10px 14px", marginBottom: "1.25rem", fontSize: "13px", color: c.success }}>{aiResult.izah}</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "1.25rem" }}>
              <div style={{ background: c.bg, borderRadius: "10px", padding: "12px", border: `1px solid ${c.border}` }}>
                <div style={{ fontSize: "11px", color: c.dim, marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.04em" }}>Növ</div>
                <div style={{ fontSize: "16px", fontWeight: 500 }}>{aiResult.nov === "inzibati" ? "İnzibati" : "Yardımçı"}</div>
              </div>
              <div style={{ background: c.bg, borderRadius: "10px", padding: "12px", border: `1px solid ${c.accentMid}` }}>
                <div style={{ fontSize: "11px", color: c.dim, marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.04em" }}>Səviyyə</div>
                <div style={{ fontSize: "22px", fontWeight: 500, color: c.accent }}>{aiResult.seviyye}</div>
              </div>
            </div>
            <div style={{ borderTop: `1px solid ${c.border}`, paddingTop: "1.25rem" }}>
              <div style={{ marginBottom: "1rem" }}>
                <label style={lbl}>Qulluq stajı (il)</label>
                <input style={inp} type="number" min="0" value={years} onChange={e => setYears(e.target.value)} placeholder="Məs: 7" />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={lbl}>İxtisas dərəcəsi</label>
                <select style={{ ...inp, cursor: "pointer" }} value={ixtisas} onChange={e => setIxtisas(e.target.value)}>
                  {ixtisasList.map(d => <option key={d.value} value={d.value}>{d.label}</option>)}
                </select>
              </div>
              <button className="cb" onClick={calcSalary}>Maaşı hesabla →</button>
            </div>
          </div>
        )}

        {aiResult && !aiResult.seviyye && (
          <div className="fi" style={{ background: c.dangerBg, border: `1px solid ${c.dangerBorder}`, borderRadius: "10px", padding: "10px 14px", marginBottom: "1rem", fontSize: "13px", color: c.danger }}>{aiResult.izah}</div>
        )}

        {result && (
          <div className="fi" style={{ background: c.card, border: `1px solid ${c.border}`, borderRadius: "16px", padding: "1.25rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "1rem" }}>
              <div style={{ background: c.bg, borderRadius: "10px", padding: "12px", border: `1px solid ${c.border}` }}>
                <div style={{ fontSize: "11px", color: c.dim, marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.04em" }}>Ödəniş pilləsi</div>
                <div style={{ fontSize: "18px", fontWeight: 500 }}>{result.ps}-ci</div>
              </div>
              <div style={{ background: c.bg, borderRadius: "10px", padding: "12px", border: `1px solid ${c.border}` }}>
                <div style={{ fontSize: "11px", color: c.dim, marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.04em" }}>Baza maaş</div>
                <div style={{ fontSize: "18px", fontWeight: 500 }}>{result.base.toLocaleString()} ₼</div>
              </div>
              {result.bonus > 0 && (
                <div style={{ gridColumn: "1/-1", background: c.goldBg, borderRadius: "10px", padding: "12px", border: "1px solid rgba(245,158,11,.25)" }}>
                  <div style={{ fontSize: "11px", color: c.dim, marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.04em" }}>İxtisas dərəcəsi əlavəsi</div>
                  <div style={{ fontSize: "18px", fontWeight: 500, color: c.gold }}>+{result.bonus.toLocaleString()} ₼</div>
                </div>
              )}
            </div>
            <div style={{ background: "linear-gradient(135deg,var(--primary-color) 0%,var(--secondary-color) 100%)", border: `1px solid ${c.accentMid}`, borderRadius: "14px", padding: "1.5rem", textAlign: "center" }}>
              <div style={{ fontSize: "12px", color: "#e0fbfc", marginBottom: "8px", letterSpacing: "0.06em", textTransform: "uppercase" }}>Aylıq ümumi maaş</div>
              <div style={{ fontSize: "38px", fontWeight: 500, color: "#ffffff", letterSpacing: "-0.02em" }}>{result.total.toLocaleString()} <span style={{ fontSize: "24px", color: "#e0fbfc" }}>₼</span></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
