import category from '@/models/category'
export default async function getListCategory(req, res) {
    try {
        const mongoose = require('mongoose').mongoose
        mongoose.set('debug', true)
        mongoose.connect(process.env.MONGO_URI)
        mongoose.connection.on('connected', () => {
            console.log('connected to db')
        })
        let rs = await category.find().lean()
        rs = rs.map((item) => ({
            ...item,
            endPoint: '/category/' + item.endPoint,
            subEndPoint: item.endPoint,
        }))
        return res.send({data: rs})
    } catch (error) {
        res.send({status: false, message: error.message})
    }
}
