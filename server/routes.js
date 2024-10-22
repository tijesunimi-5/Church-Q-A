const express = require('express');
const router = express.Router();
const { MergedForm } = require('./models');
const { body, validationResult } = require('express-validator');

const rateLimit = require('express-rate-limit');

const MESSAGES = {
    QUIZ_SUBMITTED: 'Quiz submitted successfully',
    SERVER_ERROR: 'An error occurred on the server',
    VALIDATION_ERROR: 'Invalid input data',
    RATE_LIMIT_ERROR: 'Too many attempts, please try again later'
};

const submissionLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: { message: MESSAGES.RATE_LIMIT_ERROR }
});

const validateQuizAnswers = (answers) => {
    const requiredFields = Array.from({ length: 29 }, (_, i) => `q${i + 1}`);
    const multiPartQuestions = ['q3', 'q7', 'q10', 'q11', 'q12'];
    
    for (const field of requiredFields) {
        if (multiPartQuestions.includes(field.replace(/[a-d]$/, ''))) continue;
        if (!answers[field]) return false;
    }
    return true;
};

const validationRules = [
    body('userId').isString().trim().notEmpty(),
    body('registrationDetails.fullName').isString().trim().isLength({ min: 2, max: 100 }),
    body('registrationDetails.email').isEmail().normalizeEmail(),
    body('registrationDetails.phoneNumber').matches(/^\+?[\d\s-]{10,}$/),
    body('registrationDetails.courseName').isString().trim().notEmpty(),
    body('quizAnswers').custom(validateQuizAnswers)
];

router.post('/submit', submissionLimiter, validationRules, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ 
            message: MESSAGES.VALIDATION_ERROR, 
            errors: errors.array() 
        });
    }

    const { userId, registrationDetails, quizAnswers } = req.body;

    try {
        const newSubmission = new MergedForm({
            userId,
            registrationDetails: {
                ...registrationDetails,
                registrationDate: registrationDetails.registrationDate || Date.now(),
                email: registrationDetails.email.toLowerCase()
            },
            quizAnswers: Object.entries(quizAnswers).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: typeof value === 'string' ? value.trim() : value
            }), {})
        });

        await newSubmission.save();

        res.status(201).json({ 
            message: MESSAGES.QUIZ_SUBMITTED,
            submissionId: newSubmission._id 
        });

    } catch (error) {
        const errorResponse = {
            message: MESSAGES.SERVER_ERROR,
            errorId: Date.now().toString(36) + Math.random().toString(36).substr(2)
        };

        console.error(`Error ID: ${errorResponse.errorId}`, error);
        
        res.status(500).json(errorResponse);
    }
});

router.post('/register', async (req, res) => {
    try {
        const { fullName, email, phoneNumber, courseName } = req.body;
        const newRegistration = new CourseRegistration({
            fullName, email, phoneNumber, courseName
        });

        const user = await newRegistration.save();
        res.status(201).json(user);
        console.log('Sucessful');
    } catch (err){
        res.status(500).json({ message: 'An error occured during registration'});
        console.log('err');
    } 
});

 
router.get('/submissions', async (req, res) => {
    try {
        const quizzes = await Quiz.find();
        res.status(200).json(quizzes);
    } catch (error) {
        console.error('Error fetching quizzes:', error);
        res.status(500).json({ error: 'An error occurred while fetching the quiz submissions' });
    }
});

module.exports = router;
