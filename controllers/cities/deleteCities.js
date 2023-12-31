import City from "../../models/City.js";

const deleteCity = {

    clearCity: async (req, res, next) => {
        const { id } = req.params;
        let cities;
        let success = true;
        try {
            cities = await City.findOneAndDelete({ _id: id });
            res.json({
                response: cities,
                success
            })
        }
        catch (err) {
                success: false,
                next(err)        
        }
    }
}

export default deleteCity;
