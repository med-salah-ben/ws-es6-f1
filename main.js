// js functions 
//1-Function Declaration
function add(a,b){
    return  a+b ;
}
console.log("add : " , add(8 , 9)) ;

//2- function expression 
const minus = function(a,b){
    return b-a ;
}

console.log("minus : " , minus(10 , 7))

//3- arrow function
const square = (x,y)=>{
    return x*y
}

console.log("square : " , square(10 , 7))


