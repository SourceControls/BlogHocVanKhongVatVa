export function formatDate(date) {
    if (!date) return ['', '', '']
    date = date.split('.')[0]

    // ['YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DD', 'HH:mm:ss']
    return [date.replace('T', '  '), ...date.split('T')]
}
