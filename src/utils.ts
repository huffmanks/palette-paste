import { Selection } from "vscode";
import { numerals } from "./constants";

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
  for (const [symbol, value] of numerals) {
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

export function formatDate(format: string, date: Date): string {
  switch (format) {
    case "ISO":
      return date.toISOString();
    case "UTC":
      return date.toUTCString();
    case "Locale":
      return date.toLocaleString();
    case "Unix":
      return Math.floor(date.getTime() / 1000).toString();
    default:
      return "";
  }
}
