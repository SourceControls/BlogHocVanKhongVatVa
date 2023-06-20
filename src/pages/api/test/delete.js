import post from '@/models/post'
import post_category from '@/models/post_category'
import conn from '../db'

async function getNews(req, res) {
    try {
        res.send([await post.deleteMany({}), await post_category.deleteMany({})])
    } catch (error) {
        res.send(error)
    }
}

export default getNews
