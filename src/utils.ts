import { numerals } from "./constants";

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
