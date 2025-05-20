import { window, workspace } from "vscode";

import { formatDate, sortCursors, toAlpha, toRoman } from "./utils";

type SequenceGenerator = (count: number) => readonly string[];

export function insertAtCursors(source: readonly string[] | SequenceGenerator) {
  return async () => {
    const editor = window.activeTextEditor;
    if (!editor) {
      return;
    }

    await editor.edit((editBuilder) => {
      const cursors = sortCursors(editor.selections);
      const data = typeof source === "function" ? source(cursors.length) : source;

      cursors.forEach((cursor, i) => {
        editBuilder.insert(cursor.start, data[i] ?? "");
        editBuilder.delete(cursor);
      });
    });
  };
}

export function generateCounter(start: number): SequenceGenerator {
  return (count: number) => Array.from({ length: count }, (_, i) => String(i + start));
}

export function generateAlpha(start: number, isUpper = true): SequenceGenerator {
  return (count: number) => Array.from({ length: count }, (_, i) => toAlpha(i + start, isUpper));
}

export function generateRoman(start: number, isUpper = true): SequenceGenerator {
  return (count: number) => Array.from({ length: count }, (_, i) => toRoman(i + start + 1, isUpper));
}

export function generateDate(): SequenceGenerator {
  return (count: number) => {
    const config = workspace.getConfiguration("palettePaste");
    const format = config.get("defaultDateFormat") as string;
    const date = formatDate(format, new Date());
    return Array(count).fill(date);
  };
}
