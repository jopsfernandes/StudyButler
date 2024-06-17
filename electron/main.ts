import { app, BrowserWindow } from 'electron';
import path from 'node:path';


process.env.VITE_DEV_SERVER_URL = 'http://localhost:5173'
process.env.DIST = path.join(__dirname, '../dist');
process.env.PUBLIC = app.isPackaged ? process.env.DIST : path.join(process.env.DIST, '../public');




console.log('DIST:', process.env.DIST);
console.log('PUBLIC:', process.env.PUBLIC);

let win: BrowserWindow | null;
const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL'];
console.log('VITE_DEV_SERVER_URL:', VITE_DEV_SERVER_URL);

function createWindow() {
  win = new BrowserWindow({
    icon: path.join(process.env.PUBLIC, 'electron-vite.svg'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
    width: 900,
    height: 900,
    autoHideMenuBar: true,
    center: true,
    frame: false,
    titleBarStyle: 'hidden',
  });

  win.webContents.openDevTools();

  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', (new Date).toLocaleString());
  });

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(path.join(process.env.DIST, 'index.html'));
  }
}

app.on('window-all-closed', () => {
  win = null;
});
app.whenReady().then(createWindow);
