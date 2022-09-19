require("dotenv").config();

module.exports = {
  PORT: process.env.PORT,
  URL_MONGO: process.env.URL_MONGO,
  CONTENEDOR: process.env.CONTENEDOR,
  MAIL: process.env.GMAIL,
  PASS: process.env.PASSGMAIL
};