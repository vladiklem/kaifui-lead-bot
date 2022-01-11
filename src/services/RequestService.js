// const axios= require("axios";
// const { apiHostname, defaultHeaders }= require("../constants/network";

// exports.post$ = async (path = "", body = {}, headers = {}) =>
// 	axios
// 		.post(`http://${apiHostname}/${path}`, body, {
// 			headers: { ...defaultHeaders, ...headers },
// 		})
// 		.then((res) => {
// 			return { isSuccess: true, data: res.data };
// 		})
// 		.catch((e) => {
// 			console.log(`Error in ${path} POST request: ${e}`);

// 			return { isSuccess: false, data: null };
// 		});
