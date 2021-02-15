const pubsub = require('../../lib/pubsub.js')
const { sign } = require('../../lib/jwt.js')
const { users, permissions } = require('../../database/database')

module.exports = {
	Query: {
		users: () => {
			return users
		}
	},

	Mutation: {
		registerUser: (_, { username, password }) => {
			let user = {
				id: users.length + 1,
				username,
				password
			}
			pubsub.publish('NEW_USER', user)
			users.push(user)
			return {
				message: 'You are registered!',
				token: sign({ id: user.id })
			}
		},
		loginUser: (_, { username, password }) => {
			let user = users.find(user => user.username === username && user.password === password)
			if (user) {
				return {
					message: 'You are logged in!',
					token: sign({ id: user.id })
				}
			} else {
				return {
					message: 'You are not registered!',
					token: null,
				}
			}
		},
		addPermission: (_, { userId, permissionCode }) => {
			let perm = {
				permission_id: permissions[permissions.length - 1].permission_id + 1,
				user_id: userId,
				permission_code: permissionCode
			}
			permissions.push(perm)
			return 'permission added!'
		}
	},

	Subscription: {
		newUser: {
			subscribe: () => pubsub.asyncIterator(['NEW_USER']),
			resolve: (payload) => {
				return payload
			},
		}
	}
}