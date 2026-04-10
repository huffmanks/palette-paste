import { Selection } from "vscode";
import { NUMERALS } from "./constants";

export function sortCursors(cursors: readonly Selection[]) {
  return cursors.slice().sort((a, b) => {
    if (a.start.line !== b.start.line) {
      return a.start.line - b.start.line;
    }
    return a.start.character - b.start.character;
  });
}

export function toRoman(num: number, isUpper = true) {
  let roman = "";
  for (const [symbol, value] of NUMERALS) {
    while (num >= value) {
      roman += symbol;
      num -= value;
    }
  }
  return isUpper ? roman : roman.toLowerCase();
}

export function toAlpha(num: number, isUpper = true) {
  const character = String.fromCharCode(97 + (num % 26));
  return isUpper ? character.toUpperCase() : character.toLowerCase();
}

function formatToDateTime(date: Date): string {
  return new Intl.DateTimeFormat("sv-SE", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  })
    .format(date)
    .replace(",", "");
}

export function formatDate(format: string, date: Date): string {
  switch (format) {
    case "DateTime":
      return formatToDateTime(date);
    case "ISO":
      return date.toISOString();
    case "Locale":
      return date.toLocaleString();
    case "Unix":
      return Math.floor(date.getTime() / 1000).toString();
    case "UTC":
      return date.toUTCString();
    default:
      return "";
  }
}
