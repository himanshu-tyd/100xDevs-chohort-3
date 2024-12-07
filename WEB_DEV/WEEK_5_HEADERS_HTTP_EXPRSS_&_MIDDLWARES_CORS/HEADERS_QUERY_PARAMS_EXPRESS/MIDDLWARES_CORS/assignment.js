const express = require("express");

const app = express();

const port = 3000;

app.use((req,res,next)=>{
    console.log('Methods', req.method)
    console.log('URL ', req.url)
    console.log('hostname', req.hostname)
    console.log("ip", req.ip)
    console.log('data', new Date())

    next()
})

app.get("/sum", (req, res) => {
  const { x, y } = req.query;

  res.status(200).json({ ans: x + y });
});
app.get("/divide", (req, res) => {
  const { x, y } = req.query;

  res.status(200).json({ ans: x % y });
});
app.get("/substract", (req, res) => {
  const { x, y } = req.query;

  res.status(200).json({ ans: x - y });
});
app.get("/multiply", (req, res) => {
  const { x, y } = req.query;

  res.status(200).json({ ans: x * y });
});

app.listen(3000, () => {
  console.log(`server is running at port ${port}`);
});
