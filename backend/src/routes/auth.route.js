import express from "express";
import {
  login,
  logout,
  signup,
  updateprofile,
  checkauth,
} from "./../controllers/auth.controller.js";
import { protectedroute } from "./../middleware/auth.middleware.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/signin", login);
router.post("/logout", logout);

router.put("/update-profile", protectedroute, updateprofile);
router.get("/check", protectedroute, checkauth);

export default router;
