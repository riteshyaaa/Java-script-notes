const marvel_heros= ["ironman","spiderman","thor"];
const dc_heros = ["superman","flash","batman"];

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// concat

// const all_heros= marvel_heros.concat(dc_heros);

// spread 
// const all_heros = [...marvel_heros,...dc_heros]
// console.log(all_heros)


// const another_array = [1,2,4,5,3,[2,9,8],5,[3,5,7,8,[3,1]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


//convert into  array 
// we can also use => of method

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "Hitesh"}))//interesting