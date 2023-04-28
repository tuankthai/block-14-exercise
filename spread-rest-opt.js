// Write a function that takes two arrays and returns a new array that contains all the elements of both arrays, using the spread operator.

function concatArrays(arr1, arr2){
    // TODO, write your code here
    return [...arr1, ...arr2];
   
}

console.log(concatArrays([1, 2, 3], [4, 5, 6])); // Output: [1, 2, 3, 4, 5, 6]
console.log(concatArrays(['apple', 'banana'], ['cherry', 'dragonfruit'])); // Output: ['apple', 'banana', 'cherry', 'dragonfruit']


// Write a function that takes an array and returns a new array with the first and last elements removed, using the rest operator.

function removeFirstAndLast(arr) {
   
    return arr.slice(1,-1);
    

}

console.log(removeFirstAndLast([1, 2, 3, 4])); // Output: [2, 3]
console.log(removeFirstAndLast(['apple', 'banana', 'cherry', 'dragonfruit'])); // Output: ['banana', 'cherry']

