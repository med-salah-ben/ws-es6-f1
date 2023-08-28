let people = [
    {name : "slouma" , age :23 },
    {name : "slh" , age : 28},
    {name : "chouaib" , age:30},
    {name:"foulen" , age : 50}
]

//function expression 
let ageclg = people.filter(function(person){
    return person.age > 20 && person.age <30
}).filter(function(person){
    return person.name === "slouma"
}).map(function(person){
    return `${person.name} is ${person.age}`}
)

console.log(ageclg)

let showAge = people
.filter(person=>person.age>20 && person.age<30)
.filter(person=>person.name === "slouma")
.map(person=>`${person.name} is ${person.age}`)

console.log("show age : " , showAge)