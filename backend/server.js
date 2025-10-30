const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config()

const cors = require('cors')
const app = express()

// Enable CORS for all routes
app.use(cors({
    origin: 'http://localhost:3000', // Allow only this origin
    methods: ['GET', 'POST','PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type','Authorization'], // Allowed headers
    credentials: true // Allow cookies  
}))


//Middleware
app.use(express.json()) //Parse JSON payloads

//Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('✅Connectedto MongoDB'))
    .catch((err) => console.error('❌MongoDB connection error:', err))

//Routes
app.use('/api/assignments', require('./routes/assignments'))

//Middleware for logging
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} ${req.status} - ${new Date().toISOString()}`)
    next()
})

//Error handling middleware
app.use(require('./middleware/errorHandler'))

const PORT = process.env.PORT|| 5000
app.listen(PORT, () => {
    console.log(`�Server running on port ${PORT}`);
})
