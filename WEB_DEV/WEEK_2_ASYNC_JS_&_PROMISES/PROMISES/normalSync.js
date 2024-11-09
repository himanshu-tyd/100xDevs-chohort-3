function promiseFn(resolve) {
  let c = 0;

  for (let i = 0; i < 1000000; i++) {
    c++;
  }

  resolve("hey i'm himanshu");
}

const p = new Promise(promiseFn);

function callback(str) {
  console.log(str);
}

p.then(callback);
