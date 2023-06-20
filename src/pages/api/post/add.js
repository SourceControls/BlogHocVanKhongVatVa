import post from '@/models/post'
import post_category from '@/models/post_category'
import {getNews} from '@util'
import conn from '../db'

async function addPost(req, res) {
    try {
        if (!req.body.categories) return res.send({status: false, message: 'Không đủ thông tin'})
        const newPost = new post({
            ...req.body,
        })
        let rs = await newPost.save()
        req.body.categories.map(async (e) => {
            await new post_category({postId: rs._id, categoryId: e}).save()
        })
        rs = await getNews({id: rs._id})
        res.send({status: true, message: 'Thêm tài liệu thành công', ...rs})
    } catch (error) {
        res.send({status: false, message: error.message})
    }
}

export default addPost
