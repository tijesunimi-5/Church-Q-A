const express = require('express');
const router = express.Router();
const Quiz = require('./models'); 



router.post('/submit', async (req, res) => {
    try {
        const {
            userId,
            answers
        } = req.body;

        const newQuiz = new Quiz({
            userId,
            answers
        });

        await newQuiz.save();

       
        res.status(201).json({ message: 'Quiz submitted successfully!' });
    } catch (err) {
        console.error('Error saving quiz data:', err);
        res.status(500).json({ error: 'An error occurred while submitting the quiz' });
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
