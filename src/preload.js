const { PythonShell } = require('python-shell');
const path = require('path');

window.addEventListener('DOMContentLoaded', () => {
  let filePath = null;

  const fileInput = document.getElementById('fileInput');
  fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log(`File type: ${file.type}`);
      filePath = file.path;
      console.log(`File path: ${filePath}`);
    }
  });

  const submitButton = document.getElementById('submitButton');
  const outputDiv = document.getElementById('output');
  submitButton.addEventListener('click', () => {
    console.log("Submit")
    console.log(filePath)
    if (filePath) {
      const pyshell = new PythonShell(path.join(__dirname, 'sales.py'), { args: [filePath] });

      pyshell.on('message', function (message) {
        // received a message sent from the Python script (a simple "print" statement)
        console.log(message);
        outputDiv.textContent = 'Results: ' + message;
      });

      // end the input stream and allow the process to exit
      pyshell.end(function (err, code, signal) {
        if (err) throw err;
        console.log('The exit code was: ' + code);
        console.log('The exit signal was: ' + signal);
        console.log('finished');
      });
    }
  });
});