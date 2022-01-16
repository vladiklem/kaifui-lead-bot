exports.formatLeadToMessage = (name, phoneNumber, description) => {
	const date = new Date();
	const currentMoment = `${
		date.getMonth() + 1
	}-${date.getDate()}, ${`${date.getHours()}:${date.getMinutes()}`}`;

	return `Новий лід 🥳\n\nІмя: ${name}\nНомер телефону: ${phoneNumber}\nDescription: ${description}\n\n${currentMoment}`;
};
