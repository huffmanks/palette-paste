import {
  generateAlpha,
  generateCounter,
  generateDate,
  generateDateSequence,
  generateRoman,
  generateUuid,
  insertAtCursors,
} from "./generators";
import { dateSequencePrompt, numberPrompt } from "./prompts";

export const numberFromZero = insertAtCursors(generateCounter(0));
export const numberFromOne = insertAtCursors(generateCounter(1));
export const numberFromPrompt = async () => insertAtCursors(generateCounter(await numberPrompt()))();
export const lowerAlpha = insertAtCursors(generateAlpha(0, false));
export const upperAlpha = insertAtCursors(generateAlpha(0, true));
export const lowerRoman = insertAtCursors(generateRoman(0, false));
export const upperRoman = insertAtCursors(generateRoman(0, true));
export const insertUuid = insertAtCursors(generateUuid());
export const insertDate = insertAtCursors(generateDate());
export const dateSequenceFromPrompt = async () => {
  const { startDate, amount, unit } = await dateSequencePrompt();
  return insertAtCursors(generateDateSequence(amount, unit, startDate))();
};
