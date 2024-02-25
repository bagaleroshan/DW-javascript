/* 
syntax
execution
uses
*/
let money=[1,3,5]
let totalMoney=money.reduce((pre,cur)=>{
return pre+cur
},0)
console.log(totalMoney)