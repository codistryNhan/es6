var primaryColors = [
  { color: 'red'},
  { color: 'yellow' },
  { color: 'blue' },
];

var colors = primaryColors.reduce(function(previous, color){
  previous.push(color.color);

  return previous;
}, []);

console.log(colors);
