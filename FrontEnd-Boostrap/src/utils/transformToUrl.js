import slugify from 'slugify'

export function transformToUrl(title) {
    const slug = slugify(title.replaceAll('đ', 'd'), {
        lower: true, // Convert to lowercase
        locale: 'vi', // language code of the locale to use
        remove: /[*+~.()'"!:@]/g, // Remove special characters
    })
    return slug
}
