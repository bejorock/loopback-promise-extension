const AsyncModel = require('./async-model')

module.exports = function(User) {
	model = User
	// extend user with async model
	AsyncModel(User)

	// extend user basic functionality
	User.iChangePassword = (userId, oldPassword, newPassword, options) => {
		options = (options ? options : {})
		return model.changePassword(userId, oldPassword, newPassword, options)
	}

	User.iConfirm = (userId, token, redirect) => {
		return model.confirm(userId, token, redirect)
	}

	User.iGenerateVerificationToken = (user, options) => {
		return new Promise((resolve, reject) => {
			model.generateVerificationToken(user, options, (err, instance) => {
				if(err) {
					if(err instanceof Error) reject(err)
					else resolve(err)
				} 
				else if(instance) resolve(instance)
				else resolve()
			})
		})
	}

	User.iLogin = (credentials, include) => {
		return new Promise((resolve, reject) => {
			model.login(credentials, include, (err, token) => {
				if(err) reject(err)
				else resolve(token)
			})
		})
	}

	User.iLogout = (accessTokenID) => {
		return new Promise((resolve, reject) => {
			model.logout(accessTokenID, (err) => {
				if(err) reject(err)
				else resolve()
			})
		})
	}

	User.iResetPassword = (options) => {
		return model.resetPassword(options)
	}

	User.iSetPassword = (userId, newPassword, options) => {
		return model.setPassword(userId, newPassword, options)
	}

	User.prototype.iChangePassword = (oldPassword, newPassword, options) => {
		return model.prototype.changePassword.call(this, oldPassword, newPassword, options)
	}

	User.prototype.iCreateAccessToken = (data, options) => {
		return model.prototype.createAccessToken.call(this, data, options)
	}

	User.prototype.iHasPassword = (password) => {
		return model.prototype.hasPassword.call(this, password)
	}

	User.prototype.iSetPassword = (newPassword, options) => {
		return model.prototype.setPassword.call(this, newPassword, options)
	}

	User.prototype.iVerify = (verifyOptions) => {
		return new Promise((resolve, reject) => {
			model.prototype.verify.call(this, verifyOptions, (options, err, instance) => {
				if(err) reject(err)
				else resolve(instance)
			})
		})
	}
}