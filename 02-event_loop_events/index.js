const fs = require("fs");
const dns = require("dns");

function info(text) {
  console.log(text, performance.now().toFixed(2));
}

console.log("Program start"); // 1

// Timeouts
setTimeout(() => info("timer 1"), 0); // doesn't block the lagging part of the code , code works asynchronously // 5
setTimeout(() => {
  info("timer 2"), 1000;
  process.nextTick(() => info("nexttick")); //7;
}); //6

// Close events
fs.writeFile("./test.txt", "Hello node js ", () => info("file written")); // 9

// Promises
Promise.resolve().then(() => info("Promise resolved 1")); // should work immediately cause the callback already done successfully // 4

process.nextTick(() => info("nextTick 1")); // has a priority over other tasks //3

// Check
setImmediate(() => info("set immediate 1")); // 8

//Intervals
let interval = 1;
const intervalId = setInterval(() => {
  info(`interval ${(interval += 1)} `);
  if (interval === 2) clearInterval(intervalId);
}, 10);

// I / O
dns.lookup("localhost", (err, address, family) => {
  console.log("DNS localhost", address);
  Promise.resolve().then(() => info("Promise 2"));
  process.nextTick(() => info("next tick 3"));
});

info("Program end");
