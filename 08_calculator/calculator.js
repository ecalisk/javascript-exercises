const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (array) {
  return array.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function (array) {
  return array.reduce((acc, curr) => acc * curr, 1);
};

const power = function (x, pow) {
  return Math.pow(x, pow);
};

const factorial = function (number) {
  if (number === 0) return 1;
  let factorial = 1;
  let iterator = 1;
  while (iterator <= number) {
    factorial *= iterator;
    iterator++;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
