class NotValidArgumentException extends Error {
	constructor() {
		super('arguments not valid or empty')
	}
}

module.exports = function(AsyncModel) {
	const model = AsyncModel //Object.assign({}, AsyncModel);

	AsyncModel.iCount = (where) => {
		where = (where ? where : {});
		return new Promise((resolve, reject) => {
			model.count(where, (err, count) => {
				if(err) reject(err)
				else resolve(count)
			})
		})
	}

	AsyncModel.iCreate = (data) => {
		if(!data)
				throw new NotValidArgumentException()
		return new Promise((resolve, reject) => {
			model.create(data, (err, models) => {
				if(err) reject(err)
				else resolve(models)
			})
		})
	}

	AsyncModel.iDestroyAll = (where) => {
		where = (where ? where : {})
		return new Promise((resolve, reject) => {
			model.destroyAll(where, (err, info, count) => {
				if(err) reject(err)
				else resolve({info, count})
			})	
		})
	}

	AsyncModel.iDestroyById = (id) => {
		return new Promise((resolve, reject) => {
			model.destroyById(id, (err) => {
				if(err) reject(err)
				else resolve(id)
			})
		})
	}

	AsyncModel.iExists = (id) => {
		return new Promise((resolve, reject) => {
			model.exists(id, (err, exists) => {
				if(err) reject(err)
				else resolve(exists)
			})
		})
	}

	AsyncModel.iFind = (filter) => {
		filter = (filter ? filter : {})
		return new Promise((resolve, reject) => {
			model.find(filter, (err, instances) => {
				if(err) reject(err)
				else resolve(instances)
			})
		})
	}

	AsyncModel.iFindById = (id, filter) => {
		filter = (filter ? filter : {})
		return new Promise((resolve, reject) => {
			model.findById(id, filter, (err, instance) => {
				if(err) reject(err)
				else resolve(instance)
			})
		})
	}

	AsyncModel.iFindOne = (filter) => {
		filter = (filter ? filter : {})
		console.log(this.constructor.name)
		console.log(AsyncModel)
		console.log(model)
		return new Promise((resolve, reject) => {
			model.findOne(filter, (err, instance) => {
				if(err) reject(err)
				else resolve(instance)
			})
		})
	}

	AsyncModel.iFindOrCreate = (filter, data) => {
		filter = (filter ? filter : {})
		return new Promise((resolve, reject) => {
			model.findOrCreate(filter, data, (err, instance, created) => {
				if(err) reject(err)
				else resolve({instance, created})
			})
		})
	}

	AsyncModel.iReplaceById = (id, data, options) => {
		return new Promise((resolve, reject) => {
			model.replaceById(id, data, options, (err, instance) => {
				if(err) reject(err)
				else resolve(instance)
			})
		})
	}

	AsyncModel.iReplaceOrCreate = (data, options) => {
		return new Promise((resolve, reject) => {
			model.replaceOrCreate(data, options, (err, instance) => {
				if(err) reject(err)
				else resolve(instance)
			})
		})
	}

	AsyncModel.iUpdateAll = (where, data) => {
		where = (where ? where : {})
		return new Promise((resolve, reject) => {
			model.updateAll(where, data, (err, info) => {
				if(err) reject(err)
				else resolve(info)
			})
		})
	}

	AsyncModel.iUpsert = (data) => {
		return new Promise((resolve, reject) => {
			model.upsert(data, (err, instance) => {
				if(err) reject(err)
				else resolve(instance)
			})
		})
	}

	AsyncModel.iUpsertWithWhere = (where, data) => {
		where = (where ? where : {})
		return new Promise((resolve, reject) => {
			model.upsertWithWhere(where, data, (err, instance) => {
				if(err) reject(err)
				else resolve(instance)
			})
		})
	}

	AsyncModel.prototype.iDestroy = () => {
		return new Promise((resolve, reject) => {
			model.prototype.destroy.call(this, () => {
				resolve()
			})
		})
	}

	AsyncModel.prototype.iReload = () => {
		return new Promise((resolve, reject) => {
			model.prototype.reload.call(this, (err, instance) => {
				if(err) reject(err)
				else resolve(instance)
			})
		})
	}

	AsyncModel.prototype.iReplaceAttributes = (data, options) => {
		options = (options ? options : {})
		return new Promise((resolve, reject) => {
			model.prototype.replaceAttributes.call(this, data, options, (err, instance) => {
				if(err) reject(err)
				else resolve(instance)
			})
		})
	}

	AsyncModel.prototype.iSave = (options) => {
		options = (options ? options : {})
		return new Promise((resolve, reject) => {
			model.prototype.save.call(this, options, (err, instance) => {
				if(err) reject(err)
				else resolve(instance)
			})
		})
	}

	AsyncModel.prototype.iUpdateAttribute = (name, value) => {
		return new Promise((resolve, reject) => {
			model.prototype.updateAttribute.call(this, name, value, (err, instance) => {
				if(err) reject(err)
				else resolve(instance)
			})
		})
	}

	AsyncModel.prototype.iUpdateAttributes = (data) => {
		return new Promise((resolve, reject) => {
			model.prototype.updateAttributes.call(this, data, (err, instance) => {
				if(err) reject(err)
				else resolve(instance)
			})
		})
	}

	return AsyncModel
}