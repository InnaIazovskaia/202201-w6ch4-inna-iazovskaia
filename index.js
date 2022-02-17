require("dotenv").config();
const debug = require("debug")("things:root");
const initializeServer = require("./server");
const connectDataBase = require("./db");

const port = process.env.SERVER_PORT || 4000;
const mongoConnect = process.env.MONGODB_STRING;

(async () => {
  try {
    await initializeServer(port);
    await connectDataBase(mongoConnect);
  } catch (error) {
    debug(error.message);
  }
})();
