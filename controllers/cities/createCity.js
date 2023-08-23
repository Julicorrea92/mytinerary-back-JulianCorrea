import City from "../../models/City.js";

const newCity = {
    createCity: (req, res, next) => {

        try {
            City.create(req.body)

        } // console.log(req.body);
        catch (error) {
            console.log(error);
        }
    }
}
//         res.json({
//             // // response: usersJson,
//             // response: cities,
//             success: true,
//             error: null
//     })}
// }

export default newCity;
