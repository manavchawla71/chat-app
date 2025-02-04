import express from "express";
import {
  getMessages,
  getUsersforSideBar,
  sendMessage,
} from "./../controllers/message.controller.js";
import { protectedroute } from "./../middleware/auth.middleware.js";
// import {
//   login,
//   logout,
//   signup,
//   updateprofile,
//   checkauth,
// } from "./../controllers/auth.controller.js";
// import { protectedroute } from "./../middleware/auth.middleware.js";
const router = express.Router();

router.get("/users", protectedroute, getUsersforSideBar);
router.get("/:id", protectedroute, getMessages);
router.post("/send/:id", protectedroute, sendMessage);
// router.post("/signup", signup);
// router.post("/signin", login);
// router.post("/logout", logout);

// router.put("/update-profile", protectedroute, updateprofile);
// router.get("/check", protectedroute, checkauth);

export default router;
