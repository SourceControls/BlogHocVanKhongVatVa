import post from '@/models/post'
import post_category from '@/models/post_category'
import conn from '../db'

async function deletePost(req, res) {
    try {
        const {postId} = req.query
        let rs = await post.deleteOne({_id: postId})
        //xóa post
        if (rs.deletedCount == 0) return res.send({status: false, message: 'Tài liệu không tồn tại'})
        //xóa category
        rs = await post_category.deleteMany({postId: postId})
        res.send({status: true, message: 'Xóa tài liệu thành công', data: rs})
    } catch (error) {
        res.send({status: false, message: error.message})
    }
}

export default deletePost
