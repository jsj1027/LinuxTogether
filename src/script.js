/* eslint-disable no-console */
const { exec } = require('child_process');

function callCmd(command) {
    return new Promise((resolve, reject) => {
        console.log(`lxtg is executing command ${command}`);
        return exec(command, ((error, stdout) => {
            if (error !== null) {
                return reject(error);
            }
            return resolve(stdout);
        }));   
    });
}

module.exports = {
    callCmd
};