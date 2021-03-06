/*
    Array Map Helper

    Iterates through each item of the array,
    each iterate function return will create a new item in an array.
*/

/*
var numbers = [1,2,3];
var doubledNumbers = [];
*/

/*
for(var i = 0; i < numbers.length; i++){
  doubledNumbers.push(numbers[i] * 2);
}
*/

/*
var doubled = numbers.map(function(number){
  return number * 2;
});

console.log(doubled);
*/

var cars = [
  {model: 'Buick', price: 'Cheap'},
  {model: 'Camaro', price: 'expensive'}
];

var prices = cars.map(function(car){
  return car.price;
})

console.log(prices);
