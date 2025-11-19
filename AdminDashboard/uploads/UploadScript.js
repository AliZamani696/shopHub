const { mkdirp }=  require('mkdirp')
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const { dir } = require('console');
// This will create the directory if it doesn't exist
// mkdirp is idempotent - safe to call even if directory exists



const DirRoute = "./Home/public/images"
const storage =  multer.diskStorage({
          destination :function(req,file,cb){
                mkdirp(DirRoute)
                        .then(made=>
                                cb(null,DirRoute)
                        )
        },
        filename:function(req,file,cb){
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
                cb(null, 'product-' + uniqueSuffix + path.extname(file.originalname));

        }
})
const FileFilter = (req,res,cb)=>{
        const allowedTypes = /jpeg|jpg|png|gif|webp/;
        const extname = allowedTypes.test(path.extname(file.originalname).toLocaleLowerCase());
        const mimetype = allowedTypes.test(file.mimetype);
        if (mimetype && extname) {
                return cb(null, true);
        } else {
                cb(new Error('Only image files (JPEG, PNG, GIF, WebP) are allowed!'));
        }
}
const upload = multer({
  storage: storage,
  FileFilter: FileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB
  }
});

module.exports = upload


//
