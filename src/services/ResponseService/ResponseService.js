const { StatusCodes } = require("http-status-codes");

const startResponsService = () => {
	const success = (res, data = {}) => {
		res.status(StatusCodes.OK).send(
			JSON.stringify({
				data: res.locals.data || data,
				error: null,
				ok: true,
			}),
		);
	};

	const failure = (res, error, code = StatusCodes.INTERNAL_SERVER_ERROR) => {
		res.status(code).send({ data: null, error, ok: false });
	};

	return { success, failure };
};

module.exports = startResponsService();
