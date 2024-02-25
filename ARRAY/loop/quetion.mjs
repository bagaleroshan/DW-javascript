let str="my"
let f=str.split("").map((v,i)=>{
    if(i===0){
        return v.toUpperCase()
    }else{
        return v.toLowerCase()
    }

})
let s=f.join("")
console.log(s)