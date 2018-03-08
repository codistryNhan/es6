/*function isBalance(string){
  let stack = [];

  for(let char of string){
    if(char === '('){
      stack.push('(');
    }

    if(char === ')'){
      if(!string.length){
        console.log(false);
        return
      }

      if( stack.pop() !== '('){
        console.log(false);
        return
      }
    }
  }

  if(stack.length !== 0){
    console.log(false);
    return
  }

  console.log(true);
}

let string = '()()()(';

isBalance(string);
*/

function isBalanced(string){

  let stack = string.split('').reduce(function(stack, char){
    if(char === '('){
      stack.push('(');
    }

    if(char === ')'){
      if(stack.pop() !== '('){
        stack.push('s');
      }
    }

    return stack;
  }, [])

  if(stack.length){
    return false;
  } else {
    return true;
  }
}

let string = '(((((()))))))';
console.log(isBalanced(string));
