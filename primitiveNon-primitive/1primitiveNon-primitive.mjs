//in case of primitive : a new memory space is created if let keyword is used
let a=1;
let b=a;
let c=1;
a=10;
console.log(a)//a=10
console.log(b)//b=1
console.log(c)//c=1
// ===(value) : in primitive the === produce true if the value are same.



//in case of non-primitive:a new memory space is created if a variable is not a copy of another variable.
//in case of non-primitive:if a variable is a copy of another variable,the variable share the memory.
let aa=[1,2]
let bb=aa
let cc=[1,2]
aa.push(10)
console.log(aa)//aa=[1,2,10]

console.log(bb)//bb=[1,2,10]
console.log(cc)//cc=[1,2]
// ===(memory location) : in non-primitive the === produce true if they share memory location .