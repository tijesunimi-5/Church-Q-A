const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Assuming you have a User model to reference
        
    },
    answers: {
        q1: { type: String, required: true, trim: true },
        q2: { type: String, required: true, trim: true },
        q3a: { type: String, required: true, trim: true },
        q3b: { type: String, required: true, trim: true },
        q3c: { type: String, required: true, trim: true },
        q3d: { type: String, required: true, trim: true },
        q4: { type: String, required: true, trim: true },
        q5: { type: String, required: true, trim: true },
        q6: { type: String, required: true, trim: true },
        q7a: { type: String, required: true, trim: true },
        q7b: { type: String, required: true, trim: true },
        q8: { type: String, required: true, trim: true },
        q9: { type: String, required: true, trim: true },
        q10a: { type: String, required: true, trim: true },
        q10b: { type: String, required: true, trim: true },
        q11a: { type: String, required: true, trim: true },
        q11b: { type: String, required: true, trim: true },
        q12a: { type: String, required: true, trim: true },
        q13: { type: String, required: true, trim: true },
        q14: { type: String, required: true, trim: true },
        q15: { type: String, required: true, trim: true },
        q16: { type: String, required: true, trim: true },
        q17: { type: String, required: true, trim: true },
        q18: { type: String, required: true, trim: true },
        q19: { type: String, required: true, trim: true },
        q20: { type: String, required: true, trim: true },
        q21: { type: String, required: true, trim: true },
        q22: { type: String, required: true, trim: true },
        q23: { type: String, required: true, trim: true },
        q24: { type: String, required: true, trim: true },
        q25: { type: String, required: true, trim: true },
        q26: { type: String, required: true, trim: true },
        q27: { type: String, required: true, trim: true },
        q28: { type: String, required: true, trim: true },
        q29: { type: String, required: true, trim: true }
    },
    submittedAt: {
        type: Date,
        default: Date.now
    }
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
