// DEPENDENCIES
const express = require("express");
// ==============================================================================

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER
require("./routes/html-routes")(app);

// LISTENER
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
