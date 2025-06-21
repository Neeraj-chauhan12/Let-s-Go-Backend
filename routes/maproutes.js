const express = require('express');
const { getCoordinates } = require('../controllers/mapcontroller');
const { getDistanceTime } = require('../controllers/mapcontroller');

const router=express.Router();

router.get('/get-coordinates', getCoordinates)
router.get('/get-distance-time',getDistanceTime)

module.exports=router;