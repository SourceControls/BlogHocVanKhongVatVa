import {axios} from './axios'
import testData from './data'
export async function addPost(data) {
    return await axios.post(`/post/add`, data) // Convert the data object to a JSON string
}
export async function updatePost(data) {
    return await axios.post(`/post/update`, data) // Convert the data object to a JSON string
}

let config = {
    fontFamily: 'Mali',
    primaryColor: 'brown',
    webTitle: 'Vietnam Literary',
    logo: 'https://i.ibb.co/C9FV5Vq/logo.png',
    favIcon: 'https://i.ibb.co/xMZ5LBf/favIcon.png',
    homeHeroCover: 'https://i.ibb.co/jTwVr1C/Thi-t-k-ch-a-c-t-n-1.png',
    homeHeroTitle: 'Bạn Đang Tìm Kiếm Tác Phẩm Nào?',
    homeHeroSubtitle: 'Không Biết Bắt Đầu Từ Đầu? Khám Phá Ngay Những Bài Viết Hay Nhất Của Chúng Tôi',
    readPostCover: 'https://i.ibb.co/9rHFrZq/Untitled.png',
}

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
    return new Promise((resolve, reject) => {
        setTimeout(
            () =>
                resolve({
                    data: [
                        {categoryName: 'Lớp 10', slug: 'lop-10'},
                        {categoryName: 'Lớp 11', slug: 'lop-11'},
                        {categoryName: 'Lớp 12', slug: 'lop-12'},
                    ],
                }),
            0,
        )
    })
    return await axios.get(`/category/list`)
}

export async function getNews({
    id = '',
    category = '',
    key = '',
    displayType = 'NORMAL',
    page = 1,
    limit = 1,
    sortByView = '',
}) {
    return testData
    return await axios.get(
        `/post/list?id=${id}&category=${category}&key=${key}&displayType=${displayType}&page=${page}&limit=${limit}&sortByView=${sortByView}`,
    )
}
export async function getNewsByPublisher({publisher = '', page = 1, limit = 1}) {
    return testData
    return await axios.get(`/post/list-by-publisher?publisher=${publisher}&page=${page}&limit=${limit}`)
}
export default function df() {}
