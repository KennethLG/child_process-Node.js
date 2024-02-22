const { spawn } = require('child_process');
const readline = require('readline');

// Create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Spawn the grep process
const grep = spawn('grep', ['ERROR']);

// Handle output from grep
grep.stdout.on('data', (data) => {
  console.log(`Found: ${data}`);
});

grep.stderr.on('data', (data) => {
  console.error(`grep stderr: ${data}`);
});

// Prompt the user for input
console.log('Enter text (type "exit" to quit):');

rl.on('line', (input) => {
  if (input === 'exit') {
    rl.close(); // Close the readline interface
    grep.stdin.end(); // End the grep process
  } else {
    grep.stdin.write(`${input}\n`); // Send input to grep
  }
});

// Handle readline close
rl.on('close', () => {
  console.log('Goodbye!');
  process.exit(0);
});
