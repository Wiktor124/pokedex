const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {

    console.log('destino');
    cb(null, path.join(__dirname, '../public/images')); // Carpeta de destino para las imágenes cargadas
  },
  filename: function (req, file, cb) {
    console.log('subir');
    const extname = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${Date.now()}${extname}`);
  },
});

// const upload = multer({ storage: storage });
const upload = multer({
  storage: storage,
  onError: function (err, next) {
    console.error(err);
    next(err);
  }
});


module.exports = upload;