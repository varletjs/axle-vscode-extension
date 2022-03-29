import * as vscode from 'vscode'

async function pasteURL() {
  const text = await vscode.env.clipboard.readText()
  const url = text.match(/(https?:)?\/\S+/)?.[0] ?? ''

  if (!url) {
    vscode.window.showInformationMessage('Cannot find url in clipboard!')
    return
  }
  
  vscode.window.activeTextEditor?.insertSnippet(new vscode.SnippetString(url))
}

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(vscode.commands.registerCommand('extension.findClipboardURL', pasteURL))
}

export function deactivate() {}


