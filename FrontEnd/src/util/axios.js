import axios from 'axios'
// import {useState} from 'react'
// import {LoadingOverlay} from '@mantine/core'
import {toast} from 'react-toastify'

var displayGlobalLoading, setDisplayGlobalLoading
// function GlobalLoading() {
//     ;[displayGlobalLoading, setDisplayGlobalLoading] = useState(false)
//     return <LoadingOverlay visible={displayGlobalLoading} overlayBlur={2} />
// }

const instance = axios.create({
    baseURL: '/api',
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json',
    },
})

instance.interceptors.request.use(
    function (config) {
        // if (!displayGlobalLoading) setDisplayGlobalLoading(true)

        console.log('Call API: ' + config.url)
        if (typeof window !== 'undefined') config.headers.Authorization = localStorage.Authorization
        return config
    },
    function (error) {
        // setDisplayGlobalLoading(false)
        return toast.error(error.message)
    },
)
instance.interceptors.response.use(
    async function (response) {
        // if (displayGlobalLoading) setTimeout(() => setDisplayGlobalLoading(false), 0)
        // lưu lại auth token
        if (response.headers.get('Authorization')) {
            response.data['Authorization'] = response.headers.get('Authorization')
        }

        // hiển thị message
        if (response.config.method != 'get' && response.data.message)
            if (response.data.state) {
                toast.success(response.data.message)
            } else {
                toast.error(response.data.message)
            }
        return response.data
    },
    function (error) {
        // setDisplayGlobalLoading(false)
        console.log(error.message)
        return toast.error(error.message)
    },
)

export {instance as axios}
