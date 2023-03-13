const fibonacci = function (number) {
  if (number < 0) return "OOPS";
  if (typeof number === "string") number = Number(number);
  let sequence = [1, 1];
  for (i = 2; i <= number - 1; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence[sequence.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
