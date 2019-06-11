const { app, BrowserWindow } = require('electron');
const { sh } = require('./shell/script');

function createWindow() {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile('index.html');
}

async function main() {
  let { stdout } = await sh('ls');
  for (let line of stdout.split('\n')) {
    console.log(`ls: ${line}`);
  }
}

main();

app.on('ready', createWindow);
