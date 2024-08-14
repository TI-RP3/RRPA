const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("utils", {
  openFile: () => ipcRenderer.invoke("dialog:openFile"),
  closeApp: () => ipcRenderer.send("close-app"),
  /**
   * You never want to directly expose the entire
   * ipcRenderer module via preload. This would give
   * your renderer the ability to send arbitrary IPC
   * messages to the main process, which becomes a
   * powerful attack vector for malicious code.
   */
});
