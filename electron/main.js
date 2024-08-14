const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const { join } = require("node:path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      webSecurity: true,
      sandbox: true,
      preload: join(__dirname, "preload.js"),
    },
  });

  win.maximize();

  win.loadURL("http://localhost:5173/");
};

app.whenReady().then(() => {
  ipcMain.handle("dialog:openFile", async () => {
    const result = await dialog.showOpenDialog({
      properties: ["openFile", "multiSelections"],
    });

    return result.filePaths;
  });

  createWindow();

  ipcMain.on("close-app", () => {
    app.quit();
  })

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
