import axios from 'axios'
import {toast} from 'react-toastify'

const instance = axios.create({
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
})

instance.interceptors.request.use(
    function (config) {
        console.log(config.method.toLocaleUpperCase() + ' || ' + config.url)
        return config
    },
    function (error) {
        return toast.error(error.message)
    },
)
instance.interceptors.response.use(
    async function (response) {
        // hiển thị message
        if (response.config.method != 'get' && response.data.message)
            // if (response.data.state) {
            toast.success(response.data.message)
        if (response.config.method == 'get' && response.config.url.includes('page'))
            if ((!response.data.data || response.data.data?.length == 0) && !response.config.url.includes('page=1'))
                toast.info('Không còn gì để xem!')
        return response.data.data
    },
    function (error) {
        const hideAlert = ['/api/user/profile?page=1']

        let message = error.response?.data?.message
        if (Array.isArray(message)) {
            message = message[0]
        }

        if (!hideAlert.includes(error.response?.config.url)) toast.error(message)
    },
)

export {instance as axios}
