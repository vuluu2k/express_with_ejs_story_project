const mongoose = require('mongoose') ;
const {Schema} = mongoose;

const AccountSchema=new Schema({
        username:{
            type: String,
            unique: true
        },
        password:String,
    },
    {
        timestamps:true
    }
)
module.exports = mongoose.model('Account',AccountSchema);