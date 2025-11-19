const { mkdirp }=  require('mkdirp')
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const { dir } = require('console');
// This will create the directory if it doesn't exist
// mkdirp is idempotent - safe to call even if directory exists




async function ensureDirectory(dirPath) {
        try{
                const uploadsDir = dirPath;
                if(!fs.existsSync(dirPath)){
                        const createDir =  await mkdirp(dirPath);
                        console.log("dir is created!",createDir)
                }
        }catch(err){
                console.log(err)
        }
}

// Usage
module.exports =ensureDirectory
