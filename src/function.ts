import { https } from "firebase-functions";
import next from "next";

const isDev = process.env.NODE_ENV !== "production";

const server = next({
	dev: isDev,
	dir: ".next",
});

const nextjsHandle = server.getRequestHandler();
exports.nextServer = https.onRequest((req, res) => {
	return server.prepare().then(() => nextjsHandle(req, res));
});
