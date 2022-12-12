const {
	getMainPageController,
	newLeadController,
} = require("../controllers/lead.controller");

const router = (app) => {
	app.get("/", getMainPageController);

	app.post("/new-lead", newLeadController);
};

module.exports = router;
