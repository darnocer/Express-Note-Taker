// DEPENDENCIES
const router = require("express").Router();
const notesData = require("../db/db.json");
const fs = require("fs");
const util = require("util");

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

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

router.delete("/notes/:id", async function (req, res) {
  let id = req.params.id;

  let notes = await readFile("db/db.json", "utf8");

  let newNotes = JSON.parse(notes).filter((item) => item.id !== id);

  writeFile("db/db.json", JSON.stringify(newNotes)).then(() => {
    res.json(newNotes);
  });
});

module.exports = router;
