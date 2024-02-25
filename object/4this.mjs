let info={name:"roshan" ,
age:22,
surname:"bagale",
FullName :function(){
    console.log(`my name is ${this.name} ${this.surname}`)
},
}
console.log(info.name)
info.FullName()
//this always points itself
//arrow function does not support this.
