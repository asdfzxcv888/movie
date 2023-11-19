import express from 'express'
import { createuser,login,updateuser,deleteuser,trial } from '../controllers/user.js';

const router=express.Router();
router.route('/trial').get(trial)
router.route('/createuser').post(createuser)

router.route('/login').post(login)
router.route('/update').post(updateuser)
router.route('/delete').post(deleteuser)


router.route('/home').get((req,res)=>res.send('home page'))
router.route('/home/movies').get((req,res)=>res.send('your movies'))


export default router