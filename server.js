const express = require('express');
const colors = require('colors');
const ConnectDB = require('./config/Dbconnect');
const env = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');


// rest object
const app = express();
// Configure env
env.config();

// database connect
ConnectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/v1/auth', authRoutes);


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`.bgRed.bgGreen);
})
