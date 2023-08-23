import City from "../../models/City.js";

const updateCity = {

    modifyCity: async (req, res, next) => {
        const { id } = req.params;
        let cities;
        let success = true;
        try {
            cities = await City.findOneAndUpdate({ _id: id }, req.body, { new: true });
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

export default updateCity;

