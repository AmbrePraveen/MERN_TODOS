const mongoose = require("mongoose")
const TodoSchema = mongoose.Schema({
    data1: {
        name: {
            type: String,
        },
        desc: {
            type: String,
        },
        priority: {
            type: String,
        }
    },
    Emoji: {
        type: String

    }

}, { timestamps: true })

module.exports = mongoose.model("Todos", TodoSchema)