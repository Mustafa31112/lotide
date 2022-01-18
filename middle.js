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

const middle = function(array) {
  if (array.length === 1 || array.length === 2 ) {
    return [];
  } 
  if (array.length % 2 === 0 && array.length > 3) {
return [array[Math.ceil(array.length / 2) - 1], array[Math.ceil(array.length / 2)]];
} else {
    let middleIndex = (array.length - 1) / 2;  
    return [array[middleIndex]]
    
  }
}





module.exports = middle;