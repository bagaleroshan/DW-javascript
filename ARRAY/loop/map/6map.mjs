let ar1=["my","name","is"]
let ar2=ar1.map((value,i)=>{
    return `${value.toUpperCase()}${i}`
})
console.log(ar2)