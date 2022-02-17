const { default: mongoose } = require("mongoose");
const debug = require("debug")("things:dataBase");

const connectDataBase = (connectionString) =>
  new Promise((resolve, reject) => {
    mongoose.connect(connectionString, (error) => {
      if (error) {
        reject(new Error(`No connection with database:${error.message}`));
        return;
      }
      debug("Connected to DB");
      resolve();
    });
  });

module.exports = connectDataBase;
