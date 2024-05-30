const { resolve } = require("path");

let isRunning = true;

setTimeout(() => (isRunning = false), 10);

function setImmediatePromise() {
  return new Promise((res, rej) => {
    setImmediate(() => res());
  });
}

async function whileLoop() {
  while (isRunning) {
    console.log("while loop is running");
    await setImmediatePromise();
  }
}

whileLoop().then(() => console.log("while loop ended"));
