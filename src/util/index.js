import formatDate from './formatDate'
import initWebInfo from './initWebInfo'
import 'react-toastify/dist/ReactToastify.css'

import {
    addPost,
    getCategories,
    getConfig,
    getConfigAsync,
    getNews,
    getNewsByPublisher,
    updateConfig,
    updatePost,
} from './service'
import style from './style'
import './globalStyle.css'
import {axios, GlobalLoading, setDisplayGlobalLoading} from './axios'
module.exports = {
    formatDate,
    initWebInfo,
    addPost,
    getCategories,
    getConfig,
    getConfigAsync,
    getNews,
    getNewsByPublisher,
    updateConfig,
    updatePost,
    style,
    axios,
    GlobalLoading,
    setDisplayGlobalLoading,
}

export default function df() {}
