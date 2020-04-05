const multer = require("multer");

const MIME_TYPE_MAP = {
    'attachment/png': 'png',
    'attachment/jpeg': 'jpeg',
    'attachment/jpg': 'jpg',
    'attachment/pdf': 'pdf',
    'attachment/mp3': 'mp3',
    'attachment/mp4': 'mp4',
    'attachment/txt': 'txt'
  }
  
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const isValid = MIME_TYPE_MAP[file.mimetype];
      let error = new Error("Invalid mime type");
      if(isValid){
        error = null;
      }
      cb(error, "backend/attachment");
    },
    filename: (req, file, cb) => {
      const name = file.originalname.toLowerCase().split(' ').join('-');
      const ext = MIME_TYPE_MAP[file.mimetype];
      cb(null, name + '-' + Date.now() + '-' + ext)
    }
  });
  module.exports = multer({storage: storage}).single("image");