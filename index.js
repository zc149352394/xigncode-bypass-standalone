"use strict"

const fs = require("fs");
const path = require("path");
const ProcessListener = require("./process-listener");
const scan_interval = require('./config.json');

let PatchedProcesses = {};

function HandleAddedProcess(process) {
    try {
        let XigncodeFolder = path.join(path.dirname(process.path), "XIGNCODE");
        
        if (!fs.existsSync(path.join(XigncodeFolder, "x3.xem.bak"))) {
            fs.renameSync(path.join(XigncodeFolder, "x3.xem"), path.join(XigncodeFolder, "x3.xem.bak"));
            fs.copyFileSync(path.join(__dirname, "res/x3.xem"), path.join(XigncodeFolder, "x3.xem"));
        }
        if (!fs.existsSync(path.join(XigncodeFolder, "xcorona.xem.bak"))) {
            fs.renameSync(path.join(XigncodeFolder, "xcorona.xem"), path.join(XigncodeFolder, "xcorona.xem.bak"));
            fs.copyFileSync(path.join(__dirname, "res/xcorona.xem"), path.join(XigncodeFolder, "xcorona.xem"));
        }
        PatchedProcesses[process.pid] = XigncodeFolder;
        console.log(`[bypass] Game client (PID ${process.pid}) detected, bypass installed.`);
    } catch(e) {
        // Ignore errors...
    }
}

function HandleRemovedProcess(pid) {
    try {
        let XigncodeFolder = PatchedProcesses[pid];
        
        if (fs.existsSync(path.join(XigncodeFolder, "x3.xem.bak"))) {
            fs.renameSync(path.join(XigncodeFolder, "x3.xem.bak"), path.join(XigncodeFolder, "x3.xem"));
        }
        if (fs.existsSync(path.join(XigncodeFolder, "xcorona.xem.bak"))) {
            fs.renameSync(path.join(XigncodeFolder, "xcorona.xem.bak"), path.join(XigncodeFolder, "xcorona.xem"));
        }
        delete PatchedProcesses[pid];
        console.log(`[bypass] Game client (PID ${pid}) closed, bypass reverted.`);
    } catch(e) {
        // Ignore errors...
    }
}

ProcessListener("TERA.exe", HandleAddedProcess, HandleRemovedProcess, scan_interval);
console.log("[bypass] Ready, waiting for game client to be started!");

try {
    fs.unlinkSync("C:\\Windows\\xhunter1.sys");
    console.log("[bypass] Traces of a previous xigncode installation have been located and removed from your system!");
    console.log("[bypass] Note that some registry keys might still remain on your system.");
    console.log("[bypass] Check out #proxy-changelog in https://discord.gg/maqBmJV for instructions on manual removal.");
} catch(e) {
    // Ignore errors...
}
