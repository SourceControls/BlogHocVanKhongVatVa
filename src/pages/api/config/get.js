import config from './config.json'
function getConfig(req, res) {
    res.send({data: [config]})
}

export default getConfig
