// there are two types of variables 
//1. primitive  2. non-primitive 

// primitive => let, boolean, Bigint, string,number......
// non-primitive=> Array , subject, function
//Stack

// let myName= "ritesh"
// let myNick;
// myNick=myName;// copy is passed 
// myNick= "hitesh"
// console.log(myName)
// console.log(myNick)


// primitive type variables are store in Stack 

//Stack=> main value does not change



let userOne={

    email: "ritesh@gmail.com",
    number: 18
}
let userTwo={

}

userTwo =userOne
userTwo.email="Hitesh@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)

//Heap variables makes change in original value (pass by reference)