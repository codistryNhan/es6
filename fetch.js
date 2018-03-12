// Ajax and Fetch
// To be used on a browser

let url = 'https://jsonplaceholder.typicode.com/posts/';

fetch(url)
  .then( response => response.json())
  .then( data => console.log(data))
  .catch( error => console.log(error));
