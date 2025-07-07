const mapService=require('../services/map.service');

module.exports.getCoordinates=async(req,res)=>{
    const {address}=req.query;

    try {
        const coordinates = await mapService.getAddressCoordinate(address);
        res.status(200).json(coordinates);
        
    } catch (error) {
        res.status(404).json({message: error.message})
        
    }
}

module.exports.getDistanceTime=async(req,res)=>{
    try {

        const {origin,destination}=req.query;
        const distanceTime=await mapService.getDistanceTime(origin,destination)
        res.status(200).json(distanceTime)
        
    } catch (err) {
        console.error(err);
        res.status(500).json({message: 'Internal server error'})
        
    }



}


module.exports.getAutoSuggestions=async(req,res)=>{
    try {
        const {input}=req.query;
        const suggestions=await mapService.getAutoSuggestions(input)
        res.status(200).json(suggestions)
        
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Internal server error'})
        
        
    }
}