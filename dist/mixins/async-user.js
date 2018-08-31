"use strict";
function modifyModel(model) {
    const oldModelStatic = Object.assign({}, model);
    const oldModelPrototype = Object.assign({}, model.prototype);
    model.generateVerificationToken = function (user, options, cb) {
        if (cb)
            return oldModelStatic.generateVerificationToken.call(this, user, options, cb);
        else {
            return new Promise((resolve, reject) => {
                oldModelStatic.generateVerificationToken.call(this, user, options, (err, instance) => {
                    if (err) {
                        if (err instanceof Error)
                            reject(err);
                        else
                            resolve(err);
                    }
                    else if (instance)
                        resolve(instance);
                    else
                        resolve();
                });
            });
        }
    };
    model.login = function (credentials, include, cb) {
        if (cb)
            return oldModelStatic.login.call(this, credentials, include, cb);
        else {
            return new Promise((resolve, reject) => {
                oldModelStatic.login.call(this, credentials, include, (err, token) => {
                    if (err)
                        reject(err);
                    else
                        resolve(token);
                });
            });
        }
    };
    model.logout = function (accessTokenID, cb) {
        if (cb)
            return oldModelStatic.logout.call(this, accessTokenID, cb);
        else {
            return new Promise((resolve, reject) => {
                oldModelStatic.logout.call(this, accessTokenID, (err) => {
                    if (err)
                        reject(err);
                    else
                        resolve();
                });
            });
        }
    };
}
module.exports = modifyModel;
//# sourceMappingURL=async-user.js.map