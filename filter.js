/*
*  Array filter helper
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
