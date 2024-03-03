//// Default import
// import { default as sum } from "./cal.js";

import { sum as toplama, sub } from "./cal.js";
// console.log(sum(2, 5));  //// Referance Error !
console.log(toplama(2, 5));
console.log(sub(7, 2));
