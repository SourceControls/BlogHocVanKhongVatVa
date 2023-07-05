import post from '@/models/post'
import post_category from '@/models/post_category'
import {getNews} from '@util'
import conn from '../db'

async function updateNews(req, res) {
    try {
        const {_id, content, title, subTitle, displayType, categories} = req.body

        //remove old categories and add new categories
        if (categories) {
            await post_category.deleteMany({postId: _id})
            categories.map((item) => {
                new post_category({postId: _id, categoryId: item}).save()
            })
        }

        let rs = await post.findOneAndUpdate(
            {_id: _id},
            {title, content, subTitle, displayType},
            // If `new` isn't true, `findOneAndUpdate()` will return the
            // document as it was _before_ it was updated.
            {new: true},
        )

        // rs = (await getNews({id: _id})).data[0]
        console.log('new: ' + (await getNews({id: _id})))
        res.send({status: true, data: rs})
    } catch (error) {
        res.send({status: false, message: error.message})
    }
}

export default updateNews
