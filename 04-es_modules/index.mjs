// import data from './default_exports.mjs'
// import { humidity, isRaining, printHello } from "./inline_exports.mjs";
// import { season , temperature } from "./named_exports.mjs";

// console.log(season);
// console.log(temperature);

// printHello()

// console.log(humidity);
// console.log(isRaining);


// data('https://jsonplaceholder.typicode.com/posts').then((posts)=>console.log(posts)).catch((err)=>console.log(err))


import SERVER, { PASSWORD , USERNAME } from "./mixed_exports.mjs";

console.log( SERVER , PASSWORD , USERNAME);