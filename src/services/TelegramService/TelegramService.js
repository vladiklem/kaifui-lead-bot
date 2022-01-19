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

	const init = () => {
		bot.command("start", (ctx) => {
			bot.telegram.sendMessage(
				ctx.chat.id,
				`Привіт, друже, я KaifuiLeadBot.\n\nID цього чату: ${ctx.chat.id}`,
				{},
			);
		});

		bot.launch();
	};

	return {
		sendMessage,
		init,
	};
};

module.exports = startBot();
