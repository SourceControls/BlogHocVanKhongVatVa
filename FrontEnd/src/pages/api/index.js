import conn from './db'
export default function handler(req, res) {
    // Xử lý yêu cầu HTTP ở đây
    res.status(200).json({message: 'Hello from custom server API'})
}
