/* let products = [
    {
      id: 1,
      title: "Product 1",
      category: "electronics",
      price: 5000,
      description: "This is description and Product 1",
      discount: {
        type: "other",
      },
    },
    {
      id: 2,
      title: "Product 2",
      category: "cloths",
      price: 2000,
      description: "This is description and Product 2",
      discount: {
        type: "other",
      },
    },
    {
      id: 3,
      title: "Product 3",
      category: "electronics",
      price: 3000,
      description: "This is description and Product 3",
      discount: {
        type: "other",
      },
    },
  ];

find the array of id ie  output must be [1,2,3]
find the array of title ie output must be ["Product 1", "Product 2", "Product 3"]
find the array of category
find the array of type
find the array of price where each price is multiplied by 3  output must be [ 15000,6000,9000]


 */
let products = [
  {
    id: 1,
    title: "Product 1",
    category: "electronics",
    price: 5000,
    description: "This is description and Product 1",
    discount: {
      type: "others",
    },
  },
  {
    id: 2,
    title: "Product 2",
    category: "cloths",
    price: 2000,
    description: "This is description and Product 2",
    discount: {
      type: "a2",
    },
  },
  {
    id: 3,
    title: "Product 3",
    category: "electronics",
    price: 3000,
    description: "This is description and Product 3",
    discount: {
      type: "a3",
    },
  },
];
let ids = products.map((v, i) => {
  return v.id;
});
//console.log(ids)

let titles = products.map((v, i) => {
  return v.title;
});
//console.log(titles)

let Category = products.map((v, i) => {
  return v.category;
});
//console.log(Category)

let arrOfType = products.map((v, i) => {
  return v.discount.type;
});
//console.log(arrOfType)

let prices = products.map((v, i) => {
  return v.price * 3;
});
//console.log(prices)

//find those array of title whose price is >= 3000 =>
let priceGreaterThan = products.filter((v, i) => {
  if (v.price >= 3000) return true;
});
//console.log(priceGreaterThan);

//find those array of  title whose price is >= 3000=>["product 1",product 3]
let priceGreaterThan1 = products.filter((v, i) => {
  if (v.price >= 3000) return true;
});

let arrayOFTitle = priceGreaterThan1.map((v, i) => {
  return v.title;
});
//console.log(arrayOFTitle)
//another method
/* let priceGreaterThan1 = products.filter((v, i) => {
    if (v.price >= 3000) return true;
  }).map((v,i)=>{
    return v.title
})
console.log(priceGreaterThan1) */

//find those array of title whose price does not equal to 5000 ==> ["product 2","product 3"]
let priceGreaterThan5000 = products
  .filter((v, i) => {
    if (v.price !== 5000) return true;
  })
  .map((v, i) => {
    return v.title;
  });
//console.log(priceGreaterThan5000);
let priceEqualTo3000 = products
  .filter((v, i) => {
    if (v.price === 3000) return true;
  })
  .map((v, i) => {
    return v.category;
  });
//console.log(priceEqualTo3000);

//map is used to modify elements
//where as filter is used to filter elements of input
/* let input =[
    {name:"nitan",age:33},
    {name:"ram",age:32},
    {name:"roshan",age:22},

]
 */



let players=[
  {name:"messi",age:35},
  {name:"ronaldo",age:36},
  {name:"naymar",age:33}

]
let players_=players.filter((v,i)=>{
  if(v.age>=35) return true
})
console.log(players_)