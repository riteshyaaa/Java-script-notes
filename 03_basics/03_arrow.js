// Object ke under function ko declare kakre console.log(this .username)   access kr skte hai 

const user = {
    username : " Ritesh",
    price: 699,
    welcomeMessage: function (){
        // console.log(`Welcome to our shop ${this.username}, your current price is ${this.price}`);
        this.price -= 100;
        // console.log(`Your new price is ${this.price}`);
    // console.log(this);
    
    
    }
}

// user.welcomeMessage();
// user.username= "sam"

// console.log(user.username);
// user.welcomeMessage()
// console.log(this);



// can't access or print

// function chai (){
//     let userName = "Ritesh"
//     // console.log(this.userName );

    
// }
// chai ()
// console.log(this.userName);

// not executed 
const chai=  () =>{
    let userName = "Ritesh"
    // console.log(this.userName );

    
}
chai ()


// Arrow function (Explicit)

// const addTwo= (num1, num2) => {
//     return num1 + num2 
// }
// console.log(addTwo(5,3));


// another way to write Arrow function 


// const addTwo= (num1, num2) => num1 + num2

// console.log(addTwo(5,3));


// No need to write return (implicit)
//  also use in React 
// const addTwo= (num1, num2) => (num1 + num2)
// const addTwo= (num1, num2) => ({userName: "ritesh"})


// console.log(addTwo(5,3));


//+++++++++++++++IIFE+++++++

// immediately invoked function expression 
// named IIFE

/// please try once again 
(function chai( ){
    
        console.log(`DB CONNECTED`);
    })( );

    ( (name) =>{
        console.log(`API CONNECTED${name}`);
    } )("Ritesh")
//+++++++++++++++Higher Order Function+++++++
// function that takes another function as an argument or returns a function as an output
// function that takes another function as an argument
// function that returns another function as an output
