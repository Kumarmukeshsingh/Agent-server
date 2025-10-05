

import e from "express";
import { addFile } from "../controller/csvController.js";
import { upload } from "../middleware/multer.js";
import ValidToken from "../middleware/validateTokenHandler.js";
const router = e.Router();
router.use(ValidToken);
router.route("/file").post(upload.single("file"), addFile);
export default router;