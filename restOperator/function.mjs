// ...rest operator
//rest operator are used at receiver section
const sum=((a,...other)=>{
console.log(a)
console.log(other)
})
sum(1,2,3,4,5)
