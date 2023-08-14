const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/uploads'));
  },
  filename: function (req, file, cb) {

    const uniqueSuffix = `${file.fieldname}-${Date.now()}.webp`;
    if (file.originalname.split('.')[-1] !== 'webp') {
      file.filename = uniqueSuffix;
    }
    cb(null, file.filename);
  }
});

const upload = multer({ storage: storage })

module.exports = upload;