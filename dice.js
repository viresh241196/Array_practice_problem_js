let diceMap = new Map();
for (i = 1; i <= 6; i++) {
  diceMap.set(i, 0);
}
while (
  diceMap.get(1) < 10 &&
  diceMap.get(2) < 10 &&
  diceMap.get(3) < 10 &&
  diceMap.get(4) < 10 &&
  diceMap.get(5) < 10 &&
  diceMap.get(6) < 10
) {
  let result = (Math.floor(Math.random() * 10) % 6) + 1;
  value = diceMap.get(result) + 1;
  diceMap.set(result, value);
}
console.log(diceMap);
let minValue = Math.min(...diceMap.values());
let maxValue = 10;
for (i = 1; i <= 6; i++) {
  count = diceMap.get(i);
  if (count == minValue) {
    console.log(
      "Dice with face value " + i + " has minimum counts: " + minValue
    );
  } else if (count == maxValue) {
    console.log(
      "Dice with face value " + i + " has maximum counts: " + maxValue
    );
  }
}
