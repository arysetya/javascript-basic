/** @format */

var hege = ["ary", "setya", "pambudi"];
var ages = [12, 32, 15, 35, 40];
var hog = ["malik", "ramada"];
var kai = ["Robin"];
console.log(hege.concat(hog, kai));
console.log(hege.copyWithin(2, 0));

// var f = hege.entries();
// for (x of f) {
//   console.log(x);
//     document.getElementById("demo").innerHTML += x;
// }

console.log(hege.fill("kmm1", 1, 3));

function checkAdult(age) {
  return age >= 20;
}
console.log(ages.filter(checkAdult));
console.log(ages.find(checkAdult));
