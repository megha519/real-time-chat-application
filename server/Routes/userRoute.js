const express = require("express")
const {registerUser, loginuser, finduser, getusers} = require("../Controllers/userController")
const router = express.Router()

router.post("/register", registerUser)
router.post("/login", loginuser)
router.get("/find/:userId", finduser)
router.get("/", getusers)
 


module.exports = router