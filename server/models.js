const mongoose = require('mongoose');


const formSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address']
    },
    phone: {
        type: String,
        required: false,
        trim: true,
        match: [/^\d{10,15}$/, 'Please enter a valid phone number']
    },
    address: {
        street: { type: String, required: false, trim: true },
        city: { type: String, required: false, trim: true },
        state: { type: String, required: false, trim: true },
        zip: { type: String, required: false, trim: true }
    },
    dateOfBirth: {
        type: Date,
        required: false
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: false
    },
    message: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 500
    },
    agreeToTerms: {
        type: Boolean,
        required: true,
        default: false
    },
    submittedAt: {
        type: Date,
        default: Date.now
    }
});


const Form = mongoose.model('Form', formSchema);

module.exports = Form;
