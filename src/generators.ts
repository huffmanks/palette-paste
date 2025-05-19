import { window } from "vscode";

import { toAlpha, toRoman } from "./utils";

type GeneratorFn = (count: number) => readonly string[];

export function insertAtCursors(source: readonly string[] | GeneratorFn) {
  return async () => {
    const editor = window.activeTextEditor;
    if (!editor) {
      return;
    }

    await editor.edit((editBuilder) => {
      const cursors = editor.selections;
      const data = typeof source === "function" ? source(cursors.length) : source;

      cursors.forEach((cursor, i) => {
        editBuilder.insert(cursor.start, data[i] ?? "");
        editBuilder.delete(cursor);
      });
    });
  };
}

export function counter(start: number): GeneratorFn {
  return (count: number) => Array.from({ length: count }, (_, i) => String(i + start));
}

export function alpha(start: number, isUpper = true): GeneratorFn {
  return (count: number) => Array.from({ length: count }, (_, i) => toAlpha(i + start, isUpper));
}

export function roman(start: number, isUpper = true): GeneratorFn {
  return (count: number) => Array.from({ length: count }, (_, i) => toRoman(i + start + 1, isUpper));
}
