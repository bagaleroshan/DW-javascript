let ar1=[1,3,4,5]
let ar2=ar1.map((value,index)=>{
if(value%2===0){
    return value
}else{
    return value*100
}
    
})
console.log(ar2)