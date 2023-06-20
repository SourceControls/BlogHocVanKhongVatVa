import postSchema from '@/models/post'
import conn from '../db'

async function Count(req, res) {
    try {
        let post = await postSchema.findById(req.query.postId, {postId: 1, view: 1})
        const rs = {preView: 0, currentView: 0}
        rs.preView = post.view
        post.view += 1
        rs.currentView = (await post.save()).view
        return res.send({status: true, ...rs})
    } catch (error) {
        res.send({status: false, message: error.message})
    }
}

export default Count
