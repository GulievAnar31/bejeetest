const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors'); 
const userRoutes = require('./user');
const authRoutes = require('./auth');
const taskRoutes = require('./task');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://mongo:mongo@cluster0.1cnt31s.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB', err));

app.use(bodyParser.json());

app.use(cors());

app.use('/users', userRoutes);
app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
