const { execFile } = require('child_process');

execFile('python', ['./data/script.py'], (error, stdout, stderr) => {
  if (error) {
    console.error(`execFile error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
