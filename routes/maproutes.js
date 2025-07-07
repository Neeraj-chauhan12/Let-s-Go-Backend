const express = require('express');
const { getCoordinates, getAutoSuggestions } = require('../controllers/mapcontroller');
const { getDistanceTime } = require('../controllers/mapcontroller');

const router=express.Router();

router.get('/get-coordinates', getCoordinates)
router.get('/get-distance-time',getDistanceTime)
router.get('/get-suggestions',getAutoSuggestions)

module.exports=router;