import e from "express";
import ValidToken from "../middleware/validateTokenHandler.js";
import { upload } from "../middleware/multer.js";
import { createMember, deleteMember, getAllMember, getMember, updateMember } from "../controller/memberController.js";
const router = e.Router();

router.use(ValidToken);
router.route('/').get(getAllMember);
router.route('/:id').get(getMember)
router.route('/create').post(createMember)
router.route('/update/:id').put(updateMember)
router.route('/delete/:id').delete(deleteMember)
// router.route('/create').post(upload.single("image"), createContact)



export default router;