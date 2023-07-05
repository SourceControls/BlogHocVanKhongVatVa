export default async function updateConfig(req, res) {
    try {
        const fs = require('fs/promises')
        let data = req.body
        await fs.writeFile('src/pages/api/config/config.json', JSON.stringify(data))
        return res.send({status: true})
    } catch (error) {
        res.send({status: false, message: error.message})
    }
}
