const router = require("express").Router();
const notesData = require("../db/db.json");
const fs = require("fs");

router.get("/notes", function (req, res) {
  res.json(notesData);
});

router.post("/notes", function (req, res) {
  const id = new Date();
  notesData.push({ id, ...req.body });
  res.json(true);

  fs.writeFileSync("db/db.json", JSON.stringify(notesData), function (err) {
    if (err) {
      throw err;
    }
  });
});

router.delete("/notes/:id", function (req, res) {
  notesData.forEach(function (item, index, arr) {
    if (item.id === req.params.id) {
      arr.splice(index, 1);
      res.send();
      return;
    }
  });
  res.status(404).send();
});

module.exports = router;
