const debug = require("debug")("things:server:middlewares:error");

const notFoundError = (req, res) => {
  res.status(404);
  res.json({ error: "Not found" });
};

// eslint-disable-next-line no-unused-vars
const generalError = (err, req, res, next) => {
  debug("Fatal error on server");
  res.status(500);
  res.json({ error: "Error on server" });
};

module.exports = {
  notFoundError,
  generalError,
};
