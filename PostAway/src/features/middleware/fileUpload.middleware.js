import multer from "multer";


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads');
    },
    filename: function (req, file, cb) {
        const userId=req.cookies.userId;
        cb(null, Date.now()+"_"+userId+"_"+file.originalname)
    }
  })
  
  export const upload = multer({ storage: storage })