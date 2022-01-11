const { StatusCodes } = require("http-status-codes");

const errorHandler = (err, req, res, next) => {
	if (err) {
		console.error(err.messgae);
		const status = err.status || StatusCodes.INTERNAL_SERVER_ERROR;

		const body = {
			fields: err.fields,
			message: err.message || "An error occurred during the request.",
			name: err.name,
			status,
		};

		res.status(status).json(body);
	}

	next();
};

module.exports = errorHandler;
