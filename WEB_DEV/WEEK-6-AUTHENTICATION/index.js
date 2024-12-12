import express from "express";
import crypto from "crypto";

const app = express();
const port = 3000;

let userArry = [];

app.use(express.json());

//signup logic
app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (userArry.find((u) => u.username === username)) {
    return res.json({ message: "user exists" }).end();
  }

  userArry.push({ username, password });

  res.json({ message: "user created successfully" }).end();
});

//signin logic
app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  let user = null;

  userArry.find((u, index) => {
    if (u.username == username && u.password == password) {
      user = u;
    }
  });

  if (!user) {
    return res.json({ message: "user not found" });
  }

  const token = generateToken();

  user.token = token;

  res.json({ user, token }).end();
});



//Authenticate user End-Point 
app.get("/me", (req, res) => {
  const headerToken = req.headers["token"];

  let user = null;

  userArry.find((u) => {
    if (u.token !== headerToken) {
      res.json({ message: "You are not Authorized " });
    }else{
      user=u
    }
  });

  res.json({message: 'You are login' , user }).end()



});

app.get("/users", (req, res) => {
  res.send(userArry).end();
});

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});

//Helpers functions
const generateToken = () => crypto.randomBytes(128).toString("base64");
