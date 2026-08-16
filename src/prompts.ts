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

export async function dateSequencePrompt(prompt = "Start date & interval? (e.g., 2026-08-15 +1d, +7d)") {
  const value = await window.showInputBox({
    prompt,
    placeHolder: "YYYY-MM-DD +1d (or just +1d for today)",
  });

  if (value === null || value === undefined) {
    throw new Error();
  }

  const trimmed = value.trim();

  const regex = /^(?:(\d{4})-(\d{2})-(\d{2})\s+)?([+-]?\d+)\s*([dwmy])$/i;
  const match = trimmed.match(regex);

  if (match) {
    const [, year, month, day, amountStr, unit] = match;

    const now = new Date();
    let startDate = now;

    if (year && month && day) {
      startDate = new Date(
        Number(year),
        Number(month) - 1,
        Number(day),
        now.getHours(),
        now.getMinutes(),
        now.getSeconds(),
        now.getMilliseconds(),
      );
    }

    return {
      startDate,
      amount: parseInt(amountStr, 10),
      unit: unit.toLowerCase(),
    };
  }

  return dateSequencePrompt(`“${trimmed}” isn’t valid. Try format: 2026-08-15 +1d or +1d.`);
}
