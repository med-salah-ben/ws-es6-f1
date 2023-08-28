// function sum(x , y , z){
//     return x+y+z
// }
// let inputs = [10,1,9];
// console.log(sum(...inputs))

// let array = [1,10,100,1000,3,999,777]

// console.log(Math.max(...array))

// let array = [1,2,3];

// let copiedArr = [...array];

// copiedArr.push(4);
// console.log("array : " , array)
// console.log("copiedArr : " , copiedArr)

let cities = ["tunis" , "Nabeul"]; 
let places = ["Fahs" , "Sfax" , ...cities] ;
console.log("places :  " , places )