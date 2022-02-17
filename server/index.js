const express = require("express");
const debug = require("debug")("things:server");

const app = express();

const initializeServer = (port) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(`Server listening in http://localhost${port}`);
      resolve();
    });

    server.on("erroe", (error) => {
      const message =
        error.code === "EADDRINUSE" ? `Port ${port} busy` : error.message;
      reject(new Error(`Error on server: ${message}`));
    });
  });

module.exports = initializeServer;
