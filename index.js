require("dotenv").config();
const debug = require("debug")("things:root");
const initializeServer = require("./server");

const port = process.env.SERVER_PORT || 4000;

(async () => {
  try {
    await initializeServer(port);
    debug("Server listening");
  } catch (error) {
    debug(error.message);
  }
})();
