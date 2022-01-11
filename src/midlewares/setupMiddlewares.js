const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const errorHandler = require("./errorHandler");

const setupMiddlewares = (app) => {
	app.use(bodyParser.urlencoded());
	app.use(bodyParser.json({ limit: "500mb" }));
	app.use(helmet());
	app.use(errorHandler);
	app.use(cors());
};

module.exports = setupMiddlewares;
