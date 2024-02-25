//["my","name","is"]=>["MY","NAME","IS"]
let ar1=["my","name","is"]
let ar2=ar1.map((value,index)=>
{
    return value.toUpperCase()
})
console.log(ar2)