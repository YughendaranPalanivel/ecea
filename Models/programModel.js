const mongoose = require('mongoose');

const programSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Provide a name for the event/workshop'],
        unique: true
    },
    description: {
        type: String,
        required: [true, 'Describe the event/workshop.']
    },
    price: {
        type: Number,
        required: [true, 'Price the event/workshop']
    },
    venue: {
        type: String,
        required: [true, 'Provide a venue for this event/workshop']
    },
    date:{
        type: Date
    },
    typeOfProgram: {
        type: String,
        required: [true, 'Tell the type of the program either event/workshop'],
        enum: {
            values: ['event', 'workshop'],
            message: 'The program should be either an event or workshop'
        }
    },
    DateOfCreation: {
        type: Date,
        default: Date.now,
    }
});

//ascending order
userSchema.index({ price: 1});

const Program = mongoose.model('Program', programSchema);
module.exports = Program;