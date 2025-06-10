const express= require('express');
const { signupcontrollers, logincontrollers, logoutcontrollers } = require('../controllers/captaincontrollers');

const router= express.Router();

router.post('/signup',signupcontrollers)
router.post('/login',logincontrollers)
router.post('/logout',logoutcontrollers)

module.exports= router;