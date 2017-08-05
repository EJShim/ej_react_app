import express from 'express';
import account from './account';
import memo from './memo';
import video from './video';

const router = express.Router();


router.use('/account', account);
router.use('/memo', memo);
router.use('/video', video);

export default router;
