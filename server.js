const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const investmentRoutes = require('./routes/investments');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', investmentRoutes);

// Database Connection and Server Initialization
connectDB();
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
