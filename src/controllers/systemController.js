const os = require("os");
const ResponseService = require("../services/ResponseService/ResponseService");
const { SYSTEM_CONTROLLER_ROUTES } = require("../constants/routes");

const getSystemInfo = (req, res, next) => {
	try {
		const response = {
			cpus: os.cpus(),
			network: os.networkInterfaces(),
			os: {
				platform: process.platform,
				version: os.release(),
				totalMemory: os.totalmem(),
				uptime: os.uptime(),
			},
			currentUser: os.userInfo(),
		};
		res.locals.data = response;
		ResponseService.send(res);
	} catch (err) {
		next(err);
	}
};

const getResourcesUsage = (req, res, next) => {
	try {
		const totalMem = os.totatlmem();
		const memUsage = process.memoryUsage();
		const freeMem = os.freemem();

		const response = {
			processMemory: memUsage,
			systemMemory: {
				free: freeMem,
				total: totalMem,
				percentFree: Math.round((freeMem / totalMem) * 100),
			},
			processCpu: process.cpuUsage(),
			systemCpu: os.cpus(),
		};

		res.locals.data = response;
	} catch (err) {
		next(err);
	}
};

const systemController = (app) => {
	app.get(SYSTEM_CONTROLLER_ROUTES.INFO, getSystemInfo);
	app.get(SYSTEM_CONTROLLER_ROUTES.RESOURCES, getResourcesUsage);
};

module.exports = systemController;
