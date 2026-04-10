export const NUMERALS: [string, number][] = [
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1],
];

export const DATE_FORMAT_OPTIONS = [
  {
    label: "DateTime",
    description: "$(home) Local",
    detail: "YYYY-MM-DD HH:mm:ss",
  },
  {
    label: "ISO",
    description: "$(globe) UTC",
    detail: "YYYY-MM-DDTHH:mm:ss.sssZ",
  },
  {
    label: "Locale",
    description: "$(home) Local",
    detail: "Based on your system’s regional settings",
  },
  {
    label: "Unix",
    description: "$(globe) UTC",
    detail: "Seconds since epoch (Timestamp)",
  },
  {
    label: "UTC",
    description: "$(globe) UTC",
    detail: "ddd, DD MMM YYYY HH:mm:ss GMT",
  },
];
