@echo off
setlocal
set "NODE_EXE=%LOCALAPPDATA%\Author Software\nvm\installs\v20.20.2\node.exe"
set "NPM_CLI=%LOCALAPPDATA%\Author Software\nvm\installs\v20.20.2\node_modules\npm\bin\npm-cli.js"
"%NODE_EXE%" "%NPM_CLI%" start --prefix frontend
