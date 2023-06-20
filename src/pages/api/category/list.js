import category from '@/models/category'
import conn from '../db'

export default async function getListCategory(req, res) {
    try {
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
