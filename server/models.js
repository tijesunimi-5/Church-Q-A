const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        
    },
    answers: {
        q1: { type: String, required: false, trim: false },
        q2: { type: String, required: false, trim: false },
        q3a: { type: String, required: false, trim: false },
        q3b: { type: String, required: false, trim: false },
        q3c: { type: String, required: false, trim: false },
        q3d: { type: String, required: false, trim: false },
        q4: { type: String, required: false, trim: false },
        q5: { type: String, required: false, trim: false },
        q6: { type: String, required: false, trim: false },
        q7a: { type: String, required: false, trim: false },
        q7b: { type: String, required: false, trim: false },
        q8: { type: String, required: false, trim: false },
        q9: { type: String, required: false, trim: false },
        q10a: { type: String, required: false, trim: false },
        q10b: { type: String, required: false, trim: false },
        q11a: { type: String, required: false, trim: false },
        q11b: { type: String, required: false, trim: false },
        q12a: { type: String, required: false, trim: false },
        q13: { type: String, required: false, trim: false },
        q14: { type: String, required: false, trim: false },
        q15: { type: String, required: false, trim: false },
        q16: { type: String, required: false, trim: false },
        q17: { type: String, required: false, trim: false },
        q18: { type: String, required: false, trim: false },
        q19: { type: String, required: false, trim: false },
        q20: { type: String, required: false, trim: false },
        q21: { type: String, required: false, trim: false },
        q22: { type: String, required: false, trim: false },
        q23: { type: String, required: false, trim: false },
        q24: { type: String, required: false, trim: false },
        q25: { type: String, required: false, trim: false },
        q26: { type: String, required: false, trim: false },
        q27: { type: String, required: false, trim: false },
        q28: { type: String, required: false, trim: false },
        q29: { type: String, required: false, trim: false }
    },
    submittedAt: {
        type: Date,
        default: Date.now
    }
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
