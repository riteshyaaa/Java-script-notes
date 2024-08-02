// function addTwoNumbers(number1,number2){
//  console.log(number1+number2);
// }

// addTwoNumbers(3, null)

function addTwoNumbers(number1,number2){
    let res = number1+number2
    
  return res
   
}
     const result= addTwoNumbers(3, 5)
   
//    console.log("Result:", result);
   
//Advanced function

// function loginUserMessage(username){
//     if(!username){
//         return "Welcome "+ username;
//     }else{
//         return `${username} Please enter your username`
//     }
// }

// console.log(loginUserMessage(""))

// // Rest operator

// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(200,400,200));


//passing an Array

const user ={
    username:"Ritesh",
    age:25,
    email:"ritesh@gmail.com",
    

}
function handleObject(anyobject){
    console.log(`username is  ${anyobject.username} and age is ${anyobject.age}`);
    
}

handleObject(user);

We also pass Array 

const myNewArray = [10,5,12,20]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))
returnSecondValue(myNewArray)