const express=require("express");
const router=express.Router();
const{
loginController,
registerController,
logoutController}=require("../controllers/authController");

const authMiddleware=require("../middleware/authMiddleware");
const validateRegister=require("../middleware/validateRegister");
const validateLogin = require("../middleware/validateLogin");

router.post("/login",validateLogin,loginController);
router.post("/register",validateRegister,registerController);
router.get("/logout",logoutController)

module.exports=router;