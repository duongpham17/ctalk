const {app, BrowserWindow} = require('electron');

require('@electron/remote/main').initialize();

const createWindow = () => {
    const win = new BrowserWindow({
        title: "cTalk Task",
        width: 800,
        height: 800,
        webPreferences: {
            nodeIntegration: false,
            enableRemoteModule: true,
            devTools: false
        }
    });
    win.loadURL("https://ctalk.on.fleek.co");
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if(process.platform !== "darwin") app.quit();
});

app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0) createWindow();
});