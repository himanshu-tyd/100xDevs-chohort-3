const express = require("express");

const port = 3000;
const app = express();

let reqCount = 0;

const requestCount = (req, res) => {
  reqCount++;
};  

app.use(requestCount);
app.get("/", (req, res) => {
  // requestCount(req,res)

  res.send("hey there");
});

app.get("/request", (req, res) => {
  res.send(`total request ${reqCount}`);
});

app.listen(3000, () => {
  console.log(`server is running at port ${port}`);
});
