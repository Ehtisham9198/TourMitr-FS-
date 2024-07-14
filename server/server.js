// server.js
const express = require('express');
const colors = require('colors');
const ConnectDB = require('./config/Dbconnect');
const env = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');

const app = express();
env.config();
ConnectDB();

app.use(cors());
app.use(express.json());
app.use('/api/v1/auth', authRoutes);

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`.bgRed.bgGreen);
});
