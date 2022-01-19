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

		TelegramService.sendMessage(
			chatId,
			formatLeadToMessage(name, phoneNumber, description),
		)
			.then(() => {
				ResponseService.success(res, { isSuccess: true });
			})
			.catch((err) => {
				ResponseService.failure(res, err);
			});
	});
};

module.exports = router;
