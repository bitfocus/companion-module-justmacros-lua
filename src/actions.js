import { Fields } from './setup.js'

/**
 * Setup the actions.
 *
 * @access public
 * @since 1.0.0
 */
export function updateActions() {
	this.setActionDefinitions({
		luaFunc: {
			label: 'Execute Function',
			options: [Fields.FunctionName, Fields.Parameters],
			callback: ({ options }) => {
				if (options.func != '') {
					this.sendCommand(`${options.func}(${options.params});`)
				}
			},
		},
		luaScript: {
			label: 'Execute Script',
			options: [Fields.ScriptName],
			callback: ({ options }) => {
				if (options.script != '') {
					this.sendCommand(`ScriptExecute("${options.script}");`)
				}
			},
		},
	})
}
