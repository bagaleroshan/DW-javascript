let money=[1,3,5]
let product=money.reduce((pre,cur)=>{
    return pre*cur
},1)
console.log(product)