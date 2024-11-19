import * as functions from "firebase-functions";
import next from "next";


const app = next({
  dev: false,
  conf: require("./next.config.js"), // Use the next.config.js file if needed
});

const handle = app.getRequestHandler();

export const nextjsFunc = functions.https.onRequest(async (req, res) => {
  await app.prepare();
  handle(req, res);
});
