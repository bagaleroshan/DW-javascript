//object is used to store multiple data
//object is same as array but it has information of a data
//it has 3 part 
// property =key+value 
let info={
name : "roshan",
age : 22,
weight : 57,
isMarried:false,
}
console.log(info.name)
console.log(info.age)
console.log(info.weight)
console.log(info.isMarried)

info.age=12;
console.log(info)
delete info.weight;
console.log(info)