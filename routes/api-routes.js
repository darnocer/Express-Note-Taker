const router = require("express").Router();

router.get("/api/notes", function (req, res) {
  console.log(res.send("GET request"));
});

router.post("/api/notes", function (req, res) {
  console.log(res.send("POST request"));
});

router.delete("/api/notes/:id", function (req, res) {
  console.log(res.send("POST request"));
});

module.exports = router;

//   fs.writeFileSync("../db/db.json", JSON.stringify(notesData));

// The application should have a db.json file on the backend that will be used to store and retrieve notes using the fs module.

// The following API routes should be created:

// GET /api/notes - Should read the db.json file and return all saved notes as JSON.

// POST /api/notes - Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.

// DELETE /api/notes/:id - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
