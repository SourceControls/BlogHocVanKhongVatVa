import {Schema, model, models} from 'mongoose'

const roleSchema = new Schema({
    name: {type: String, required: true, trim: true},
})
const role = models ? models.user || model('user', roleSchema, 'user') : null

export default role
