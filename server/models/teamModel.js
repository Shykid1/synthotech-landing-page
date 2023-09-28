const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema({
    image: { 
        type: String,
        required: true,
    },
    name: { 
        type: String, 
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
     }
})

const Team = mongoose.model('Team', teamSchema)

module.exports = Team