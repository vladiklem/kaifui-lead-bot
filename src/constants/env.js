const dotenv = require("dotenv");

const processEnv = dotenv.config().parsed || process.env;

module.exports = processEnv;
