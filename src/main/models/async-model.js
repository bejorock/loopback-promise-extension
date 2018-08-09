class NotValidArgumentException extends Error {
	constructor() {
		super('arguments not valid or empty')
	}
}

module.exports = function(AsyncModel) {
	const model = AsyncModel //Object.assign({}, AsyncModel);

	AsyncModel.iCount = function(where) {
		where = (where ? where : {});
		return new Promise((resolve, reject) => {
			this.count(where, (err, count) => {
				if(err) reject(err)
				else resolve(count)
			})
		})
	}

	AsyncModel.iCreate = function(data) {
		if(!data)
				throw new NotValidArgumentException()
		return new Promise((resolve, reject) => {
			this.create(data, (err, models) => {
				if(err) reject(err)
				else resolve(models)
			})
		})
	}

	AsyncModel.iDestroyAll = function(where) {
		where = (where ? where : {})
		return new Promise((resolve, reject) => {
			this.destroyAll(where, (err, info, count) => {
				if(err) reject(err)
				else resolve({info, count})
			})	
		})
	}

	AsyncModel.iDestroyById = function(id) {
		return new Promise((resolve, reject) => {
			this.destroyById(id, (err) => {
				if(err) reject(err)
				else resolve(id)
			})
		})
	}

	AsyncModel.iExists = function(id) {
		return new Promise((resolve, reject) => {
			this.exists(id, (err, exists) => {
				if(err) reject(err)
				else resolve(exists)
			})
		})
	}

	AsyncModel.iFind = function(filter) {
		filter = (filter ? filter : {})
		return new Promise((resolve, reject) => {
			this.find(filter, (err, instances) => {
				if(err) reject(err)
				else resolve(instances)
			})
		})
	}

	AsyncModel.iFindById = function(id, filter) {
		filter = (filter ? filter : {})
		return new Promise((resolve, reject) => {
			this.findById(id, filter, (err, instance) => {
				if(err) reject(err)
				else resolve(instance)
			})
		})
	}

	AsyncModel.iFindOne = function(filter) {
		filter = (filter ? filter : {})
		return new Promise((resolve, reject) => {
			this.findOne(filter, (err, instance) => {
				if(err) reject(err)
				else resolve(instance)
			})
		})
	}

	AsyncModel.iFindOrCreate = function(filter, data) {
		filter = (filter ? filter : {})
		return new Promise((resolve, reject) => {
			this.findOrCreate(filter, data, (err, instance, created) => {
				if(err) reject(err)
				else resolve({instance, created})
			})
		})
	}

	AsyncModel.iReplaceById = function(id, data, options) {
		return new Promise((resolve, reject) => {
			this.replaceById(id, data, options, (err, instance) => {
				if(err) reject(err)
				else resolve(instance)
			})
		})
	}

	AsyncModel.iReplaceOrCreate = function(data, options) {
		return new Promise((resolve, reject) => {
			this.replaceOrCreate(data, options, (err, instance) => {
				if(err) reject(err)
				else resolve(instance)
			})
		})
	}

	AsyncModel.iUpdateAll = function(where, data) {
		where = (where ? where : {})
		return new Promise((resolve, reject) => {
			this.updateAll(where, data, (err, info) => {
				if(err) reject(err)
				else resolve(info)
			})
		})
	}

	AsyncModel.iUpsert = function(data) {
		return new Promise((resolve, reject) => {
			this.upsert(data, (err, instance) => {
				if(err) reject(err)
				else resolve(instance)
			})
		})
	}

	AsyncModel.iUpsertWithWhere = function(where, data) {
		where = (where ? where : {})
		return new Promise((resolve, reject) => {
			this.upsertWithWhere(where, data, (err, instance) => {
				if(err) reject(err)
				else resolve(instance)
			})
		})
	}

	AsyncModel.prototype.iDestroy = function() {
		return new Promise((resolve, reject) => {
			this.destroy(() => {
				resolve()
			})
		})
	}

	AsyncModel.prototype.iReload = function() {
		return new Promise((resolve, reject) => {
			this.reload((err, instance) => {
				if(err) reject(err)
				else resolve(instance)
			})
		})
	}

	AsyncModel.prototype.iReplaceAttributes = function(data, options) {
		options = (options ? options : {})
		return new Promise((resolve, reject) => {
			this.replaceAttributes(data, options, (err, instance) => {
				if(err) reject(err)
				else resolve(instance)
			})
		})
	}

	AsyncModel.prototype.iSave = function(options) {
		options = (options ? options : {})
		return new Promise((resolve, reject) => {
			this.save(options, (err, instance) => {
				if(err) reject(err)
				else resolve(instance)
			})
		})
	}

	AsyncModel.prototype.iUpdateAttribute = function(name, value) {
		return new Promise((resolve, reject) => {
			this.updateAttribute(name, value, (err, instance) => {
				if(err) reject(err)
				else resolve(instance)
			})
		})
	}

	AsyncModel.prototype.iUpdateAttributes = function(data) {
		return new Promise((resolve, reject) => {
			this.updateAttributes(data, (err, instance) => {
				if(err) reject(err)
				else resolve(instance)
			})
		})
	}

	return AsyncModel
}