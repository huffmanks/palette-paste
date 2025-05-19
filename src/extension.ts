import * as vscode from "vscode";
import { lowerAlpha, lowerRoman, sequenceFromOne, sequenceFromZero, upperAlpha, upperRoman } from "./commands";

export function activate(ctx: vscode.ExtensionContext) {
  ctx.subscriptions.push(
    vscode.commands.registerCommand("huffmanks.palette-paste.sequenceFromZero", sequenceFromZero),
    vscode.commands.registerCommand("huffmanks.palette-paste.sequenceFromOne", sequenceFromOne),
    // vscode.commands.registerCommand("huffmanks.palette-paste.sequenceFromPrompt", sequenceFromPrompt),
    vscode.commands.registerCommand("huffmanks.palette-paste.lowerAlpha", lowerAlpha),
    vscode.commands.registerCommand("huffmanks.palette-paste.upperAlpha", upperAlpha),
    vscode.commands.registerCommand("huffmanks.palette-paste.lowerRoman", lowerRoman),
    vscode.commands.registerCommand("huffmanks.palette-paste.upperRoman", upperRoman)
  );
}

export function deactivate() {}
