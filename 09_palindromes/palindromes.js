const palindromes = function (stringInput) {
  let myArray = stringInput
    .toLowerCase()
    .split("")
    .filter((char) => char !== " ")
    .filter((char) => char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122);

  return myArray.join("") === myArray.reverse().join("");
};
// Do not edit below this line
module.exports = palindromes;
