let array = new Array();
for (i = 1; i <= 10; i++) {
  let number = Math.floor(Math.random() * 900) + 99;
  array.push(number);
}
console.log(array);
array.sort();
console.log("second minimum:"+array[1]+" second maximum: "+array[8])
