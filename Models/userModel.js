const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Provide an unique username.'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Provide an email for your account.'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, `Please provide a valid email`]
    },
    password: {
        type: String,
        required: [true, 'Provide a password.'],
        minlength: 6
    },
    DateOfCreation: {
        type: Date,
        default: Date.now,
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;