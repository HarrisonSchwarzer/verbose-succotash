// from https://www.tutorialspoint.com/nodejs/nodejs_callbacks_concept.htm
// not really helpful

const fs = require('fs');

// non blocking example
fs.readFile('input.txt', function(err, data) {
  if (err) {
    return(console.error(err));
  }
  console.log(data.toString());
});

// // blocking example
// const data = fs.readFileSync('input.txt');
// console.log(data.toString());
// console.log('Program Ended');