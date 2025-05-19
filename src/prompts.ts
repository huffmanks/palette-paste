import { window } from "vscode";

export async function numberPrompt(prompt = "Starting number?"): Promise<number> {
  const value = await window.showInputBox({ prompt });
  if (value === null) {
    throw new Error();
  }

  const num = Number(value);
  return Number.isFinite(num) ? num : numberPrompt(`“${value}” isn’t a number. Try again.`);
}
