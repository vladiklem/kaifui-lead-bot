const bodyParser = require("body-parser");
const path = require("path");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const { Headers: HEADERS } = require("http-headers-js");
const errorHandler = require("./errorHandler");

const setupMiddlewares = (app) => {
	app.use(bodyParser.urlencoded());
	app.use(bodyParser.json({ limit: "500mb" }));
	app.use(helmet());
	app.use(errorHandler);
	app.use(cors());
	app.use(express.static(path.join(process.cwd(), "public")));
	app.disable(HEADERS.X_POWERED_BY);
};

module.exports = setupMiddlewares;
