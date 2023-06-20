import {axios} from './axios'

export async function getNews({id = '', category = '', key = '', displayType = 'NORMAL', page = 1, limit = 1}) {
    return await axios.get(
        `/post/list?id=${id}&category=${category}&key=${key}&displayType=${displayType}&page=${page}&limit=${limit}`,
    )
}
export async function getNewsByPublisher({publisher = '', page = 1, limit = 1}) {
    return await axios.get(`/post/list-by-publisher?publisher=${publisher}&page=${page}&limit=${limit}`)
}
export async function addPost(data) {
    return await axios.post(`/post/add`, data) // Convert the data object to a JSON string
}
export async function updatePost(data) {
    return await axios.post(`/post/update`, data) // Convert the data object to a JSON string
}

let config = undefined
export async function getConfigAsync() {
    if (!config) config = await axios.get(`/config/get`).then((rs) => rs.data[0])
    return config
}
export function getConfig() {
    return config
}
export async function updateConfig(data) {
    return await axios.post(`/config/update`, data) // Convert the data object to a JSON string
}

export async function getCategories() {
    return await axios.get(`/category/list`)
}

export default function df() {}
