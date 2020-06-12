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
});

// * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

module.exports = router;
