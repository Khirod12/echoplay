const express = require("express");
const serveIndex = require("serve-index");

const app = express();

// /songs ke liye directory listing enable karo
app.use("/songs", express.static("songs"), serveIndex("songs", { icons: true }));

app.listen(3000, () => {
  console.log("✅ Server chal raha hai: http://127.0.0.1:3000/songs/");
});