import express from "express"
import { signup } from "../controllers/auth_controller.js";
import { login } from "../controllers/auth_controller.js";
import { logout } from "../controllers/auth_controller.js";

const router = express.Router();
//Define authentication-related API endpoints and links them to their controller functions.
//http://localhost:5001/api/auth/signup 
router.post("/signup",signup);

router.post("/login",login);

router.post("/logout",logout);



export default router;