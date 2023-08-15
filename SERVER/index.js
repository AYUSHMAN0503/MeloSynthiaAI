const express = require('express');
const connectDb = require('./db');
const app = express();
const port = require('./config').port;

connectDb();

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Welcome to MelosynthioAI!');
});
app.use('/auth', require('./Routes/auth'));


app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
}); 