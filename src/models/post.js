import {Schema, model, models} from 'mongoose'

const postSchema = new Schema(
    {
        title: {
            type: String,
            uppercase: true,
            unique: true,
            index: true,
            trim: true,
            required: true,
            default: () => Date.now(),
        },
        subTitle: {type: String, trim: true, required: true},
        content: {type: String, trim: true, required: true},
        publisher: {type: Schema.Types.ObjectId, required: true, default: '6476f31ce125802070155729'},
        image: {
            type: String,
            required: true,
            default: 'https://pbs.twimg.com/profile_images/1108430392267280389/ufmFwzIn_400x400.png',
        },
        displayType: {
            type: String,
            default: 'NORMAL',
            index: true,
            trim: true,
            enum: ['NORMAL', 'HOT', 'TOP', 'HIDE'],
            required: true,
            uppercase: true,
        },
        view: {type: Number, default: () => parseInt(Math.random() * 1000000)},
    },
    {timestamps: true},
)
const post = models ? models.post || model('post', postSchema, 'post') : null

export default post
