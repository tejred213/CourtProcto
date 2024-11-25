const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const connectDB = require('./connectors/connection');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;

// Enable CORS for localhost:3000
app.use(cors({ origin: 'http://localhost:3000' }));

connectDB();

app.use('/api/user', userRoutes);

// Define a route for the home route ("/")
app.get('/', (req, res) => {
  res.send('Welcome to the Project API');
});

// More routes for reading, updating, and deleting notes

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});