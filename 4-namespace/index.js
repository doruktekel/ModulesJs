//// With namespace and alias
// import * as cal from "./cal.js";

// console.log(cal.sum(2, 5));
// console.log(cal.sub(7, 2));

//// Destructuring

import * as cal from "./cal.js";

const { sum, sub } = cal;

console.log(sum(2, 5));
console.log(sub(7, 2));
