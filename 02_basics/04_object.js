// const tinderUser = new Object() // this is a singleton object
const tinderUser = {} // this is a non-singleton
tinderUser.id = "123abc"
tinderUser.name = "John Doe"
tinderUser.isLoggedIn = false
// console.log(tinderUser)
const regularUser = {
    email: "some@gamil.com",
    fullname: {
        userfullname:{
            firstname: "John",
            lastname: "Doe"
        }
    }
}
// console.log(regularUser.fullname?.userfullname);
const obj1 = {1: "a",2: "b"}
const obj2 = {3: "a",4: "b"}
// const obj3 = Object.assign({},obj1,obj2)
const obj4 = {...obj1, ...obj2}
// console.log(obj4)




// destructuring

const course = {
    courseName: "js in hindi",
    price: "999",
    enrolledStudents: "Ritesh",
}
const {enrolledStudents: student} = course

// destructuring
// console.log(enrolledStudents);
console.log(student);



//JSon

//  [
    //     {name: "Ritesh", age: 18},
    //     {name: "John", age: 25},
    //     {name: "Jane", age: 22}
    // ]