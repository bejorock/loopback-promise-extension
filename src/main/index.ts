export interface AsyncModel
{
	count(where):Promise<AsyncModelInstance>

	create(data):Promise<AsyncModelInstance>

	destroyAll(where):Promise<AsyncModelInstance>

	destroyById(id):Promise<AsyncModelInstance>

	exists(id):Promise<AsyncModelInstance>

	find(filter):Promise<AsyncModelInstance>

	findById(id, filter):Promise<AsyncModelInstance>

	findOne(filter):Promise<AsyncModelInstance>

	findOrCreate(filter, data):Promise<AsyncModelInstance>

	replaceById(id, data, options):Promise<AsyncModelInstance>

	replaceOrCreate(data, options):Promise<AsyncModelInstance>

	updateAll(where, data):Promise<AsyncModelInstance>

	upsert(data):Promise<AsyncModelInstance>

	upsertWithWhere(where, data):Promise<AsyncModelInstance>
}

export interface AsyncModelInstance
{
	destroy():Promise<void>

	reload():Promise<AsyncModelInstance>

	replaceAttributes(data, options):Promise<AsyncModelInstance>

	save(options):Promise<AsyncModelInstance>

	updateAttribute(name, value):Promise<AsyncModelInstance>

	updateAttributes(data):Promise<AsyncModelInstance>
}

export interface AsyncUser extends AsyncModel 
{
	changePassword(userId, oldPassword, newPassword, options):Promise<void>

	confirm(userId, token, redirect):Promise<void>

	generateVerificationToken(user, options):Promise<AsyncUser>

	login(credentials, include):Promise<any>

	logout(accessTokenID):Promise<void>

	resetPassword(options):Promise<void>

	setPassword(userId, newPassword, options):Promise<void>	
}

export interface AsyncUserInstance extends AsyncModelInstance
{
	changePassword(oldPassword, newPassword, options):Promise<void>

	createAccessToken(data, options):Promise<any>

	hasPassword(password):Promise<boolean>

	setPassword(newPassword, options):Promise<void>

	verify(verifyOptions):Promise<AsyncUserInstance>
}