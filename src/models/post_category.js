import {Schema, model, models} from 'mongoose'

const post_categorySchema = new Schema(
    {
        postId: {type: Schema.Types.ObjectId, required: true},
        categoryId: {
            type: Schema.Types.ObjectId,
            required: true,
        },
    },
    {timestamps: true},
)

post_categorySchema.index({postId: 1, categoryId: 1}, {unique: true})
const post_category = models
    ? models.post_category || model('post_category', post_categorySchema, 'post_category')
    : null

export default post_category
