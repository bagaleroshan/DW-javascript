let ar1=["my","name","is"]
let ar2=ar1.map((value,index)=>
{
    return value.toUpperCase()+"N"
//return `${value.toUpperCase()}N`
})
console.log(ar2)