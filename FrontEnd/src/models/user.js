import {Schema, model, models} from 'mongoose'

const userSchema = new Schema({
    name: {type: String, required: true, trim: true},
    bio: {type: String},
    avatar: {type: String, default: 'https://static.thenounproject.com/png/5034901-200.png'},
    username: {type: String, trim: true, index: true, unique: true, required: true},
    password: {type: String, trim: true, required: true},
    role: {type: [String], trim: true},
})
const user = models ? models.user || model('user', userSchema, 'user') : null

export default user
