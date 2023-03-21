const findTheOldest = function (people) {
  const peopleSorted = people.sort(function (personA, personB) {
    const currentYear = new Date().getFullYear();
    const ageA =
      typeof personA.yearOfDeath === "undefined"
        ? currentYear - personA.yearOfBirth
        : personA.yearOfDeath - personA.yearOfBirth;

    const ageB =
      typeof personB.yearOfDeath === "undefined"
        ? currentYear - personB.yearOfBirth
        : personB.yearOfDeath - personB.yearOfBirth;

    return ageB - ageA;
  });
  return peopleSorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
