//use  map if
//use map input and output are array
//input and output length are same
//[1,2,3,4]=[2,4,6,8]=ok
//[1,2,3,4]=[2,4,6]=not ok
//[1,2,3,4]="1234"=not ok



let ar1=[1,2,3,4]
let ar2=ar1.map((value,index)=>{
return value*2
})
console.log(ar2)
