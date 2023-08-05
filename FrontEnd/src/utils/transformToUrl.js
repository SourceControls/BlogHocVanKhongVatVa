import slugify from 'slugify'

export function transformToUrl(title) {
    const slug = slugify(title, {
        lower: true, // Convert to lowercase
        remove: /[*+~.()'"!:@]/g, // Remove special characters
    })
    return slug
}
