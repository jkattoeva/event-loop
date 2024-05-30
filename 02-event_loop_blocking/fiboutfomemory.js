// recursive function example
setTimeout(() => console.log("timeout"), 0);

function fib(n) {
  return new Promise((resolve, reject) => {
    if (n === 0 || n === 1) {
      return resolve(n);
    }
    setImmediate(() =>
      Promise.all([fib(n - 1), fib(n - 2)]).then(([fib1, fib2]) =>
        resolve(fib1 + fib2)
      )
    );
  });
}
fib(10).then((res) => console.log(typeof res));

// function fib(n) {
//   const fibSequence = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
//   }
//   return fibSequence[n];
// }
