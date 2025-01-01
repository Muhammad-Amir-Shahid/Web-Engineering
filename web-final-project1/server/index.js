import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();

app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Parse incoming JSON requests

// In-memory storage for users (for testing purposes)
const users = [];

// Signup Route
app.post('/api/signup', (req, res) => {
  const { name, email, password } = req.body;

  // Validation
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Check if user already exists
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Save new user
  users.push({ name, email, password });
  console.log(users,"u");
  res.status(201).json({ message: 'Signup successful' });
});


// Login Route
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Validation
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  // Find user
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  res.status(200).json({ message: 'Login successful', user: { name: user.name, email: user.email } });
});


// Default Route
app.get('/', (req, res) => {
  res.send('Welcome to the server!');
});

// Start the server
app.listen(3600, () => {
  console.log('Server is running on http://localhost:3600');
});

