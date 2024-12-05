const fs = require("fs");
const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());

const dirPath = path.join(__dirname, "../HTTP-SERVER");

app.get("/files", (req, res) => {
  console.log("path ->", dirPath);

  fs.readdir(dirPath, "utf-8", (err, files) => {
    if (err) {
      return res.json({ message: "somthing get wrong", error: err });
    }

    if (files.length === 0) {
      return res.status(404).json({ message: "file not found" });
    }

    res.json({ files: files });
  });
});

app.get("/files/:fileName", (req, res) => {
  const file = req.params.fileName;

  const filePath=`${dirPath}/${file}`
  console.log(filePath)

  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      return res.json({ message: "failed to get data", error: err });
    }
    console.log(data);
    res.json({ message: "get data successfull", content: data });
  });
});

app.listen(3000, () => {
  console.log(`server is running at ${3000}`);
});
