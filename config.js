module.exports = {
	logger: {
		level: process.env.SEALIOUS_LOG_LEVEL || 'info',
	},
	upload_path: '/tmp',
	datastore_mongo: {
		host: 'db',
		port: 27017,
		db_name: 'sealious',
	},
	image_formats: {
		medium: {
			size: [300, 180],
		},
		small: {
			size: [100, 100],
		},
	},
	'www-server': {
		port: 8001,
	},
	smtp: {
		host: 'mailcatcher',
		port: 1025,
		user: 'any',
		password: 'any',
	},
	email: {
		from_name: 'Sealious test app',
		from_address: 'sealious@example.com',
	},
};
