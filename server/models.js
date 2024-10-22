const mongoose = require('mongoose');

// Schema for the merged form (quiz + course registration)
const mergedFormSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    // Course registration details
    registrationDetails: {
        fullName: {
            type: String,
            trim: true,
            required: true
        },
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true
        },
        phoneNumber: {
            type: String,
            trim: true,
            required: true
        },
        courseName: {
            type: String,
            trim: true,
            required: true
        },
        registrationDate: {
            type: Date,
            default: Date.now,
        },
    },
    // Quiz answers
    quizAnswers: {
        q1: { type: String, trim: true },
        q2: { type: String, trim: true },
        q3a: { type: String, trim: true },
        q3b: { type: String, trim: true },
        q3c: { type: String, trim: true },
        q3d: { type: String, trim: true },
        q4: { type: String, trim: true },
        q5: { type: String, trim: true },
        q6: { type: String, trim: true },
        q7a: { type: String, trim: true },
        q7b: { type: String, trim: true },
        q8: { type: String, trim: true },
        q9: { type: String, trim: true },
        q10a: { type: String, trim: true },
        q10b: { type: String, trim: true },
        q11a: { type: String, trim: true },
        q11b: { type: String, trim: true },
        q12a: { type: String, trim: true },
        q13: { type: String, trim: true },
        q14: { type: String, trim: true },
        q15: { type: String, trim: true },
        q16: { type: String, trim: true },
        q17: { type: String, trim: true },
        q18: { type: String, trim: true },
        q19: { type: String, trim: true },
        q20: { type: String, trim: true },
        q21: { type: String, trim: true },
        q22: { type: String, trim: true },
        q23: { type: String, trim: true },
        q24: { type: String, trim: true },
        q25: { type: String, trim: true },
        q26: { type: String, trim: true },
        q27: { type: String, trim: true },
        q28: { type: String, trim: true },
        q29: { type: String, trim: true }
    },
    submittedAt: {
        type: Date,
        default: Date.now,
    },
});

const MergedForm = mongoose.model('MergedForm', mergedFormSchema);
module.exports = { MergedForm };
