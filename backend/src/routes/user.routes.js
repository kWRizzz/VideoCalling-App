const express=require('express')
const userController=require('../controllers/user.controller')
const router= express.Router()

/*
**@Route=api/user/register
**
*/


router.post('/register',userController.userRegister)


module.exports=router