let ar1=[1,2,3,4]
let ar2=ar1.map((v,i)=>{
    if(i%2===0){
        return v*2
    }else{
        return v*0
    }
})
console.log(ar2)