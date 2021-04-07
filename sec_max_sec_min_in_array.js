let array = new Array();
for (i = 1; i <= 10; i++) {
  let number = Math.floor(Math.random() * 900) + 99;
  array.push(number);
}
console.log(array);
let max = 0;
let sec_max = 0;
let min = 999;
let sec_min = 998;
for (i = 0; i < 10; i++) {
  if (array[i] > max) {
    // console.log(array[i]);
    sec_max = max;
    max = array[i];
  } else if (array[i] > sec_max && array[i] != max) {
    sec_max = array[i];
  }
  if (array[i] < min) {
    sec_min = min;
    min = array[i];
  } else if (array[i] < sec_min && array[i] != min) {
    sec_min = array[i];
  }
}
console.log(
  "max:" + max + " sec_max:" + sec_max + " min:" + min + " sec_min:" + sec_min
);
