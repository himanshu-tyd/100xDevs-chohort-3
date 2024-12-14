//here i change storing data into in memory for i gave user to token that contain data of the user and we need to authenticate user we can use this token to get user data on the server

//here we don't need to fit backend database

import express from "express";
import jwt from "jsonwebtoken";
import { isAuthenticate } from "./auth.js";
import path from 'path'

export const JWT_SECRET = "MYNAMEISHIMANSHU";

const app = express();
const port = 3000;
const __dirname=path.resolve()
export let userArry = [];

app.use(express.json());

//base 

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname ,'index.html'))
})

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

  const token = jwt.sign({ user }, JWT_SECRET);

  if (!token) {
    return res.json({ message: "token not generated" });
  }


  // const token = generateToken();

  // user.token = token;

  res.json({ user, jwt_token: token }).end();
});

//Authenticate user End-Point
app.get("/me", isAuthenticate, (req, res) => {
  const user = req.body.user;

  res.json({ message: "You are login", user }).end();
});

//get all users
app.get("/users", (_, res) => {
  res.send(userArry).end();
});

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});

//Helpers functions
// const generateToken = () => crypto.randomBytes(128).toString("base64");
