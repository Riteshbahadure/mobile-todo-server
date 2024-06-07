const mongoose = require("mongoose")

const TodoSchema = new mongoose.Schema({
    task:{type: String, required: true},
    desc:{type: String, required: true},
    complete:{type: Boolean, default:false},
})
module.exports = mongoose.model("todo",TodoSchema)