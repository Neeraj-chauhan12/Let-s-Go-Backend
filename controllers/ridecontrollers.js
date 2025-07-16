const rideService = require('../services/ride.service');
const mapService = require('../services/map.service');
const rideModel = require('../models/ridemodel');


module.exports.createRide = async (req, res) => {

    const { pickup, destination, vichle } = req.body;

    try {
        const ride = await rideService.createRide({ pickup,destination,vichle})
        res.status(201).json(ride);        

    } catch (err) {

        console.log(err);
        return res.status(500).json({ message: err.message });
    }

};