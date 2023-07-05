import {Schema, model, models} from 'mongoose'

const categorySchema = new Schema({
    name: {type: String, unique: true, index: true, uppercase: true, trim: true},
    endPoint: {type: String, trim: true, lowercase: true, unique: true},
    description: {type: String},
})
const category = models ? models.category || model('category', categorySchema, 'category') : null

export default category
