const express=require('express');
const { createRide } = require('../controllers/ridecontrollers');
const router=express.Router();


router.post('/create',createRide);


module.exports=router;