let score ="33" 
console.log(score ) //print value => 33 in string type 

console.log(typeof(score) ) // type of score => string

let valueInNumber = Number(score) //convert datatype string to number (we use capital Number)


console.log(typeof valueInNumber )  // type of valueInNumber after conversion => number


console.log( valueInNumber ) //print valueInNumber=> 33
let output="33abc" //not a string, it is mix of number and string 
console.log( typeof output);
let check = Number(output)// not a number type 
console.log(check);// it is NaN=> not a number


//true => 1; false=> 0
// ""=> false; "ritesh" => true
// 1=> true