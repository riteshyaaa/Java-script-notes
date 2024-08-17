const myNumbers = [ 1,2,4,5,6,7,8,9]


// onsole.log(myNumbers) // [10, 20, 40, 50, 60, 70, 80, 90]
const newNum= myNumbers
.map( (num) => num+10)
.map( (num) => num+1)
.filter( (num) => num<=40)
// console.log(newNum)

// reduce 
// 0+1+2+3+4+5+6= 21
// const array1= [ 1,2,3,4,5,6]
// const initialValue = 0;
// const sumWithIntitial = array1.reduce( ( accumulator, currentValue) => accumulator + currentValue,
// initialValue);
// console.log(sumWithIntitial);



// const myNums = [1,2,3,]
// const myTotal = myNums.reduce(function ( acc, currval) {
//     console.log(`acc: ${acc} and currval ${currval}`);
    
//     return acc + currval;
// },0)
// console.log(myTotal);


const shoppingCart= [
    {name: 'apple', price: 1},
    {name: 'banana', price: 2},
    {name: 'orange', price: 3},
    {name: 'grape', price: 4}
 
]

const totalPrice=shoppingCart.reduce( (acc, item ) => acc + item.price ,0)

console.log(totalPrice);
