const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === '1234') {
    res.status(200).json({ message: 'Login Successful', token: 'abc123' });
  } else {
    res.status(401).json({ message: 'Invalid Username or Password' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
