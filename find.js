/*
    Find Array Helper

    Iterate through each item,
    if the iterate function returns true, the item is returned.
    After finding the first item, the Find helper will break.
*/

var users = [
  {name : 'Jill'},
  {name : 'Alex'},
  {name : 'Bill'},
];

var user;

/*
for(var i = 0; i < users.length; i++){
  if(users[i].name === 'Alex')
    user = 'Alex';
  break;
}
*/

user = users.find(function(user){
  return user.name === 'Alex';
})


console.log(user);
