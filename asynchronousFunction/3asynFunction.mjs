//any things that push it takes to the background(node) are called asynchronous function.
//during code executions the background code will executed when all synchronous js code gets execute .
//call stack run the code inside it once the code gets executed the code is popped of.
//event loop is mediator which continuously monitor call stack and memory queue if the call stack is empty it push the function from memory queue to call stack.

//interview question
//settimeout
console.log("1")
setTimeout(()=>{
    console.log("hello")
},0)
console.log("2")