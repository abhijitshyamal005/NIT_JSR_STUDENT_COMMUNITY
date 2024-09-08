const express = require('express');
const app = express();

// Middleware to handle JSON data
app.use(express.json());

// Define routes
app.get('/', (req, res) => {
  res.send('Backend is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
