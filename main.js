const { app, BrowserWindow } = require('electron');
function createWindow () {
  const win = new BrowserWindow({ width: 1000, height: 700, backgroundColor: '#0f172a' });
  win.loadFile('index.html');
}
app.whenReady().then(createWindow);