/*
 * This file is part of the Companion project
 * Copyright (c) 2018 Bitfocus AS
 * Authors: William Viker <william@bitfocus.io>, Håkon Nessjøen <haakon@bitfocus.io>
 *
 * This program is free software.
 * You should have received a copy of the MIT licence as well as the Bitfocus
 * Individual Contributor License Agreement for companion along with
 * this program.
 *
 * You can be released from the requirements of the license by purchasing
 * a commercial license. Buying such a license is mandatory as soon as you
 * develop commercial activities involving the Companion software without
 * disclosing the source code of your own applications.
 *
 */

import { Client } from 'node-rest-client'

export default class Rest {
	static Get(url, cb, extraHeaders, extraArgs) {
		const client = new Client(extraArgs)

		let args = {
			headers: { 'Content-Type': 'application/json' },
		}

		if (extraHeaders !== undefined) {
			for (let header in extraHeaders) {
				args.headers[header] = extraHeaders[header]
			}
		}

		client
			.get(url, args, function (data, response) {
				cb(null, { data: data, response: response })
			})
			.on('error', function (error) {
				cb(true, { error: error })
			})
	}

	static Post(url, data, cb, extraHeaders, extraArgs) {
		const client = new Client(extraArgs)

		let args = {
			data: data,
			headers: { 'Content-Type': 'application/json' },
		}

		if (extraHeaders !== undefined) {
			for (let header in extraHeaders) {
				args.headers[header] = extraHeaders[header]
			}
		}

		client
			.post(url, args, function (data, response) {
				cb(null, { data: data, response: response })
			})
			.on('error', function (error) {
				cb(true, { error: error })
			})
	}

	static Put(url, data, cb, extraHeaders, extraArgs) {
		const client = new Client(extraArgs)

		let args = {
			data: data,
			headers: { 'Content-Type': 'application/json' },
		}

		if (extraHeaders !== undefined) {
			for (let header in extraHeaders) {
				args.headers[header] = extraHeaders[header]
			}
		}

		client
			.put(url, args, function (data, response) {
				cb(null, { data: data, response: response })
			})
			.on('error', function (error) {
				cb(true, { error: error })
			})
	}

	static Patch(url, data, cb, extraHeaders, extraArgs) {
		const client = new Client(extraArgs)

		let args = {
			data: data,
			headers: { 'Content-Type': 'application/json' },
		}

		if (extraHeaders !== undefined) {
			for (let header in extraHeaders) {
				args.headers[header] = extraHeaders[header]
			}
		}

		client
			.patch(url, args, function (data, response) {
				cb(null, { data: data, response: response })
			})
			.on('error', function (error) {
				cb(true, { error: error })
			})
	}

	static Delete(url, data, cb, extraHeaders, extraArgs) {
		const client = new Client(extraArgs)

		let args = {
			data: data,
			headers: { 'Content-Type': 'application/json' },
		}

		if (extraHeaders !== undefined) {
			for (let header in extraHeaders) {
				args.headers[header] = extraHeaders[header]
			}
		}

		client
			.delete(url, args, function (data, response) {
				cb(null, { data: data, response: response })
			})
			.on('error', function (error) {
				cb(true, { error: error })
			})
	}
}
