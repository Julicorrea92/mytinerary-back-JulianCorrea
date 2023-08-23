import City from "../../models/City.js";

const newCity = {
    createCity: async (req, res, next) => {

        try {
            // console.log(req.body);
            const city = await City.create(req.body)
            console.log(city);
            res.json({
                response: cities,
                success: true,
                error: null
            })
        }
        catch (error) {
            console.log(error);
            res.json({
                response: null,
                success: false,
                error: error
            })
        }
    }
}


export default newCity;
