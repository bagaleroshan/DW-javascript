let ar1 = ["r", "o", "s", "H", "A", "n"];
let ar2 = ar1.map((value, index) => {
  if (index === 0) {
    return value.toUpperCase();
  } else {
    return value.toLowerCase();
  }
});
console.log(ar2)