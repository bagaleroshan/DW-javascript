//v=value
//i=index
//a=array
let ar1 = [2, 3, 4, 6, 5, 7, 9];
let ar2 = ar1.filter((v, i) => {
  if (v % 2 === 1) {
    return true;
  } else {
    return false;
  }
});
console.log(ar2);
