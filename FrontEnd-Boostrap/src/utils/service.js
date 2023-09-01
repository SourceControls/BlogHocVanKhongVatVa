import {axios} from './axios'

export async function updateConfig(data) {
    return axios.patch(`/api/setting`, data) // Convert the data object to a JSON string
}

export async function signIn(form) {
    return axios.post('/api/auth/sign-in', form)
}
export async function signOut() {
    return axios.post('/api/auth/sign-out')
}
export async function signUp(form) {
    return axios.post('/api/auth/sign-up', form)
}
export async function forgotPassword(form) {
    return axios.post('/api/auth/forgot-password', form)
}
export async function changePassword(form) {
    return axios.post('/api/auth/change-password', form)
}
export async function changePasswordCaseForgot(form) {
    return axios.post('/api/auth/change-password-case-forgot', form)
}

export async function getPostsSSR(query) {
    return axios.get(process.env.BASE_BE_URL + '/post' + query)
}
export async function createPost(form) {
    return axios.post('/api/post', form)
}
export async function updatePost(form) {
    return axios.patch('/api/post/' + form.postId, form)
}
export async function requestPublish(id) {
    return axios.put('/api/post/' + id + '/request-publish')
}
export async function publishPost(id) {
    return axios.put('/api/post/' + id + '/publish')
}
export async function hidePost(id) {
    return axios.put('/api/post/' + id + '/hide')
}
export async function sendPostAlert(id, email) {
    return axios.post('/api/post/' + id + '/alert', {email})
}
export async function requestPost(form) {
    return axios.post('/api/post/request-post', form)
}
export async function reaction(slug, like = true) {
    return axios.put(`/api/post/${slug}/reaction/${like ? 'LIKE' : 'DISLIKE'}`)
}
export async function getOwnReaction(slug) {
    return axios.get(`/api/post/${slug}/own-reaction`)
}
export async function countPostView(slug) {
    return axios.put(`/api/post/${slug}/count-view`)
}
export async function countLiterayView(slug) {
    return axios.put(`/api/literary/${slug}/count-view`)
}

export async function createTag(form) {
    return axios.post('/api/tag', form)
}
export async function updateTag(form) {
    return axios.patch('/api/tag/' + form.tagId, form)
}
export async function deleteTag(id) {
    return axios.delete('/api/tag/' + id)
}
export async function createCategory(form) {
    return axios.post('/api/category', form)
}
export async function updateCategory(form) {
    return axios.patch('/api/category/' + form.categoryId, form)
}
export async function deleteCategory(id) {
    return axios.delete('/api/category/' + id)
}
export async function createAdvertisement(form) {
    return axios.post('/api/advertisement', form)
}
export async function updateAdvertisement(form) {
    return axios.patch('/api/advertisement/' + form.advertisementId, form)
}
export async function deleteAdvertisement(id) {
    return axios.delete('/api/advertisement/' + id)
}

export async function createLiterary(form) {
    return axios.post('/api/literary', form)
}
export async function updateLiterary(form) {
    return axios.patch('/api/literary/' + form.literaryId, form)
}
export async function deleteLiterary(id) {
    return axios.delete('/api/literary/' + id)
}
export async function hideLiterary(id) {
    return axios.put('/api/literary/' + id + '/hide')
}

export async function uploadImg(file) {
    var form = new FormData()
    form.append('image', file)
    return fetch('https://api.imgbb.com/1/upload?key=4d745d471bf35339a4c54af3805742ad', {
        method: 'POST',
        mimeType: 'multipart/form-data',
        contentType: false,
        body: form,
    })
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            console.log(res.data.image.url)
            return res.data.image.url
        })
}

export async function updateUser(form) {
    return axios.patch('/api/user/' + form.userId, form)
}
export async function contributorRegister(form) {
    return axios.post('/api/user/contributor-register', form)
}
export async function createComment(content, slug = '') {
    return axios.post(`/api/post/${slug}/comment`, {content})
}
export async function deleteComment(id, slug = '') {
    return axios.delete(`/api/post/${slug}/comment/` + id)
}
