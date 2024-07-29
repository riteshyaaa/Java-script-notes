

// const name= "ritesh";
// const repocount=50;

//console.log('Hellomy nameis ${name} and my repo countis {repocount}');
//console.log(name +repocount + " value"); modern way
const gameName = new String('ritesh')


console.log(gameName)

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
const newString = gameName.substring(2,4)
console.log(newString);
const anotherString= gameName.slice(-8,4)
console.log(anotherString)
const url = "https://ritesh_como_ritesh_yadav"
console.log(url.replace('%20','_'))
console.log(url.includes('ritesh'))
console.log(url.split('_'))
//there are some function in gameName= new String('ritesh')
//like.__proto__,.length,toUpperCase,.charAt()
// monkeytype.BK_N7JGl.js:675 INFO String {'ritesh'}
// 0: "r"1: "i"2: "t"3: "e"4: "s"5: "h"length: 6[[Prototype]]: String[[PrimitiveValue]]: "ritesh"
//const gameName = new String('ritesh')
