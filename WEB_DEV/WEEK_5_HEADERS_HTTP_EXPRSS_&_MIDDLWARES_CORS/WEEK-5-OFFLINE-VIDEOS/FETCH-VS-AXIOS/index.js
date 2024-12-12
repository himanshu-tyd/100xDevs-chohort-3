const axios = require("axios");

//axios vs fetch

//tradition way .then syntax
function promisifiedVersion() {
  fetch("https://jsonplaceholder.typicode.com/todos/1").then(function (res) {
    res.json().then(function (json) {
      console.log(json);
    });
  });
}

// promisifiedVersion()

//syntactic sugar different way to write code

async function systanticSugar() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  const json = await res.json();

  console.log(json);
}

// systanticSugar()

//using axios it is external package that let you call API's

async function usingAxios() {
  const res = await axios.put(
    "https://jsonplaceholder.typicode.com/todos/1",
    {
      title: "1 hour coding",
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  console.log(res.data);
}

usingAxios();
