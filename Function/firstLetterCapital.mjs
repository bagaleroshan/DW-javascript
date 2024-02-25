let firstLetterCapital=(input)=>{
    let inputArr=input.split("")
    
    let inputArrARR=inputArr.map((v,i)=>{
        if(i===0){
            return v.toUpperCase()
        }else{
            return v.toLowerCase()
        }
    
    });
    let output =inputArr.join("")
    return output;
};
let _firstLetterCapital=firstLetterCapital("roshan")
console.log(_firstLetterCapital)
