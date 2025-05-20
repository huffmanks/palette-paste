import * as vscode from "vscode";
import { insertDate, lowerAlpha, lowerRoman, numberFromOne, numberFromPrompt, numberFromZero, upperAlpha, upperRoman } from "./commands";
import { setDefaultDateFormat } from "./prompts";

export function activate(ctx: vscode.ExtensionContext) {
  ctx.subscriptions.push(
    vscode.commands.registerCommand("huffmanks.palette-paste.numberFromZero", numberFromZero),
    vscode.commands.registerCommand("huffmanks.palette-paste.numberFromOne", numberFromOne),
    vscode.commands.registerCommand("huffmanks.palette-paste.numberFromPrompt", numberFromPrompt),
    vscode.commands.registerCommand("huffmanks.palette-paste.lowerAlpha", lowerAlpha),
    vscode.commands.registerCommand("huffmanks.palette-paste.upperAlpha", upperAlpha),
    vscode.commands.registerCommand("huffmanks.palette-paste.lowerRoman", lowerRoman),
    vscode.commands.registerCommand("huffmanks.palette-paste.upperRoman", upperRoman),
    vscode.commands.registerCommand("huffmanks.palette-paste.insertDate", insertDate),
    vscode.commands.registerCommand("huffmanks.palette-paste.setDefaultDateFormat", setDefaultDateFormat)
  );
}

export function deactivate() {}
