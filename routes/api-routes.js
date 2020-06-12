const router = require("express").Router();

router.get("/notes", function (req, res) {
  console.log(res.send("GET request"));
});

router.post("/notes", function (req, res) {
  console.log(res.send("POST request"));
});

router.delete("/notes/:id", function (req, res) {
  console.log(res.send("POST request"));
});

module.exports = router;
