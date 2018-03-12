// Promises

const promise = new Promise((resolve, reject) => {
  resolve();
});

promise
  .then(() => console.log('finally finished'))
  .then(() => console.log('I also ran!'))
  .catch(() => console.log('uh oh!!'));
