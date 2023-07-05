import post from '@/models/post'
import conn from '../db'

async function listByAuthor(req, res) {
    try {
        let {page, limit, publisher} = req.query
        page = parseInt(page)
        limit = parseInt(limit)

        let posts = await post.aggregate([
            {$match: {$expr: {$eq: ['$publisher', {$toObjectId: publisher}]}}},
            {
                $sort: {view: -1},
            },
            {
                $skip: (page - 1) * limit,
            },
            {
                $limit: limit,
            },
        ])

        let rs = posts.map((item) => ({
            ...item,
            url: '/read/' + item._id,
            publishedAt: new Date(item.createdAt).toLocaleDateString('vi-VN').toString(),
        }))

        return res.send({data: rs, paging: {page, totalPage: 1, limit}})
    } catch (error) {
        res.send({status: false, message: error.message})
    }
}

export default listByAuthor
