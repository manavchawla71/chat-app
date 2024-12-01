const express = require("express");
const chats = require("./data/data");
const app = express();

app.get("/", (req, res) => {
  res.send("api is running");
});

app.get("/api/chat/:id", (req, res) => {
  const id = req.params.id;
  const chat = chats.find((chat) => chat._id == id);
  res.send(chat);
});
app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.listen(3000, () => {
  console.log("chatsdata", chats);
  console.log("app listening on port 3000");
});
