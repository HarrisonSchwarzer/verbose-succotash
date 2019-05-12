// from https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced

console.log('CREATE A CALLBACK');
// callback defined elsewhere

function doHomework(subject, callback) {
  console.log(`starting my ${subject} homework`);
  callback();
}

function finishHomework() {
  console.log('homework finished');
}

doHomework('math', finishHomework);


// console.log('CREATE A CALLBACK');
// // function with a callback

// function doHomework(subject, callback) {
//   console.log(`starting my ${subject} homework`);
//   callback();
// }

// doHomework('math', function() {
//   console.log('finished my homework');
// });

// console.log('SIMULATING A DELAY');
// // simulate two functions, where the first function is delayed

// function first() {
//   // delayed code
//   setTimeout(() => {
//     console.log(1);
//   }, 500);
// }

// function second() {
//   console.log(2);
// }

// first();
// second();

// console.log('BASIC EXAMPLE:');
// // simulate two functions executed one after another

// function first() {
//   console.log(1);
// }

// function second() {
//   console.log(2);
// }

// first();
// second();