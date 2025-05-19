import { alpha, counter, insertAtCursors, roman } from "./generators";
// import { numberPrompt } from "./prompts";

export const sequenceFromZero = insertAtCursors(counter(0));
export const sequenceFromOne = insertAtCursors(counter(1));
export const lowerAlpha = insertAtCursors(alpha(0, false));
export const upperAlpha = insertAtCursors(alpha(0, true));
export const lowerRoman = insertAtCursors(roman(0, false));
export const upperRoman = insertAtCursors(roman(0, true));
// export const sequenceFromPrompt = async () => insertAtCursors(counter(await numberPrompt()));
