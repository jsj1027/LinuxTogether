/* eslint-disable no-console */
const { exec } = require('child_process');

function callCmd(command) {

    console.log(`lxtg is executing command ${command}`);
    // function puts(error, stdout, stderr) { sys.puts(stdout); }
    exec(`${command}`, ((error, stdout, stderr) => {
        if (error !== null) {
            console.log(`Error: ${error}`);
        }
        if (stderr) {
            console.log(`Err: ${stderr}`);
        }
    }));
}

module.exports = {
    callCmd
};