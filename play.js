
const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
connect();

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
//  const setupInput = function() {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding('utf8');
//   stdin.resume();
//   handleUserInput();
//   return stdin;
// }

// const handleUserInput = function() {
//   process.stdin.on('data', (key) => {
//     process.stdout.write('.');
//     if (key === '\u0003') {
//       process.exit();
//     }
//   });
// }

setupInput();