const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const formRoutes = require('./routes');

const app = express();
app.use(cors({
    origin: 'http://localhost:3000', 
}));

app.use(express.json());
const PORT = process.env.PORT || 3001;

mongoose.connect('mongodb+srv://konsizeinc:19Ana156@cluster0.tqybw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

app.use(bodyParser.json()); 


app.use('/api/forms', formRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
