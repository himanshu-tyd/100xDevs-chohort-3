const express = require("express");
const cors = require("cors");

const port = 3001;
const app = express();

//if we want to get data as in json format then we need to parse them
// use middleware to do this like express.json() of external lib like bodyParser
//under ther hood express.json() using the bodyParser lib to parse the data

app.use(cors());
app.use(express.json());

app.post("/sum", (req, res) => {
  try {
    const { a, b } = req.body;
    console.log("number", a, b);
    res.json({ ans: a + b });
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
