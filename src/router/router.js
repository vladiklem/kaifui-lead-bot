const { StatusCodes } = require("http-status-codes");
const path = require("path");
const url = require("url");
const { formatLeadToMessage } = require("../helpers/formatters");
const ResponseService = require("../services/ResponseService/ResponseService");

const TelegramService = require("../services/TelegramService/TelegramService");

const router = (app) => {
	app.get("/", (req, res) => {
		res.sendFile(path.join(process.cwd(), "/public/index.html"));
	});

	app.post("/new-lead", (req, res) => {
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
	});
};

module.exports = router;
