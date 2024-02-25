let ar1=["r","o","s","h","a","n"]
let ar2=ar1.map((v,i)=>{
    if(i===0){
        return v.toUpperCase()
    }
    else{
        return v;
    }
})
console.log(ar2)
