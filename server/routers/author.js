const express= require('express')
const router= express.Router();

const accountController = require('../controllers/accountController')

//Hiện thị đăng kí 
router.get('/register',(req,res)=>{
    res.render('pages/register')
})

//Hiện thị đăng nhập 
router.get('/login',(req,res)=>{
    res.render('pages/login')
})
// Đăng kí
router.post('/register',accountController.accountRegister)
// Đăng nhập
router.post('/login',accountController.accountLogin)


module.exports = router;