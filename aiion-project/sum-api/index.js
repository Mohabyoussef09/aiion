const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(cors());

// API route to calculate the sum
app.post('/api/sum', (req, res) => {
    const { numbers } = req.body;

    if (!Array.isArray(numbers) || numbers.length !== 9) {
        return res.status(400).json({ error: 'Please provide an array of exactly 9 numbers.' });
    }

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    res.json({ sum });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
