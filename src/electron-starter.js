const { ipcMain } = require("electron");
const electron = require("electron");
const isDev = require("electron-is-dev");
const path = require("path");
const url = require("url");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let isLoginWindow = false;
let isSystemWindow = true;
let mainWindow;
let win;

const startUrl =
  process.env.ELECTRON_START_URL ||
  url.format({
    pathname: isDev
      ? path.join("http://localhost:3000")
      : path.join(__dirname, "/../build/index.html"),
    protocol: "file:",
    slashes: true,
  });

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1080,
    height: 768,
    frame: true,
    webPreferences: {
      preload: isDev
        ? path.join(app.getAppPath(), "./public/preload.js") // Loading it from the public folder for dev
        : path.join(app.getAppPath(), "./build/preload.js"), // Loading it from the build folder for production
      worldSafeExecuteJavaScript: true, // If you're using Electron 12+, this should be enabled by default and does not need to be added here.
      contextIsolation: true, // Isolating context so our app is not exposed to random javascript executions making it safer.
    },
  });

  mainWindow.loadURL(startUrl);

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on("closed", function () {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  if (mainWindow === null) {
    createWindow();
  }
});

function loginWindow() {
  win = new BrowserWindow({
    width: 749,
    height: 498,
    resizable:false,
    frame: false,
    webPreferences: {
      preload: isDev
        ? path.join(app.getAppPath(), "./public/preload.js")
        : path.join(app.getAppPath(), "./build/preload.js"),
      contextIsolation: true,
    },
  });

  win.on("close", function () {
    win = null;
  });

  win.loadURL(startUrl);
  mainWindow.webContents.openDevTools();
  win.show();
}

ipcMain.handle("get-login-window", () => {
  if (!isLoginWindow) {
    loginWindow();
    mainWindow.hide();
    isSystemWindow = false;
    isLoginWindow = true;
  }

  return true;
});

ipcMain.handle("open-system", (event, args) => {
  if (!isSystemWindow) {
    createWindow();
    win.hide();
    isLoginWindow = false;
    isSystemWindow = true;
  }

  return args;
});
