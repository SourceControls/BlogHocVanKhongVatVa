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
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
})

instance.interceptors.request.use(
    function (config) {
        // if (!displayGlobalLoading) setDisplayGlobalLoading(true)
        console.log(config.method.toLocaleUpperCase() + ' || ' + config.url)
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

        // hiển thị message
        if (response.config.method != 'get' && response.data.message)
            // if (response.data.state) {
            toast.success(response.data.message)
        // } else {
        // toast.error(response.data.message)
        // }
        if (response.config.method == 'get')
            if (!response.data.data || response.data.data?.length == 0) toast.info('Không còn gì để xem!')
        return response.data.data
    },
    function (error) {
        // setDisplayGlobalLoading(false)
        console.log(error)

        let message = error.response?.data?.message
        if (Array.isArray(message)) {
            message = message[0]
        }

        return toast.error(message)
    },
)

export {instance as axios}
