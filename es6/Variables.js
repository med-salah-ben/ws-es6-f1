// Var
function testVar(){
    var a = 10;
    console.log("first : a =" ,a)
    if(true){
        var a = 13 ; 
        console.log("second : a =" ,a)
    }
    console.log("third : a =" ,a)
}

// testVar();

//LET
function testLet(){
    let b = 1;
    console.log("first : b =" ,b) //= 1
    if(true){
        let b = 17 ; 
        console.log("second : b =" ,b) // = err / 17
    }
    console.log("third : b =" ,b) // und / 1
}

// testLet();

//CONST
function testConst(){
    const y = 1;
    console.log("first : y =" ,y) //= 1
    if(true){
        const y = 17 ; 
        console.log(" in block : y =" ,y) // = err / 17
        // const y = 20 ;
        // console.log("in second block: y" ,y);
    }
    console.log("third : y =" ,y) // und / 1
}

// testConst()

// const x = 10 ; 
// x = 30 ;
// console.log('x' ,x )

// OBJ
// const obj = {};
// console.log("first : " , obj)
// obj.name = "abd slam ya halawa"
// console.log("second : " , obj)
// obj.name = "chouaib"
// console.log("third : " , obj)

// ARRAY
// const arr = [];
// arr[0] =5 ;
// console.log(arr)
// arr.push(7)
// console.log("second : " , arr)
// arr.unshift(9)
// console.log("third : " , arr)
// arr.pop();
// console.log(arr)