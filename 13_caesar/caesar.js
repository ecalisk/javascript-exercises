const caesar = function (originalMessage, shiftNumber) {
  const messageArray = originalMessage.split("");
  let encryptedArray = [];
  for (let i = 0; i < messageArray.length; i++) {
    code = messageArray[i].charCodeAt(0);
    let codeAdjusted = code;
    let shiftedCode = code + shiftNumber;
    if (97 <= code && code <= 122) {
      if (shiftedCode > 122) codeAdjusted = code - 26;
      else if (shiftedCode < 97) codeAdjusted = code + 26;
    } else if (65 <= code && code <= 90) {
      if (shiftedCode > 90) codeAdjusted = code - 26;
      else if (shiftedCode < 65) codeAdjusted = code + 26;
    }

    suitableForShift =
      (65 <= code && code <= 90) || (97 <= code && code <= 122);

    if (suitableForShift) {
      encryptedArray[i] = String.fromCharCode(codeAdjusted + shiftNumber);
    } else {
      encryptedArray[i] = String.fromCharCode(codeAdjusted);
    }
  }
  return encryptedArray.join("");
};

// Do not edit below this line
module.exports = caesar;
