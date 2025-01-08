
import multer from 'multer';
// const upload = multer({ dest: 'uploads/' })

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() ;
    cb(null,  uniqueSuffix+'-'+file.fieldname)
  }
})

export const upload = multer({ storage: storage })
