let bcrypt = require('bcrypt');
let user = require('../model/userSchema');
let logIn =async (req,res) =>{
try {
    let { username,password } = req.body;
    let userExists = await user.findOne({username:username});
    if(userExists) {
        let compare = await bcrypt.compare(password,userExists.password);
        if(compare) {
            res.json({
                status:'success',
                userInfo:userExists,
                isActive:true
            })
        } else {
            res.json({
                status:'Error',
                message:'username or password is incorrect'
            })
        }
    } else {
        res.json({
            status:'Error',
            message:'Users does not exists'
        })
    }

} catch (error) {
    console.log('Error in login controller',error);
    throw error;
}
};

module.exports = logIn;