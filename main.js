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

const cData =
    callCmd('apt list --installed | tee data/apps.txt')
        .then((data) => {
            return data.replace('Listing...\n', '').split('\n');
        });

cData.then((data) => {
    console.log(data);
});
// readInFile();

// callCmd('lsd');x
