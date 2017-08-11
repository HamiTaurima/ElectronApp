const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let win

function createWindow () {
  win = new BrowserWindow({width: 800, height: 600})
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

function changeBackground() {
	
	
	var rd = parseInt(document.getElementById('red').value);
	var gn = parseInt(document.getElementById('green').value);
	var bl = parseInt(document.getElementById('blue').value);
	
	
	var rdhex = (rd < 16) ? "0" + rd.toString(16) : rd.toString(16);
	var gnhex = (gn < 16) ? "0" + gn.toString(16) : gn.toString(16);
	var blhex = (bl < 16) ? "0" + bl.toString(16) : bl.toString(16);
	
	
	var hexcode = "#" + rdhex + gnhex + blhex;
	
	
    document.body.style.backgroundColor = hexcode;
    

	
	}