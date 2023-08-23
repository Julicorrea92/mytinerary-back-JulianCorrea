import cities from '../citiesJson.js'

const readCity = {
    getAllCities: (req, res, next) => {
        res.json({
            // response: usersJson,
            response: cities,
            success: true,
            error: null
        })
    },
    getOneCity: (req, res, next) => {
        const { city } = req.params
        const oneCity = cities.find(oneCity => oneCity.city == city)
        res.json({
            // response: usersJson,
            response: oneCity,
            success: true,
            error: null
        })
    }
}
export default readCity;