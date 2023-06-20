import post from '@/models/post'
import post_category from '@/models/post_category'
import categorySchema from '@/models/category'
import {resBody} from '@util'
import conn from '../db'

async function getListNews(req, res) {
    try {
        let {id, category, page, key, displayType, limit} = req.query
        page = parseInt(page)
        // if (page <= 0) {
        //     page = 1
        // }
        limit = parseInt(limit)
        // if (limit <= 0) {
        //     limit = 4
        // }
        const query = [
            {
                $sort: {createdAt: -1},
            },
            {
                $skip: (page - 1) * limit,
            },
            {
                $limit: limit,
            },
            {
                $lookup: {
                    from: 'user',
                    localField: 'publisher',
                    foreignField: '_id',
                    as: 'publisher',
                },
            },
            {
                $lookup: {
                    from: 'post_category',
                    localField: '_id',
                    foreignField: 'postId',
                    as: 'categories',
                },
            },
        ]
        if (id) {
            query.unshift({$match: {$expr: {$eq: ['$_id', {$toObjectId: id}]}}})
        } else if (category) {
            let categoryId_ = await categorySchema.find({endPoint: category})
            categoryId_ = categoryId_[0]._id
            const postsCategory = await post_category.find({categoryId: categoryId_}, {postId: 1, _id: 0})
            let postsId = postsCategory.map((e) => e.postId)
            if (displayType) query.unshift({$match: {$and: [{displayType}, {_id: {$in: postsId}}]}})
            else query.unshift({$match: {_id: {$in: postsId}}})
        } else if (key) {
            query.unshift({
                $match: {
                    $or: [{title: new RegExp(key, 'i')}, {subTitle: new RegExp(key, 'i')}],
                },
            })
        } else {
            if (displayType) query.unshift({$match: {displayType}})
        }

        // chuyển đổi thời gian
        let rs = await post.aggregate(query)
        rs = rs.map((item) => ({
            ...item,
            url: '/read/' + item._id,
            publishedAt: new Date(item.createdAt).toLocaleDateString('vi-VN').toString(),
        }))
        return res.send({data: rs, paging: {page, totalPage: 1, limit}})
    } catch (error) {
        res.send({status: false, message: error.message})
    }
}

export default getListNews
