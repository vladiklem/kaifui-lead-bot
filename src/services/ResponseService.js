const { StatusCodes } = require("http-status-codes");

const startReponseService = () => {
	const success = (res, data = {}) => {
		res.status(StatusCodes.OK).send(
			JSON.stringify(res.locals.data || data),
		);
	};

	const failure = (res, error) => {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(
			JSON.stringify({ error }),
		);
	};

	return {
		success,
		failure,
	};
};

module.exports = startReponseService();
