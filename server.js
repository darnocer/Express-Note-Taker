// DEPENDENCIES
const express = require("express");
const path = require("path");

// SERVER
const app = express();

// PORT
const PORT = process.env.PORT || 8080;

// ROUTER
const htmlRoutes = require("./routes/html-routes");
const apiRoutes = require("./routes/api-routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// LISTENER
app.listen(PORT, function () {
  console.log(`App listening on PORT: ${PORT}`);
});
