"use strict";
class NotValidArgumentException extends Error {
    constructor() {
        super('arguments not valid or empty');
    }
}
function modifyModel(model) {
    const oldModelStatic = Object.assign({}, model);
    const oldModelPrototype = Object.assign({}, model.prototype);
    model.count = function (where, cb) {
        where = (where ? where : {});
        if (cb)
            return oldModelStatic.count.call(this, where, cb);
        else {
            return new Promise((resolve, reject) => {
                oldModelStatic.count.call(this, where, (err, count) => {
                    if (err)
                        reject(err);
                    else
                        resolve(count);
                });
            });
        }
    };
    model.create = function (data, cb) {
        if (!data)
            throw new NotValidArgumentException();
        if (cb)
            return oldModelStatic.create.call(this, data, cb);
        else {
            return new Promise((resolve, reject) => {
                oldModelStatic.create.call(this, data, (err, models) => {
                    if (err)
                        reject(err);
                    else
                        resolve(models);
                });
            });
        }
    };
    model.destroyAll = function (where, cb) {
        where = (where ? where : {});
        if (cb)
            return oldModelStatic.destroyAll.call(this, where, cb);
        else {
            return new Promise((resolve, reject) => {
                oldModelStatic.destroyAll.call(this, where, (err, info, count) => {
                    if (err)
                        reject(err);
                    else
                        resolve({ info, count });
                });
            });
        }
    };
    model.destroyById = function (id, cb) {
        if (cb)
            return oldModelStatic.destroyById.call(this, id, cb);
        else {
            return new Promise((resolve, reject) => {
                oldModelStatic.destroyById.call(this, id, (err) => {
                    if (err)
                        reject(err);
                    else
                        resolve(id);
                });
            });
        }
    };
    model.exists = function (id, cb) {
        if (cb)
            return oldModelStatic.exists.call(this, id, cb);
        else {
            return new Promise((resolve, reject) => {
                oldModelStatic.exists.call(this, id, (err, exists) => {
                    if (err)
                        reject(err);
                    else
                        resolve(exists);
                });
            });
        }
    };
    model.find = function (filter, cb) {
        filter = (filter ? filter : {});
        if (cb)
            return oldModelStatic.find.call(this, filter, cb);
        else {
            return new Promise((resolve, reject) => {
                oldModelStatic.find.call(this, filter, (err, instances) => {
                    if (err)
                        reject(err);
                    else
                        resolve(instances);
                });
            });
        }
    };
    model.findById = function (id, filter, cb) {
        filter = (filter ? filter : {});
        if (cb)
            return oldModelStatic.findById.call(this, id, filter, cb);
        else {
            return new Promise((resolve, reject) => {
                oldModelStatic.findById.call(this, id, filter, (err, instance) => {
                    if (err)
                        reject(err);
                    else
                        resolve(instance);
                });
            });
        }
    };
    model.findOne = function (filter, cb) {
        filter = (filter ? filter : {});
        if (cb)
            return oldModelStatic.findOne.call(this, filter, cb);
        else {
            return new Promise((resolve, reject) => {
                oldModelStatic.findOne.call(this, filter, (err, instance) => {
                    if (err)
                        reject(err);
                    else
                        resolve(instance);
                });
            });
        }
    };
    model.findOrCreate = function (filter, data, cb) {
        filter = (filter ? filter : {});
        if (cb)
            return oldModelStatic.findOrCreate.call(this, filter, data, cb);
        else {
            return new Promise((resolve, reject) => {
                oldModelStatic.findOrCreate.call(this, filter, data, (err, instance, created) => {
                    if (err)
                        reject(err);
                    else
                        resolve({ instance, created });
                });
            });
        }
    };
    model.replaceById = function (id, data, options, cb) {
        if (cb)
            return oldModelStatic.replaceById.call(this, id, data, options, cb);
        else {
            return new Promise((resolve, reject) => {
                oldModelStatic.replaceById.call(this, id, data, options, (err, instance) => {
                    if (err)
                        reject(err);
                    else
                        resolve(instance);
                });
            });
        }
    };
    model.replaceOrCreate = function (data, options, cb) {
        if (cb)
            return oldModelStatic.replaceOrCreate.call(this, data, options, cb);
        else {
            return new Promise((resolve, reject) => {
                oldModelStatic.replaceOrCreate.call(this, data, options, (err, instance) => {
                    if (err)
                        reject(err);
                    else
                        resolve(instance);
                });
            });
        }
    };
    model.updateAll = function (where, data, cb) {
        where = (where ? where : {});
        if (cb)
            return oldModelStatic.updateAll.call(this, where, data, cb);
        else {
            return new Promise((resolve, reject) => {
                oldModelStatic.updateAll.call(this, where, data, (err, info) => {
                    if (err)
                        reject(err);
                    else
                        resolve(info);
                });
            });
        }
    };
    model.upsert = function (data, cb) {
        if (cb)
            return oldModelStatic.upsert.call(this, data, cb);
        else {
            return new Promise((resolve, reject) => {
                oldModelStatic.upsert.call(this, data, (err, instance) => {
                    if (err)
                        reject(err);
                    else
                        resolve(instance);
                });
            });
        }
    };
    model.upsertWithWhere = function (where, data, cb) {
        where = (where ? where : {});
        if (cb)
            return oldModelStatic.upsertWithWhere.call(this, where, data, cb);
        else {
            return new Promise((resolve, reject) => {
                oldModelStatic.upsertWithWhere.call(this, where, data, (err, instance) => {
                    if (err)
                        reject(err);
                    else
                        resolve(instance);
                });
            });
        }
    };
    model.prototype.destroy = function (cb) {
        if (cb)
            return oldModelPrototype.destroy.call(this, cb);
        return new Promise((resolve, reject) => {
            oldModelPrototype.destroy.call(this, () => {
                resolve();
            });
        });
    };
    model.prototype.reload = function (cb) {
        if (cb)
            return oldModelPrototype.reload.call(this, cb);
        else {
            return new Promise((resolve, reject) => {
                oldModelPrototype.reload.call(this, (err, instance) => {
                    if (err)
                        reject(err);
                    else
                        resolve(instance);
                });
            });
        }
    };
    model.prototype.replaceAttributes = function (data, options, cb) {
        options = (options ? options : {});
        if (cb)
            return oldModelPrototype.replaceAttributes.call(this, data, options, cb);
        else {
            return new Promise((resolve, reject) => {
                oldModelPrototype.replaceAttributes.call(this, data, options, (err, instance) => {
                    if (err)
                        reject(err);
                    else
                        resolve(instance);
                });
            });
        }
    };
    model.prototype.save = function (options, cb) {
        options = (options ? options : {});
        if (cb)
            return oldModelPrototype.save.call(this, options, cb);
        else {
            return new Promise((resolve, reject) => {
                oldModelPrototype.save.call(this, options, (err, instance) => {
                    if (err)
                        reject(err);
                    else
                        resolve(instance);
                });
            });
        }
    };
    model.prototype.updateAttribute = function (name, value, cb) {
        if (cb)
            return oldModelPrototype.updateAttribute.call(this, name, value, cb);
        else {
            return new Promise((resolve, reject) => {
                oldModelPrototype.updateAttribute.call(this, name, value, (err, instance) => {
                    if (err)
                        reject(err);
                    else
                        resolve(instance);
                });
            });
        }
    };
    model.prototype.updateAttributes = function (data, cb) {
        if (cb)
            return oldModelPrototype.updateAttributes.call(this, data, cb);
        else {
            return new Promise((resolve, reject) => {
                oldModelPrototype.updateAttributes.call(this, data, (err, instance) => {
                    if (err)
                        reject(err);
                    else
                        resolve(instance);
                });
            });
        }
    };
}
module.exports = modifyModel;
//# sourceMappingURL=async-model.js.map