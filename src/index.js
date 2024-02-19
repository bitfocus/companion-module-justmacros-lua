import { InstanceBase, Regex, runEntrypoint } from '@companion-module/base'
import { updateActions } from './actions.js'
import Rest from './vendor/companion/Rest.js'

/**
 * Companion instance class for JustMacros.
 *
 * @extends InstanceBase
 * @since 1.0.0
 * @author Keith Rocheck <keith.rocheck@gmail.com>
 */
class JustmacrosLuaInstance extends InstanceBase {
	/**
	 * Create an instance of a JustMacros module.
	 *
	 * @param {Object} internal - Companion internals
	 * @since 1.0.0
	 */
	constructor(internal) {
		super(internal)

		this.updateActions = updateActions.bind(this)
	}

	/**
	 * Process an updated configuration array
	 *
	 * @param {Object} config - the new configuration
	 * @access public
	 * @since 1.0.0
	 */
	async configUpdated(config) {
		this.config = config
	}

	/**
	 * Clean up the instance before it is destroyed.
	 *
	 * @access public
	 * @since 1.0.0
	 */
	async destroy() {
		this.log('debug', 'destroy', this.id)
	}

	/**
	 * Creates the configuration fields for web config.
	 *
	 * @returns {Array} the config fields
	 * @access public
	 * @since 1.0.0
	 */
	getConfigFields() {
		return [
			{
				type: 'textinput',
				id: 'host',
				label: 'Target IP',
				tooltip: 'The IP of the JustMacros instance',
				width: 6,
				regex: Regex.IP,
			},
			{
				type: 'textinput',
				id: 'port',
				label: 'Target Port',
				width: 4,
				default: '39812',
				regex: Regex.PORT,
			},
		]
	}

	/**
	 * Main initialization function called once the module
	 * is OK to start doing things.
	 *
	 * @param {Object} config - the configuration
	 * @access public
	 * @since 1.0.0
	 */
	async init(config) {
		this.config = config

		if (this.config.port === undefined) {
			this.config.port = 39812
		}

		this.updateActions()

		this.updateStatus('ok')
	}

	/**
	 * Executes the provided action.
	 *
	 * @param {string} uri - the command to be sent
	 * @access public
	 * @since 1.0.0
	 */
	sendCommand(uri) {
		let cmd = `http://${this.config.host}:${this.config.port}/EXECUTELUA:${uri}`

		if (uri.length > 0) {
			this.log('debug', `Get: ${cmd}`)
			Rest.Get(cmd, (err, result) => {
				if (err !== null) {
					this.updateStatus('unknown_error', 'LUA GET failed (' + result.error.code + ')')
				} else {
					this.updateStatus('ok')
				}
			})
		} else {
			this.log('error', 'LUA request not sent.  Script/Function field is incomplete.')
		}
	}
}

runEntrypoint(JustmacrosLuaInstance, [])
