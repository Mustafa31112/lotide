const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    
    results.push(callback(item))
  }
  return results;
}
const results1 = map(words, word => word[0]);
console.log(results1);

const assertArraysEqual = function (array1, array2) {
  let  isEqual =  false // put this before the loop
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      isEqual = false
      break;
    } else {
      isEqual = true
    }
  } 
  console.log(isEqual)
  if (!isEqual) {
    console.log(`🛑  Assertion failed: ${array1} !== ${array2}`);
  } else {
    console.log(`✅  Assertion passed: ${array1} === ${array2}`);
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

assertArraysEqual(results1 ,[ 'g', 'c', 't', 'm', 't' ]); //pass