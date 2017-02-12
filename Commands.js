const execFile = require('child_process').execFile;

const child = execFile('node', ['--version'], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});


const child1 = execFile('configure_edison', ['--showWiFiIP'], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});


const child2 = execFile('configure_edison', ['--showNames'], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});



const child3 = execFile('configure_edison', ['--showWiFiMode'], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});


const child4 = execFile('configure_edison', ['--version'], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});