let birthMonthMap = new Map();
for (month = 1; month <= 12; month++) {
  birthMonthMap.set(month, 0);
}
for (birth = 1; birth <= 50; birth++) {
  let birthMonth = (Math.floor(Math.random() * 10) % 12) + 1;
  count = birthMonthMap.get(birthMonth) + 1;
  birthMonthMap.set(birthMonth, count);
}
console.log(birthMonthMap);
