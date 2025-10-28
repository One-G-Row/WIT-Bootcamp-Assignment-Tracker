const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()

//Middleware
app.use(express.json()) //Parse JSON payloads

//Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('✅Connectedto MongoDB'))
    .catch((err) => console.error('❌MongoDB connection error:', err))

//Routes
app.use('/api/assignments', require('./routes/assignments'))

//Error handling middleware
app.use(require('./middleware/errorHandler'))

const PORT = process.env.PORT|| 5000
app.listen(PORT, () => {
    console.log(`�Server running on port ${PORT}`);
})
