const express = require("express");
const debug = require("debug")("things:server");
const morgan = require("morgan");
const { notFoundError, generalError } = require("./middlewares/errors");
const thingsRouter = require("./routers/thingRouter");

const app = express();

const initializeServer = (port) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(`Server listening in http://localhost${port}`);
      resolve();
    });

    server.on("error", (error) => {
      const message =
        error.code === "EADDRINUSE" ? `Port ${port} busy` : error.message;
      reject(new Error(`Error on server: ${message}`));
    });
  });

app.use(morgan("dev"));
app.use(express.json());

app.use("/things", thingsRouter);

app.use(notFoundError);
app.use(generalError);

module.exports = initializeServer;
