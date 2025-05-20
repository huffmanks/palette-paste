import { generateAlpha, generateCounter, generateDate, generateRoman, insertAtCursors } from "./generators";
import { numberPrompt } from "./prompts";

export const numberFromZero = insertAtCursors(generateCounter(0));
export const numberFromOne = insertAtCursors(generateCounter(1));
export const numberFromPrompt = async () => insertAtCursors(generateCounter(await numberPrompt()))();
export const lowerAlpha = insertAtCursors(generateAlpha(0, false));
export const upperAlpha = insertAtCursors(generateAlpha(0, true));
export const lowerRoman = insertAtCursors(generateRoman(0, false));
export const upperRoman = insertAtCursors(generateRoman(0, true));
export const insertDate = insertAtCursors(generateDate());
