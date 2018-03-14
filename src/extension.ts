"use strict";
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below

import { commands, window, ExtensionContext } from "vscode";
import { open } from "opn-url";

export function activate(context: ExtensionContext) {
  const baseUrl: String =
    "https://ericadamski.github.io/react-gif-search/?gif=";

  const disposable = commands.registerCommand(
    "vscode-card-gifs.searchGIF",
    () => {
      window
        .showInputBox({
          placeHolder: "Enter GIF",
          prompt: "Enter the GIF you would like to seach for"
        })
        .then(input => {
          if (!input)
            return window.showErrorMessage(
              "Please enter a GIF to search for! 😵"
            );

          open(
            `${baseUrl}${input}`,
            (err: any) =>
              err &&
              window.showErrorMessage(`Could not search for ${input} GIFS 🔥`)
          );
        });
    }
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
