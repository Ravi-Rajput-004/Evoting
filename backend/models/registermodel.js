const mongoose=require("mongoose");
const registerSchema = new mongoose.Schema(
    {
        pname:String,
        email:String,
        pass:String,
        usertype:String,
           

    },
    {versionKey:false}
);

const registermodel = mongoose.model('register',registerSchema,'register')
module.exports=registermodel