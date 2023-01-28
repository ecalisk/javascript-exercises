const removeFromArray = function (array, ...toBeRemoved) {
  for (let i = 0; i < toBeRemoved.length; i++) {
    for (let k = 0; k < array.length; k++) {
      if (array[k] == toBeRemoved[i]) {
        if (typeof array[k] == typeof toBeRemoved[i]) array.splice(k, 1);
      }
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
