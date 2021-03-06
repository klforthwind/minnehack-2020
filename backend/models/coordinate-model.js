const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CoordinateSchema = new Schema(
    {
        longitude : {type: Number, required: true},
        latitude : {type: Number, required: true},
        name : {type: String, default:""}
    },
    { timestamps : false}
)

module.exports = {CoordinateModel: mongoose.model('coordinates', CoordinateSchema), CoordinateSchema}
