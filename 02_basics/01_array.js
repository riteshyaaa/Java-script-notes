const myArray = new Array(1,2,9,5,7,8)
// console.log(myArray)


//Array methods

// myArray.push(9)
// myArray.push(2)
// myArray.pop(1)
// myArray.unshift(4)
// console.log(myArray.shift());
// console.log(myArray.includes(9));
// console.log(myArray.indexOf(2));

// slice, splice

// console.log("A",myArray)
// const myn1 = myArray.slice(1, 3)
// console.log(myn1);
// console.log("B",myArray)

//splice method modifies the original array, it returns the removed elements in an array
// const myn2 = myArray.splice(1, 3)



// console.log("c",myArray)
// console.log(myn2);
//sort method sorts the array in ascending order

myArray.sort((a,b) => a - b);
console.log("D",myArray)
