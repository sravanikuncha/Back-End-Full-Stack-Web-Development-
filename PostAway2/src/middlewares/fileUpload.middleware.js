import multer from "multer";


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads');
    },
    filename: function (req, file, cb) {
        const useremail=req.body.email || req.userId;
        cb(null, Date.now()+"_"+useremail+"_"+file.originalname)
    }
  })
  
  export const upload = multer({ storage: storage })