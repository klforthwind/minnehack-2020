const UserModel = require('../models/user-model').UserModel

createUser = (req, res) => {
    if (!req.body) {
        return res.status(400).json({
            success: false,
            message: "no body"
        })
    }

    // try and validate a new model
    const user = new UserModel(req.body)
    user.on("error", () => res.status(400).json({
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
getUsers = async (req, res) => {
    UserModel.find({}, (err, users) => {
        if (err) {
            return res.status(400).json({success: false, err })
        }
        return res.status(200).json({success: true, users})
    })
}
getUserByID = async (req, res) => {
    UserModel.findById(req.params.id, (err, user) => {
        if (err) {
            return res.status(400).json({success: false, err })
        }
        return res.status(200).json({success: true, user})
    })
}
login = (req, res) => {
    UserModel.findOne({email : req.body.email}, (err, user) => {
        if (err) {
            return res.status(400).json({success: false, err })
        }
        // check password req exist
        if (!req.body.password) {
            return res.status(400).json({success: false, message: "no password provided"})
        }
        // ok check if password matches the user password
        if (req.body.password == user.password) {
            // it matches!!
            return res.status(200).json({success: true, user})
        } else {
            // it fails
            return res.status(400).json({success: false, message: "incorrect password"})
        }
    })
}
module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getUsers,
    getUserByID,
    login
}