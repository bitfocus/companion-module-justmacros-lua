export const Fields = {
	FunctionName: {
		type: 'textinput',
		label: 'Function Name',
		id: 'func',
		regex: '/^[A-Za-z0-9_-]*$/',
	},
	Parameters: {
		type: 'textinput',
		label: 'Parameters (comma separated)',
		id: 'params',
	},
	ScriptName: {
		type: 'textinput',
		label: 'Script Name',
		id: 'script',
		regex: '/^[A-Za-z0-9_-]*$/',
	},
}
