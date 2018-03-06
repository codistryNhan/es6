/*
    Array filter helper

    Iterate through each item,
    if the iterate function returns true, the item will be return as an item of an array,
    if the iterate function returns false, the item will be ignored.
*/

var products = [
  { name: 'cucumber', type: 'vegetable'},
  { name: 'banana', type: 'fruit'},
  { name: 'celery', type: 'vegetable'},
  { name: 'orange', type: 'fruit'}
];

/*
var filtered = [];

for(var i = 0; i < products.length; i++){
  if(products[i].type === 'fruit'){
    filtered.push(products[i]);
  }
}

console.log(filtered);
*/

var arr =  products.filter(function(product){
  return product.type === 'fruit';
});

console.log(arr);
