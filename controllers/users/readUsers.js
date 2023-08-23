import users from '../usersJson.js'

const readUser = {
    getAllUsers: (req, res, next) => {
        res.json({
            // response: usersJson,
            response: users,
            success: true,
            error: null
        })
    },
    getOneUser: (req, res, next) => {
        const { name } = req.params
        const user = users.find(user => user.name == name)
        res.json({
            // response: usersJson,
            response: user,
            success: true,
            error: null
        })
    }
}
export default readUser;