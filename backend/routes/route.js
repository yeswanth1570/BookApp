const express =require('express');
const routes = express.Router();
const signUpController = require('../controllers/signUpController');
const loginController = require('../controllers/logInController');

routes.get('/',(req,res) =>{
    res.send('Home page rendered')
});
routes.post('/signup',signUpController);
routes.post('/login',loginController);







module.exports = routes;