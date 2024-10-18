const { app, BrowserWindow } = require('electron');
function createWindow() {
  win = new BrowserWindow({width: 800, height: 800});
  win.loadFile('dist/electron-app/index.html');
   // Open the DevTools.
   mainWindow.webContents.openDevTools();
}
app.whenReady().then(() => {
  createWindow()

})
