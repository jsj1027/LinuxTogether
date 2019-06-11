const { exec } = require('child_process');

function sh(cmd) {
  return function () {
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        Promise.reject(err);
      }
      return { stdout, stderr };
    });
  };
}
//https://stackoverflow.com/questions/1880198/how-to-execute-shell-command-in-javascript
// but put main in main.js

module.exports = {
  sh
};