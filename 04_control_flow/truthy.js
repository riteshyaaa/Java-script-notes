const userEmail = []

// if (userEmail){
   
//     console.log("Got user email");

// }
// else {
//     console.log('No user email found');
 
// }


// Falsy value => false, 0,-0,BigInt,on,"",null,undefined,NAN
// Truthy value => true,1,2,3,4,5,6,7, "0", "false", " ", [], {}, function(){}


if (userEmail.length===0){
    console.log("Array is empty");
    
}

const emptyobj = {}

if (Object.keys(emptyobj).length===0){
    console.log("Object is empty");
    
}

// Nullish Coalescing Operator (??) : null undefined 


let val1;
// val1= 5??10
val1 = null?? 10
console.log(val1);


// Ternary Operator 

// Condition ? true : false

let val2 = 10;
let result = val2 > 5 ? "Greater than 5" : "Less than or equal to 5";
console.log(result);
