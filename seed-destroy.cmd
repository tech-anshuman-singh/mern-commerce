@echo off
setlocal
set "NODE_EXE=%LOCALAPPDATA%\Author Software\nvm\installs\v20.20.2\node.exe"
"%NODE_EXE%" backend\seeder.js -d
