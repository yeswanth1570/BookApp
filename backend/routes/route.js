const express =require('express');
const routes = express.Router();
const signUpController = require('../controllers/signUpController');

routes.get('/',(req,res) =>{
    res.send('Home page rendered')
});
routes.post('/signup',signUpController)






module.exports = routes;