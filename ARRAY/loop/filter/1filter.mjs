//[1,2,3,4]=[1,2]=possible
//[1,2,3,4]=[1,4]=possible
//[1,4]=[1,4,4]=not possible
//[1,2,3,4]=[1,5]=not possible
//by default return will be false


let ar1=[1,2,3,4]
let ar2=ar1.filter((value,index)=>{
    if(value%2===0){
        return true
    }else{
        return false
    }
})
console.log(ar2)