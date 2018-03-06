/*
  forEach Array Helper

  Iterates through each item, pass a callback to do something to each item.
*/


/*
var colors = [ 'red', 'blue', 'green'];

for(var i = 0; i < colors.length; i++){
  console.log(colors[i]);
}

colors.forEach(function(color){
  console.log(color);
})
*/



var numbers = [1,2,3,4,5];

var sum = 0;

/*
numbers.forEach(function(number){
  sum += number;
});
*/

function adder(num){
  sum += num;
}

console.log(sum);



