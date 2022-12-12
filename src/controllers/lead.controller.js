const url = require("url");
const path = require("path");
const { StatusCodes } = require("http-status-codes");

const { formatLeadToMessage } = require("../helpers/formatters");
const TelegramService = require("../services/TelegramService/TelegramService");
const ResponseService = require("../services/ResponseService/ResponseService");

const getMainPageController = (req, res) => {
	res.sendFile(path.join(process.cwd(), "/public/index.html"));
};

const newLeadController = (req, res) => {
	const { description, name, phoneNumber, chatId } = url.parse(
		req.url,
		true,
	).query;

	if (phoneNumber && chatId) {
		TelegramService.sendMessage(
			chatId,
			formatLeadToMessage(name, phoneNumber, description),
		)
			.then((response) => {
				ResponseService.success(res, response);
			})
			.catch((err) => {
				ResponseService.failure(res, err);
			});
	} else {
		ResponseService.failure(
			res,
			"Invalid phoneNumber or chat ID.",
			StatusCodes.BAD_REQUEST,
		);
	}
};

module.exports = {
	getMainPageController,
	newLeadController,
};
