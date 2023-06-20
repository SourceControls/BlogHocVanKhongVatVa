/** @type {import('next').NextConfig} */

const mongoose = require('mongoose').mongoose
mongoose.set('debug', true)
mongoose.connect(process.env.MONGO_URI)
mongoose.connection.on('connected', () => {
    console.log('connected to db')
})

const nextConfig = {}

module.exports = nextConfig
