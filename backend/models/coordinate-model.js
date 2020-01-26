const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CoordinateSchema = new Schema(
    {
        longitude : {type: Number, required: true},
        latitude : {type: Number, required: true}
    },
    { timestamps : false}
)

module.exports = mongoose.model('coordinates', CoordinateSchema)
