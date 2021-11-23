const Account = require('../models/Account')


class accountController{
    async accountLogin(req, res){
        try {
            const {username, password} = req.body;
            const accountInModel=await Account.findOne({username})
            console.log(accountInModel)
            if(!accountInModel)
                res.redirect('back')
            else if(accountInModel.password!==password)
                res.redirect('back')
            else{
                res.render('admin',{account:accountInModel})
            }
        } catch (error) {
            
        }
    }
    async accountRegister(req, res){
        try {
            const {username, password} = req.body;
            console.log('tài khoản: '+username)
            const accountInModel=await Account.findOne({username})
            if(accountInModel)
                res.redirect('back')
            const AccountNew=new Account({
                username:username,
                password:password
            })
            const success=await AccountNew.save();
            if(success)
                res.redirect('/account/login')
        } catch (error) {
            console.log("Error model : " + error)
            res.status(500).json({success:fail,message:"Lỗi server"})
        }
    }   
}

module.exports = new accountController()