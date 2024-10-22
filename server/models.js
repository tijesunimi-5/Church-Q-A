const mongoose = require('mongoose');

// Schema for the merged form (quiz + course registration)
const mergedFormSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
    },
    // Course registration details
    registrationDetails: {
        fullName: {
            type: String,
            trim: false,
            required: false
        },
        email: {
            type: String,
            trim: false,
            required: false,
            unique: false
        },
        phoneNumber: {
            type: String,
            trim: false,
            required: false
        },
        courseName: {
            type: String,
            trim: false,
            required: false
        },
        registrationDate: {
            type: Date,
            default: Date.now,
        },
    },
    // Quiz answers
    quizAnswers: {
        q1: { type: String, trim: false },
        q2: { type: String, trim: false },
        q3a: { type: String, trim: false },
        q3b: { type: String, trim: false },
        q3c: { type: String, trim: false },
        q3d: { type: String, trim: false },
        q4: { type: String, trim: false },
        q5: { type: String, trim: false },
        q6: { type: String, trim: false },
        q7a: { type: String, trim: false },
        q7b: { type: String, trim: false },
        q8: { type: String, trim: false },
        q9: { type: String, trim: false },
        q10a: { type: String, trim: false },
        q10b: { type: String, trim: false },
        q11a: { type: String, trim: false },
        q11b: { type: String, trim: false },
        q12a: { type: String, trim: false },
        q13: { type: String, trim: false },
        q14: { type: String, trim: false },
        q15: { type: String, trim: false },
        q16: { type: String, trim: false },
        q17: { type: String, trim: false },
        q18: { type: String, trim: false },
        q19: { type: String, trim: false },
        q20: { type: String, trim: false },
        q21: { type: String, trim: false },
        q22: { type: String, trim: false },
        q23: { type: String, trim: false },
        q24: { type: String, trim: false },
        q25: { type: String, trim: false },
        q26: { type: String, trim: false },
        q27: { type: String, trim: false },
        q28: { type: String, trim: false },
        q29: { type: String, trim: false }
    },
    submittedAt: {
        type: Date,
        default: Date.now,
    },
});

const MergedForm = mongoose.model('MergedForm', mergedFormSchema);
module.exports = { MergedForm };
