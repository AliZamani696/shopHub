const { mkdirp }=  require('mkdirp')

// This will create the directory if it doesn't exist
// mkdirp is idempotent - safe to call even if directory exists
async function ensureDirectory(dirPath) {
        try{
                await mkdirp(dirPath);
                console.log('Directory is ready:', dirPath);
        }catch(err){
                console.log(err)
        }
}

// Usage
module.exports =ensureDirectory
