const { app, BrowserWindow } = require('electron');
const { callCmd } = require('./src/script');
const { readInFile } = require('./src/prepFile');

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile('index.html');

    // win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});

// const cData =
//     callCmd('apt list --installed | tee data/apps.txt')
//         .then((data) => {
//             return data.replace('Listing...\n', '').split('\n');
//         });

// function parseDate(cData) {
//     data = cData.then((data) => { return data; });
//     data.then((d) => console.log(d));
//     console.log(typeof(data));
//     data.forEach(function (part, index) {
//         app = part.split('/');
//         data[index] = app[0];
//     });
//     return data;
// }

// data = parseDate(cData);
// data.then(d => { console.log(d); });
// readInFile();

// callCmd('lsd');x
