const { resolve } = require('path')
const path = require('path')
const url = require('url')
const { app, BrowserWindow } = require('electron')

const isDev = require('electron-is-dev')

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    minWidth: 640,
    minHeight: 480,
    height: 620,
    width: 800,
    resizable: true,
    movable: true,
    center: true,
    //macOnly
    titleBarStyle: 'hidden-inset',
    title: 'Clapton',
    backgroundColor: '#FFFBD5',
    // we want to go frameless on windows and linux
    frame: process.platform === 'darwin',
    transparent: true,
    hasShadow: true,
    debug: false,
    darkTheme: true,
    vibrancy: 'ultra-dark',
    acceptFirstMouse: true,
    show: false,
    icon: resolve(__dirname + '/assets/images/icon.icns')
  })

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'clapton.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools
  if (isDev) {
    mainWindow.webContents.openDevTools()
  }

  mainWindow.on('closed', function() {
