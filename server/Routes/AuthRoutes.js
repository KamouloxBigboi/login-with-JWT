const router = require("express").Router();

const { SignIn, SignUp } = require("../Controllers/AuthControllers.js");

router.post("/");
router.post("/sign-up", SignUp);
router.post("/sign-in", SignIn);

module.exports = router;
