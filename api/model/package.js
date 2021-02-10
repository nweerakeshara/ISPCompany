const mongoose = require('mongoose');
const moment = require('moment');

const packageSchema = mongoose.Schema({

    serialCode: {
        type: String,
        maxlength:50,
        unique: 1
    },
    packageName : {
        type : String
    },
    packageType: {
        type: String
    },
    monthlyCharge: {
        type : Number
    },
    downloadSpeed: {
        type : Number
    },
    uploadSpeed: {
        type : Number
    },
    downloadLimit: {
        type : Number
    },
    uploadLimit: {
        type : Number
    },
    extraGBFee: {
        type : Number
    },
    downPayment: {
        type : Number
    },
    imageName: {
        type: String,
        default: "none",
        required: true
    },
    imageData: {
        type: String,
        required: true
    }


},{
    collection : 'packages'
});

const Package = mongoose.model('Packages', packageSchema);
module.exports = Package;