//filter

// const numbers = [1,3,2,4,5,6,2]

// const evenNum = numbers.filter( (num) => num>2)

// console.log(evenNum) // [2,4,6,2]
console.log("hello world");


//filter

const numbers = [1,3,2,4,5,6,2]

const evenNum = numbers.filter( (num) => num>2)

// console.log(evenNum) // [2,4,6,2]

const myNums = [1,3,2,4,5,6,2]

// const evenNum = numbers.filter( (num) =>{
//  return num >2})

// console.log(evenNum) // [2,4,6,2]

// const newNums = []
// myNums.forEach( (num) => {
//     if (num>4) {
//         newNums.push(num)
//     }
    
// })
// console.log(newNums);

const books = [
    {title: "Book 1", price: 100},
    {title: "Book 2", price: 200},
    {title: "Book 3", price: 300},
    {title: "Book 4", price: 400},
    {title: "Book 5", price: 400},
    {title: "Book 6", price: 600},
 
]

const userBooks = books.filter( (bk) =>  bk.price===400)

console.log(userBooks);