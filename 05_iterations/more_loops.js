// for of 

const number = [1,2,3,4,5,6,7]
for(const nm of number){
 
}

const greetings = ["Bangalore","Delhi","Mumbai","jammu", "kashmir"]

for (const greet of greetings) {
    // console.log(`Greetings are  ${greet}`)
    
}

// map  it is not iterationable
//Please use Capital letter of Object

// const map = new Map()
// map.set ('In', "India")
// map.set ('USA', "United state of America")
// map.set ('Fr', " France")
// // console.log(map);
// for (const key in map) {
    // console.log(key);
    
// }


//for in  
const myObject = {
    game1:'NFS',
    game2:'spiderman',
    game3:'red dead redemption'
}
for (const key in myObject) {
    console.log(`${key} name is  ${myObject[key]}`);
    
    }



    // In for in  function if we pass key value than it not print only key value. But in for of if we passed key 
    //it we return value 


    const programming = ["js", "rb","py","java","cpp" ]
    for (const key in programming) {
        // console.log(programming[key]);
        
    }

// filter

const numbers = [1,2,3,4,5,6,7]
const filteredNumbers = numbers.filter(num => num % 2 === 0)


const coding = ["js","ruby","java","PHP"]
// coding.forEach(function (val) {
//     console.log(val);
    
    
// })

//forEach

// coding.forEach(  (item) => {
//     console.log(item)
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "Python",
        languageFileName: "Py"
    },
    {
        languageName: "cpluse",
        languageFileName: "cpp"
    }





]
    
myCoding.forEach( (item) => {
    console.log(item.languageName);
    
})