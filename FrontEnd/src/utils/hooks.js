import {getPosts} from './service'
import {axios} from './axios'
import useSWRInfinite from 'swr/infinite'
import useSWR from 'swr'
import {toast} from 'react-toastify'

export function useProfile(query, slug = '') {
    const {data, isLoading, mutate} = useSWRInfinite((index) => '/api/auth/profile', axios.get)
    const profile = data ? [].concat(...data) : []

    return {
        profile,
        isLoading,
        mutate,
    }
}

// lấy danh sách post
export function usePosts(query, slug = '') {
    const {data, error, isLoading, size, setSize, mutate} = useSWRInfinite(
        (index) => `/api/post${slug}?page=${index + 1}` + query,
        axios.get,
    )
    const posts = data ? [].concat(...data) : []
    return {
        posts,
        isLoading,
        isError: error,
        size,
        setSize,
        mutate,
    }
}

export function useLiteries(query, slug = '') {
    const {data, error, isLoading, size, setSize, mutate} = useSWRInfinite(
        (index) => `/api/literary${slug}?page=${index + 1}` + query,
        axios.get,
    )
    const literaries = data ? [].concat(...data) : []
    return {
        literaries,
        isLoading,
        isError: error,
        size,
        setSize,
        mutate,
    }
}
export function useSettings() {
    const {data, error, isLoading} = useSWR('/api/setting', axios.get)
    const settings = data ? data : []
    return {
        settings,
        isLoading,
    }
}
export function useTags(query, slug = '') {
    const {data, error, isLoading, size, setSize, mutate} = useSWRInfinite(
        (index) => `/api/tag${slug}?page=${index + 1}` + query,
        axios.get,
    )
    const tags = data ? [].concat(...data) : []
    return {
        tags,
        isLoading,
        isError: error,
        size,
        setSize,
        mutate,
    }
}
export function useCategories(query, slug = '') {
    const {data, error, isLoading, size, setSize, mutate} = useSWRInfinite(
        (index) => `/api/category${slug}?page=${index + 1}` + query,
        axios.get,
    )
    const categories = data ? [].concat(...data) : []
    return {
        categories,
        isLoading,
        isError: error,
        size,
        setSize,
        mutate,
    }
}

export function useUsers(query, slug = '') {
    const {data, error, isLoading, size, setSize, mutate} = useSWRInfinite(
        (index) => `/api/user${slug}?page=${index + 1}` + query,
        axios.get,
    )
    const users = data ? [].concat(...data) : []
    return {
        users,
        isLoading,
        isError: error,
        size,
        setSize,
        mutate,
    }
}
export function useAdvertisements(query, slug = '') {
    const {data, error, isLoading, size, setSize, mutate} = useSWRInfinite(
        (index) => `/api/advertisement${slug}?page=${index + 1}` + query,
        axios.get,
    )
    const advertisements = data ? [].concat(...data) : []
    return {
        advertisements,
        isLoading,
        isError: error,
        size,
        setSize,
        mutate,
    }
}
export function useComments(query) {
    const {data, error, isLoading, size, setSize, mutate} = useSWRInfinite(
        (index) => `/api/post/${query}/comment?page=${index + 1}`,
        axios.get,
    )
    // if (data?.length > 1 && data[data.length - 1]?.length == 0) {
    //     toast.info('Không còn bình luận')
    // }
    const comments = data ? [].concat(...data) : []
    return {
        comments,
        isLoading,
        isError: error,
        size,
        setSize,
        mutate,
    }
}
