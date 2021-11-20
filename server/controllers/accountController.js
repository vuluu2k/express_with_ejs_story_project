const Account = require('../models/Account')


class accountController{
    async accountLogin(req, res){

    }
    async accountRegister(req, res){
        try {
            const {username, password} = req.body;
            console.log('tài khoản: '+username)
            const accountInModel=await Account.findOne({username})
            if(accountInModel)
                return res.status(404).json({success: false,message:'Tài khoản đã tồn tại'})
            const AccountNew=new Account({
                username:username,
                password:password
            })
            await AccountNew.save();
            return res.status(200).json({success:true,message:'Đăng kí thành công',account:AccountNew})
        } catch (error) {
            console.log("Error model : " + error)
            res.status(500).json({success:fail,message:"Lỗi server"})
        }
    }   
}

module.exports = new accountController()