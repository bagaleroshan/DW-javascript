//keys["name","age","isMarried"]
//valus=["roshan",24,false]
//[["name","roshan"],["age",29],["isMarried",false]] properties , entries

let info ={
    name:"roshan",
    age:24,
    isMarried:false


}
let keysArray=Object.keys(info)
console.log(keysArray)


let valuesArray=Object.values(info)
console.log(valuesArray)


let propertiesArray=Object.entries(info)
console.log(propertiesArray)