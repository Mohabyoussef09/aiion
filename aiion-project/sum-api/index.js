const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/sum', (req, res) => {
    const { a, b, c, d, e, f, g, h, i } = req.body;
    const sum = [a, b, c, d, e, f, g, h, i].reduce((acc, val) => acc + Number(val), 0);
    res.json({ sum });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
