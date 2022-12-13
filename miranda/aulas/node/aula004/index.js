const fs = require('fs').promises; // File System - Usado para manipulação de arquivos e diretórios 
const path = require('path');

// fs.readdir('./')
//     .then(files => console.log(files))
//     .catch(e => console.log(e));

// fs.readdir(__dirname)
//     .then(files => console.log(files))
//     .catch(e => console.log(e));

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir); // Percorrer arquivos
}

async function walk(files, rootDir) {
    for(let file of files) {
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath);

        if(/\.git/g.test(fileFullPath)) continue; // Remove todos arquivos .git
        if(/node_modules/g.test(fileFullPath)) continue; // Remove todos os diretórios node_modules
        
        if(stats.isDirectory()) {
            readdir(fileFullPath);
            continue;
        }
        if(!/\.css/g.test(fileFullPath) && !/\.html/g.test(fileFullPath)) continue; // Mostra somendo arquivos .css e .html
        
        console.log(fileFullPath);
    }
}

readdir('/home/pedrovsky/Documentos/estudos/javascript/miranda/aulas/');
