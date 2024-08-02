//singleton
// object literals


//Object.literals   / singleton


var mysia = Symbol("key1");

const jsUser = {

name: "Ritesh",
age: 18,
location: "jaipur",
[mysia]: "make1",
"fullName": "Riteshyadav",
email: "Ritesh@gmail.com",
isLoggedIn: false,
lastLogInDays:["Monday","Tuesday"]
}
jsUser.greetingtwo = function(){
        console.log('Hello,${this.name}');
}
// console.log(jsUser.email)
// console.log(jsUser["fullName"])
// console.log(jsUser["mysym"])
jsUser.greeting = function(){
    console.log('hello js user,${this.age}');
}
console.log(jsUser.greetingtwo())
