const processEnv = require("./src/constants/env");
const startServer = require("./src/app");

startServer(processEnv.PORT);
