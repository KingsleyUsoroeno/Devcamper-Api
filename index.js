const express = require("express");
const dotenv = require("dotenv");

const app = express();

// load our config files from our config folder
dotenv.config({ path: "./config/config.env" });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
