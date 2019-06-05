module.exports = app => {
	const Users = app.ChipManager.get_chip('collection', 'users');

	Users.set_access_strategy({
		default: ['roles', ['admin']],
		show: ['or', ['themselves', ['roles', ['admin']]]],
		delete: 'noone',
	});
};
