const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use(express.json());
app.get('/api/data', (req, res) => {
  const data = {
    message: 'This is some sample data from the backend.',  
  };
  res.json(data);
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});