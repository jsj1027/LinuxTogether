const { exec } = require('child_process');

function callCmd(command) {
    // function puts(error, stdout, stderr) { sys.puts(stdout); }
    exec(`${command}`, ((error, stdout, stderr) => {
        console.log(`Error: ${error}`);
        console.log(`Out: ${stdout}`);
        console.log(`In: ${stderr}`);
    }));
}

module.exports = {
    callCmd
};