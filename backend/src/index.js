import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cookieParser());
app.use(express.json());
//  this middleware is used to extract the json data from request body
app.get("/", (req, res) => {
  res.send("this is the route");
});
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

app.listen(PORT, () => {
  console.log("server is listening  on PORT:" + PORT);
  connectDB();
});
