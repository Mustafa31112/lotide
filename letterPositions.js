const assertArraysEqual = function (array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log(`🛑  Assertion failed: ${array1} !== ${array2}`);
    } else {
      console.log(`✅  Assertion passed: ${array1} === ${array2}`);
    }
 
   }
}


const eqArrays = function (a, b) {
  if (a.length !== b.length) {
    return false 
  }
  for (let i = 0; i < a.length; i++) {
   if (a[i] !== b[i]) {
     return false
   }

  }
return true;
}


const letterPositions = function(sentence) {
  const results = {};
  for (letters of sentence) {
    results[letters] = []
  }
  for (let b in results) {

  
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (b === sentence[i]) {
      results[b].push(i)
    }
  } 
}
return results;
};
assertArraysEqual(letterPositions("hello").e, [1]);
// console.log(letterPositions("hello").e, [1]);

