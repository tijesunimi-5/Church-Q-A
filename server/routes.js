const express = require('express');
const router = express.Router();
const Form = require('./models'); 



router.post('/submit', async (req, res) => {
    try {
        const {
            name,
            email,
            phone,
            address,
            dateOfBirth,
            gender,
            message,
            agreeToTerms
        } = req.body;

      
        const newForm = new Form({
            name,
            email,
            phone,
            address,
            dateOfBirth,
            gender,
            message,
            agreeToTerms
        });

    
        await newForm.save();
     
        res.status(201).json({ message: 'Form submitted successfully!' });
    } catch (err) {
        console.error('Error saving form data:', err);
        res.status(500).json({ error: 'An error occurred while submitting the form' });
    }
});

module.exports = router;
