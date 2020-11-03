// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let createSvelte = vscode.commands.registerCommand('svelte-starter.createSvelte', function (uri) {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Svelte starting');
		const terminal = vscode.window.createTerminal("svelte-terminal");
		terminal.show();
		terminal.sendText(`cd ${uri.fsPath}`);
		terminal.sendText("npx degit sveltejs/template .");
		terminal.sendText("npm install");
		terminal.sendText("npm run dev");
	});

	let createSapper = vscode.commands.registerCommand('svelte-starter.createSapper', function (uri) {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Svelte starting');
		const terminal = vscode.window.createTerminal("svelte-terminal");
		terminal.show();
		terminal.sendText(`cd ${uri.fsPath}`);
		terminal.sendText("npx degit sveltejs/sapper-template#rollup .");
		terminal.sendText("npm install");
		terminal.sendText("npm run dev");
	});

	let runSvelte = vscode.commands.registerCommand('svelte-starter.runSvelte', function (uri) {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Svelte starting');
		const terminal = vscode.window.createTerminal("svelte-terminal");
		terminal.show();
		terminal.sendText(`cd ${uri.fsPath}`);
		terminal.sendText("npm run dev");
	});

	context.subscriptions.push(createSvelte);
	context.subscriptions.push(createSapper);
	context.subscriptions.push(runSvelte);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
