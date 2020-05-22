const {app, BrowserWindow} = require('electron')
function createWindow () {
    // 创建浏览器窗口
    win = new BrowserWindow({width: 800, height: 350})
    // 然后加载应用的 index.html
    win.loadFile('html/index.html')
}
app.on('ready', createWindow)