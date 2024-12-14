"use strict";

var express = require('express');

var app = express();
var port = 3000;
var userArry = [];
app.post('/signup', function (req, res) {
  var _req$body = req.body,
      username = _req$body.username,
      password = _req$body.password;

  if (userArry.find(function (u) {
    return u.username === username;
  })) {
    return res.json({
      message: "user exists"
    });
  }

  userArry.push({
    username: username,
    password: password
  });
});
app.post('/signin', function () {});
app.get('/users', function (req, res) {
  res.send();
});
app.listen(port, function () {
  console.log("server is running at port ".concat(port));
});