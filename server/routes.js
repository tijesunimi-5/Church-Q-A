const express = require('express');
const router = express.Router();
const { MergedForm } = require('./models');
const { body, validationResult } = require('express-validator');
const rateLimit = require('express-rate-limit');

const MESSAGES = {
  FORM_SUBMITTED: 'Form submitted successfully',
  SERVER_ERROR: 'An error occurred on the server',
  VALIDATION_ERROR: 'Invalid input data',
  RATE_LIMIT_ERROR: 'Too many attempts, please try again later',
};

// Rate limiter middleware
const submissionLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Max submissions per window per user
  message: { message: MESSAGES.RATE_LIMIT_ERROR },
});

// Validation rules for registration details and quiz answers
const validationRules = [
  body('fullName').isString().trim().isLength({ min: 2, max: 100 }).withMessage('Full name must be between 2 and 100 characters'),
  body('email').isEmail().normalizeEmail().withMessage('A valid email is required'),
  body('phoneNumber').matches(/^\+?[\d\s-]{10,}$/).withMessage('Phone number must be at least 10 digits'),
  body('courseName').isString().trim().notEmpty().withMessage('Course name is required'),
  body('answers').isObject().custom(answers => {
    const requiredFields = Array.from({ length: 20 }, (_, i) => `q${i + 1}`); // Update to match your quiz questions count
    for (const field of requiredFields) {
      if (!answers[field]) return false;
    }
    return true;
  }).withMessage('All quiz answers are required')
];
// POST route to handle form submission (registration details + quiz)
router.post('/submit', async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            message: MESSAGES.VALIDATION_ERROR,
            errors: errors.array()
        });
    }

    const { userId, registrationDetails, quizAnswers } = req.body; // Expecting userId and registrationDetails

    try {
        // Create a new merged form entry
        const newSubmission = new MergedForm({
            userId, // Include userId
            registrationDetails, // Assign registrationDetails directly
            quizAnswers: Object.entries(quizAnswers).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: typeof value === 'string' ? value.trim() : value
            }), {})
        });

        // Save the form data
        await newSubmission.save();
        res.status(201).json({
            message: MESSAGES.FORM_SUBMITTED,
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

router.get('/submissions', async (req, res) => {
  try {
    const submissions = await MergedForm.find();
    res.status(200).json(submissions);
  } catch (error) {
    console.error('Error fetching submissions:', error);
    res.status(500).json({ error: 'An error occurred while fetching the submissions' });
  }
});

module.exports = router;
