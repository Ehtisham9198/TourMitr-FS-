// server.js
const env = require('dotenv').config();
const express = require('express');
const colors = require('colors');
const ConnectDB = require('./config/Dbconnect');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');


const app = express();
ConnectDB();

app.use(cors());
app.use(express.json());
app.use('/api/v1/auth', authRoutes);

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`.bgRed.bgGreen);
});
