import multer from "multer"

const storage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, "public")
   },
   filename: function (req, file, cb) {
      // const uniqueSuffix = Date.now() + '_' + Math.round(Math.random() * 1E9);
      // cb(null, file.originalname + "-" + uniqueSuffix);
      const unifuffix = Date.now();
      cb(null, unifuffix + file.originalname);
   }
})

export const upload = multer({ storage: storage });



