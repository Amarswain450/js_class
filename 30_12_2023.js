// Array
// array is one type of container where we store any type of data
// const arr1 = ["aaa", "bbb", "cccc"]; // string
// const arr2 = [1, 2, 3, 4, 5]; //integer
// const arr3 = [true, false] //boolean

// var str = "string"

// const arr4 = ["aaaa", 10, true, undefined, null];
// console.log(arr4[0]);
// console.log(arr4[1]);
// console.log(arr4[2]);
// console.log(arr4[3]);
// console.log(arr4);

// for(let i=0; i<arr4.length; i++){
//     console.log(arr4[i]);
// }

// arr4.forEach((val, ind) => {
//     console.log(val, "....", ind);
// })

// for(let val of arr4){
//     console.log(val);
// }

// for(let ind in arr4){
//     console.log(ind);
// }

//Object
// container
// key : value pair
//{} {}

// let obj1 = {
//     name: "babulu",
//     age: 24,
//     place: "hyderabad"
// }

// let obj2 = {
//     name: "sandeep",
//     age: 24,
//     place: "hyderabad"
// }

// console.log(obj1.age);
// console.log(obj2.name); // dot notation
// console.log(obj1["name"]); // bracket notation

// for(let key in obj1){
//     console.log(obj1[key]);
// }

// const arr1 = [
//     {
//         id: 1,
//         name: "aaaa"
//     },
//     {
//         id: 2,
//         name: "bbbb"
//     },
//     {
//         id: 3,
//         name: "cccc"
//     },
//     {
//         id: 4,
//         name: "dddd"
//     },
//     {
//         id: 5,
//         name: "eeee"
//     }
// ];

// arr1.forEach((val) => {
//     console.log(val.id , "......", val.name);
// })

// array desturucting
// store array values in a distinct variable is calles AD
// const arr1 = ["amar", "rajesh", "babulu", "sandeep"];
// // let val = arr1[0];
// // console.log(arr1[0]);
// // console.log(arr1[1]);
// // console.log(arr1[2]);
// // console.log(arr1[4]);
// // const [val1, val2, val3, val4] = arr1;
// const [,val2, val3,] = arr1
// console.log(val2, "....", val3);


//object desturucting
// store object values in a distinct variable is calles OD
// let obj1 = {
//     id: 1,
//     name: "amar",
//     age: 25,
//     designation: "software developer"
// }
// const {id: customId, name: customName, age: customAge, designation: customDesignation} = obj1;
// // console.log(obj1.name);
// // console.log(obj1.id);
// // console.log(obj1.age);
// console.log(customDesignation);

// function
// where we write our business logic
// function is a block of code where we write code for our requirements
// resuable

//normal function / regular function
// function myFun(){
//     console.log("welcome to javascript"); // function declaration
// }

// myFun(); // function calling/ execution

//arrow function
// const myFun = () => {
//     console.log("javascript.....");
// }
// myFun()

// default parameter function
// const myFun = (a, b) => { // parameter
//     console.log(a+b);
// }
// myFun(10, 20) // arguments

// const myFun = (a, b=30) => { // parameter
//     console.log(a+b);
// }
// myFun(10, 20) // arguments

// true, "string", 1 // truthy
// "", undefined, null // falsy

// if(true){}
// if(true){
//     console.log("mmmmmmmm.....");
// }

//if-else
// if(false){
//     console.log("mmmmmmmm.....");
// }else{
//     console.log("nothing......");
// }




