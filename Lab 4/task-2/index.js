const express = require('express');
const app = express();
app.use(express.json()); 

let users = [
  { id: 1, name: 'Abdul Mannan Khan' },
  { id: 2, name: 'Amir Khan' }
];


app.get('/api/users', (req, res) => {
  res.json(users);
});

app.post('/api/users', (req, res) => {
  const {name}=req.body
  console.log(req)
  const newUser = {
    id: users.length + 1,
    name:name
  };
  console.log(newUser, "abcd")
  users.push(newUser);
  res.status(201).json(newUser);
});

app.put('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');

  user.name = req.body.name;
  res.json(user);
});

app.delete('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');

  const index = users.indexOf(user);
  users.splice(index, 1);

  res.json(user);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
