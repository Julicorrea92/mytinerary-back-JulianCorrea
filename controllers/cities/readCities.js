// import cities from '../citiesJson.js'
import City from '../../models/City.js'

const readCity = {
    getAllCities: async (req, res, next) => {
        
        let cities;
        let error = null;
        let success=true;
        
        try {
            cities = await City.find()
        } catch (err) {
            console.log(err);
            success = false;
            error = err;            
        }
        res.json({
            response: cities,
            success: true,
            error: null
        })
    },
    getOneCity: async (req, res, next) => {
        console.log(req.params);
        const { id } = req.params;
        
        let cities;
        let error = null;
        let success=true;
        
        try {
            cities = await City.findById(id)
        } catch (err) {
            console.log(err);
            success = false;
            error = err;            
        }
        res.json({
            response: cities,
            success: true,
            error: null
        })

    }
}
export default readCity;