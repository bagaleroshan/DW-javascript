//output will be true if all of the element return true
let ar1=[9,10,12,18,30]
let isAllGreaterThan18=ar1.every((v,i)=>{
    if(v>1){
        return true
    }
    else{
        return false
    }
})
console.log(isAllGreaterThan18)


// q2
let ar=[2,4,9,6]
let isAllEven=ar.every((v,i)=>{
    if(v%2===0){
        return true
    }else{
        return false
    }
})
console.log(isAllEven)


//q3
let ar3=[40,30,80]
let passMarkIs40=ar.every((v,i)=>{
    if(v>=40){
        return true
    }else{
        return false
    }
})
console.log(passMarkIs40)

