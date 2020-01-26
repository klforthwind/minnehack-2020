const UserModel = require('../models/user-model')

createUser = (req, res) => {
    if (!req.body) {
        return res.status(400).json({ error: "no body"})
    }

    // try and validate a new model
    const user = new UserModel(req.body).on("error", () => res.status(400).json({
        success: false,
        message: "failed to create user"
    }))
    user.save()
    .then(() => {
        res.status(200).json({
            success: true,
            user
        })
    }).catch(() => res.status(500).json({
        success: false,
        message: "failed to save user"
    }))
}
deleteUser = (req, res) => {
    
}
updateUser = (req, res) => {
    
}
getUsers = (req, res) => {
    
}
getUserByID = (req, res) => {
    
}
login = (req, res) => {
    
}
module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getUsers,
    getUserByID,
    login
}