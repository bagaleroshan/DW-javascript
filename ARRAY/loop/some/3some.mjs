let str = "smoking drinking gajadi";
let hasSmoking = str.split(" ").some((v, i) => {
  if (v === "smoking") {
    return true;
  }
  else{
    return false
  }
});
console.log(hasSmoking );





