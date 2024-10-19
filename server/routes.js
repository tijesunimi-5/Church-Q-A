const express = require('express');
const router = express.Router();
const { Quiz, CourseRegistration } = require('./models');

router.post('/submit', async (req, res) => {
    try {
        // Destructure fields from the request body
        const {
            userId,
            // Question answers
            q1,
            q2,
            q3a,
            q3b,
            q3c,
            q3d,
            q4,
            q5,
            q6,
            q7a,
            q7b,
            q8,
            q9,
            q10a,
            q10b,
            q11a,
            q11b,
            q12a,
            q13,
            q14,
            q15,
            q16,
            q17,
            q18,
            q19,
            q20,
            q21,
            q22,
            q23,
            q24,
            q25,
            q26,
            q27,
            q28,
            q29
        } = req.body;

        // Create a new Quiz object with organized fields
        const newQuiz = new Quiz({
            userId,
            answers: {
                q1,
                q2,
                q3: {
                    a: q3a,
                    b: q3b,
                    c: q3c,
                    d: q3d,
                },
                q4,
                q5,
                q6,
                q7: {
                    a: q7a,
                    b: q7b,
                },
                q8,
                q9,
                q10: {
                    a: q10a,
                    b: q10b,
                },
                q11: {
                    a: q11a,
                    b: q11b,
                },
                q12a,
                q13,
                q14,
                q15,
                q16,
                q17,
                q18,
                q19,
                q20,
                q21,
                q22,
                q23,
                q24,
                q25,
                q26,
                q27,
                q28,
                q29,
            }
        });

        // Save the new quiz data to the database
        await newQuiz.save();

        res.status(201).json('Quiz submitted successfully!');
        console.log('Successful');
    } catch (err) {
        console.error('Error saving quiz data:', err);
        res.status(500).json('An error occurred while submitting the quiz');
    }
});


router.post('/register', async (req, res) => {
    try {
        const { fullName, email, courseName } = req.body;
        const newRegistration = new CourseRegistration({
            fullName, email, courseName
        });
        await newRegistration.save();
        res.status(201).json({ message: 'Registration successful'});
        console.log('Sucessful');
    } catch (err){
        res.status(500).json({ message: 'An error occured during registration'});
        console.log('Error');
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
