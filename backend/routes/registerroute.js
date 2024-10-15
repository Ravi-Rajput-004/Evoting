const express = require("express")
const variable= require("../controller/registercontroller")


const router= express.Router()
router.post("/register",variable.register)
router.post("/login",variable.login) 

module.exports=router