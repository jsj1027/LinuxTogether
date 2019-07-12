const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data/apps.txt');

var fileData;

function readInFile() {
    fs.readFile('data/apps.txt', 'utf8', function (err, data) {
        if (err) throw err;
        console.log(`data: ${data}`);
    });

}

// function readApps(pkgman) {
//     if (pkgman === 'apt') {

//     }
// }

module.exports = {
    readInFile
};