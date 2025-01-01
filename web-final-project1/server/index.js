import express from 'express';

const app = express();

app.get('/', (req, res) => {    
    res.send('Hello World');
});

// Sample API for login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    // Dummy authentication logic
    if (username === 'user' && password === 'password') {
      res.status(200).send({ message: 'Login successful' });
    } else {
      res.status(401).send({ message: 'Invalid credentials' });
    }
  });
  

app.listen(3500, () => {
    console.log('Server is running on http://localhost:3500');
});