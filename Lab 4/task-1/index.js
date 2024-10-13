const express = require('express');
const app = express();

// Home Page Route
app.get('/', (req, res) => {
  res.send('Home Page');
});

// About Us Route
app.get('/about', (req, res) => {
  res.send('About Us');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
