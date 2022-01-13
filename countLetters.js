const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function (inputString) {
  const countResults = {};
  
    // Loop through the string
    for (let i = 0; i < inputString.length; i++) {
      if (countResults[inputString[i]]) {
        countResults[inputString[i]] += 1;
      } else {
        if (inputString[i] !== " ") {
          countResults[inputString[i]] = 1;
        }
      }
    }
    return countResults;
  };
  
  console.log(countLetters("L H L"));
  console.log(countLetters("lighthouse in the house"));
  console.log(countLetters("   "));
  
  console.log(assertEqual((countLetters("LHL"))["L"], 2));
  console.log(assertEqual((countLetters("LHL"))["H"], 1));
