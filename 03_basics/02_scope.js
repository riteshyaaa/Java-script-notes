// var keyword not use in scope 
let a = 100;

let b = 30;
if (true){
    let a = 200;
    //  b = 150
    
    
}

// let b = 300;
// console.log(a,b);


function one (){
    const username = "RItesh"
    function two(){
        const website = "youtube"
        // console.log(username,website)
    }
    two()
   // console.log(username);
    
}
one()


// +++++++important++++++++

// hoisting
console.log(addone(5))
function addone(num){
    return num + 1
}


// addTwo(5)
const addTwo = function(num){
    return num + 2
}