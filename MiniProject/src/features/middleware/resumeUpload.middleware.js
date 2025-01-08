import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,'./src/public/uploads');
    },
    filename: function (req, file, cb) {
      cb(null,req.body.jobid+"Resume"+file.originalname);
    }
  })

  export const upload = multer({ storage: storage })