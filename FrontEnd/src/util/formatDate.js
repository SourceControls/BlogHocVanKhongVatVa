export function formatDate(date) {
    const inputDate = new Date(date) // Ngày tháng năm cần chuyển đổi

    const currentDate = new Date()
    let diff = Math.floor((currentDate - inputDate) / 1000) // Chuyển đổi thành giây
    let type = 'trước'
    if (diff < 0) {
        type = 'sau'
        diff *= -1
    }
    if (diff < 60) {
        return `${diff} giây ${type}`
    } else if (diff < 3600) {
        const minutes = Math.floor(diff / 60)
        return `${minutes} phút ${type}`
    } else if (diff < 172800) {
        const hours = Math.floor(diff / 3600)
        return `${hours} giờ ${type}`
    } else if (diff < 1209600) {
        const days = Math.floor(diff / 86400)
        return `${days} ngày ${type}`
    } else if (diff < 5184000) {
        const weeks = Math.floor(diff / 604800)
        return `${weeks} tuần ${type}`
    } else {
        return `30+ ngày ${type}` // Trả về "30+ ngày ${type}" nếu quá 30 ngày
    }
}
