/*
    Every array helper

    Every returns true if each iteration returns true,
    else false.
*/

var computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 }
];

var allComputersCanRunProgram = true;
var someComputersCanRunProgram = false;

/*
for(var i = 0; i < computers.length; i++){
  var computers = computers[i];

  if(computer.ram < 16){
    allComputersCanRunProgram = false;
  } else {
    someComputersCanRunProgram = true;
  }
}
*/

console.log(
  computers.every(function(computer){
    return computer.ram > 16;
  })
);
