const prompt = require("prompt-sync")();
let number = prompt("enter the num: ");
let array = new Array();
for (i = 2; i <= number; i++) {
  let flag = 1;
  if (number % i == 0) {
    for (j = 2; j < i; j++) {
      if (i % j == 0) flag = 0;
      break;
    }
    if (flag == 1) {
      array.push(i);
    }
  }
}
console.log(array);
