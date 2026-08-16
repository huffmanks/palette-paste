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
    label: "Compact",
    description: "$(home) Local Time Zone",
    detail: "YYYY-MM-DD HH:mm:ss",
  },
  {
    label: "ISO",
    description: "$(globe) UTC",
    detail: "YYYY-MM-DDTHH:mm:ss.sssZ",
  },
  {
    label: "Locale",
    description: "$(home) Local Time Zone",
    detail: "e.g. [en-US] M/D/YYYY, h:mm:ss A — based on system’s regional settings",
  },
  {
    label: "Unix Timestamp",
    description: "$(globe) UTC",
    detail: "e.g. 1786818432 - seconds since Jan. 1, 1970",
  },
  {
    label: "UTC",
    description: "$(globe) UTC",
    detail: "ddd, DD MMM YYYY HH:mm:ss GMT",
  },
];
