import { window, workspace } from "vscode";
import { DATE_FORMAT_OPTIONS } from "./constants";

export async function numberPrompt(prompt = "Starting number?"): Promise<number> {
  const value = await window.showInputBox({ prompt });
  if (value === null || value === undefined) {
    throw new Error();
  }

  const num = Number(value);
  return Number.isFinite(num) ? num : numberPrompt(`“${value}” isn’t a number. Try again.`);
}

export async function setDefaultDateFormat() {
  const choice = await window.showQuickPick(DATE_FORMAT_OPTIONS, {
    placeHolder: "Select a default date format",
  });

  if (!choice) {
    return;
  }

  const config = workspace.getConfiguration("palettePaste");
  await config.update("defaultDateFormat", choice.label, true);
  window.showInformationMessage(`PalettePaste: Date format set to "${choice.label}" (${choice.detail}).`);
}
