exports.formatLeadToMessage = (name, phoneNumber) => {
	const date = new Date();
	const currentMoment = `${
		date.getMonth() + 1
	}-${date.getDate()}, ${`${date.getHours()}:${date.getMinutes()}`}`;

	return `Новий лід 🥳\n\nІмя: ${name}\nНомер телефону: ${phoneNumber}\n${currentMoment}`;
};
