// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const electron = require("electron");
const ipcRenderer = electron.ipcRenderer;

ipcRenderer.on("cpu", (event, data) => {
  console.log("cpu % " + data);
});
ipcRenderer.on("mem", (event, data) => {
  console.log("mem % " + data);
});
ipcRenderer.on("total-mem", (event, data) => {
  console.log("total mem GB " + data);
});

ipcRenderer.on("cpu", (event, data) => {
  document.getElementById("cpu").innerHTML = data.toFixed(2);
});
ipcRenderer.on("mem", (event, data) => {
  document.getElementById("mem").innerHTML = data.toFixed(2);
});
ipcRenderer.on("total-mem", (event, data) => {
  document.getElementById("total-mem").innerHTML = data.toFixed(2);
});
