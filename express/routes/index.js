var express = require("express");
var router = express.Router();
const debug = require("debug")("module-name");

const notes = require("../models/notes-memory");
/* GET home page. */
router.get("/", async (req, res, next) => {
  debug('this is debug')
  let keylist = await notes.keylist();
  let keyPromises = keylist.map(key => {
    return notes.read(key);
  });
  let notelist = await Promise.all(keyPromises);
  res.render("index", { title: "Notes", notelist: notelist });
  // res.render("index", { title: "Notes", notelist: notelist });
});

module.exports = router;
