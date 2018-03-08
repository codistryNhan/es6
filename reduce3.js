// Given an array [1,1,2,2,3,3,3,4]
// return an array with unique values

let array = [1,1,2,2,3,3,3,3,4];

let unique = array.reduce(function(acc, num){
  let find = acc.find(function(accNum){
    return num === accNum;
  })

  if(!find){
    acc.push(num);
  }

  return acc;
},[])

console.log(unique);
