const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    userid: {
        type: String
    },
    name: {
        type: String
    },
    image: {
        type: String
    },
    email: {
        type: String
    },
    location: {
        type: String
    },
    acc_created: {
        type: Date
    }

}, {
    timestamps: true
});

const Profile = mongoose.model('profile', profileSchema);

module.exports = Profile;