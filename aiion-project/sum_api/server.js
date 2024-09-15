const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json()); // For parsing application/json
app.use(cors()); // To enable CORS for cross-origin requests

// Route to sum the inputs
app.post('/sum-inputs', (req, res) => {
  const { ph, ec, k, na, mg, ca, cl, sio2, f } = req.body;

  // Convert values to numbers and sum them up
  const sum = [ph, ec, k, na, mg, ca, cl, sio2, f].reduce((acc, val) => acc + parseFloat(val || 0), 0);

  res.json({ sum });
});

// Start the server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
