const router = require("express").Router();
const {signup, login} = require("../Controllers/auth.js");

router.post("/signup", signup)
router.post("/login", login)

module.exports = router;