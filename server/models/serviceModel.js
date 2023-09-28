const mongoose = require('mongoose')


const ServiceSchema = new mongoose.Schema({
    name:{
        type:String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    image:{
        type: String,
        require: true
    }
});

var Service = mongoose.model("Service", ServiceSchema);

module.exports = Service;


