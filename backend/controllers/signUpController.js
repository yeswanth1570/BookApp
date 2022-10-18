const bcrypt = require('bcrypt');
const userModel = require('../model/userSchema');
let saltRounds = 10;

let signUp = async (req,res) =>{
    try {
        let {username,mobilenumber,password} = req.body;
        let userExists = await userModel.findOne({username:username});
        if(userExists) {
            res.send('user already exists');
        } else {
        let genSalt = await bcrypt.genSalt(saltRounds);
        let hashedPassword = await bcrypt.hash(password,genSalt);
        console.log('Hashed password',hashedPassword);
        let addUser = new userModel({
            username,
            mobilenumber,
            password:hashedPassword
        });
        let userAdded = await addUser.save(addUser);
        if(userAdded) {
            res.send(userAdded);
        }
    }

    } catch (error) {
        console.log('Error occured in singup controller',error);
    }
}

module.exports = signUp;