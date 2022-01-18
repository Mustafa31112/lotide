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

const assertArraysEqual = function (array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log(`🛑  Assertion failed: ${array1} !== ${array2}`);
    } else {
      console.log(`✅  Assertion passed: ${array1} === ${array2}`);
    }
 
   }
}

// assertArraysEqual([1, 2, 3], [1, 2, 3]) // => true

module.exports = assertArraysEqual;
