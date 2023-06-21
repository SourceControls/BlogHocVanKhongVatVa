// const mongoose = require('mongoose').mongoose
import mongoose from 'mongoose'
if (typeof window === 'undefined') {
    mongoose.set('debug', false)
    mongoose.connect(process.env.MONGO_URI)
    mongoose.connection.on('connected', () => {
        console.log('connected to db')
    })
}

export default mongoose.connection
