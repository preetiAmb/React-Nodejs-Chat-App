const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

module.exports = router;