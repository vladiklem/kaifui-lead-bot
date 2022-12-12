const { Telegraf } = require("telegraf");

const processEnv = require("../../constants/env");
// Comment

const startBot = () => {
	const bot = new Telegraf(processEnv.TELEGRAM_API_TOKEN);

	const sendMessage = async (chatId, text) => {
		const response = await bot.telegram.sendMessage(chatId, text);

		return response;
	};

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
