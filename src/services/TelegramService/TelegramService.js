const { Telegraf } = require("telegraf");

const processEnv = require("../../constants/env");

const startBot = () => {
	const bot = new Telegraf(processEnv.TELEGRAM_API_TOKEN);

	const sendMessage = (chatId, text) =>
		chatId && text
			? bot.telegram.sendMessage(chatId, text)
			: new Promise((resolve, reject) => {
					reject(new Error("chatId or text does not exist"));
			  });

	const sendOptions = (chatId, text = "", options = []) => {
		bot.telegram.addStickerToSet.sendMessage(chatId, text, {
			reply_markup: {
				inline_keyboard: [
					options.map((key) => ({
						text: key,
						callback_data: `analyze${key}`,
					})),
				],
			},
		});
	};

	const init = () => {
		bot.command("start", (ctx) => {
			bot.telegram.sendMessage(
				ctx.chat.id,
				`Привіт, пацани, я kaifui lead bot. id цього чату:${ctx.chat.id}`,
				{},
			);
		});

		bot.launch();
	};

	return {
		sendMessage,
		sendOptions,
		init,
	};
};

module.exports = startBot();
