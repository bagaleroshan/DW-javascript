//["ram","hari","nitan","roshan"]=["nitan","roshan"]

let ar1 = ["ram", "hari", "nitan", "roshan"];
let ar2 = ar1.filter((v, i) => {
  if (v.length >  4) {
    return true;
  } 
});
console.log(ar2);
