import *as usercontroller from './controllers/usercontroller.js '
import express from 'express';
const { pkg } = express;

export const router = express.Router()

router.post('/user',usercontroller.userCreate);
router.get('/user_getone',usercontroller.getOne);
router.get('/user_getall',usercontroller.getAll)
router.put('/user_update',usercontroller.update)