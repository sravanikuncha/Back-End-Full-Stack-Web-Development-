import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  // Write your code here
  destination: function (req, file, cb) {
    cb(null, 'public/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});

export default multer({ storage });
