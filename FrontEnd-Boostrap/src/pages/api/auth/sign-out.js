import Cookies from 'cookies'

export const config = {
    api: {
        bodyParser: false,
    },
}

export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(404).json({message: 'method not supported'})
    }
    const cookies = new Cookies(req, res)
    cookies.set('access_token')

    return res.status(200).send({message: 'Đã đăng xuất'})
}
