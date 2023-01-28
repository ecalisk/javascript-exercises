const sumAll = function (num1, num2) {
  // larger number first
  if (num1 > num2) {
    let buffer = num1;
    num1 = num2;
    num2 = buffer;
  }

  // error for negative numbers
  if (num1 < 0 || num2 < 0) return "ERROR";

  // error for non-number input
  if (typeof num1 != "number" || typeof num2 != "number") return "ERROR";

  let i = num1;
  let outcome = 0;
  while (i <= num2) {
    outcome += i;
    i++;
  }
  return outcome;
};

// Do not edit below this line
module.exports = sumAll;
