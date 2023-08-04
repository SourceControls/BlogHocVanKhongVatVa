// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import httpProxy from 'http-proxy'
import Cookies from 'cookies'

export const config = {
    api: {
        bodyParser: false,
    },
}

const proxy = httpProxy.createProxyServer()

export default function handler(req, res) {
    req.url = req.url.replace('/api', '')

    if (req.method !== 'POST') {
        return res.status(404).json({message: 'method not supported'})
    }

    return new Promise((resolve) => {
        // don't send cookies to API server
        req.headers.cookie = ''

        const handleLoginResponse = (proxyRes, req, res) => {
            let body = ''

            proxyRes.on('data', function (chunk) {
                body += chunk
            })

            proxyRes.on('end', function () {
                try {
                    const isSuccess = proxyRes.statusCode && proxyRes.statusCode >= 200 && proxyRes.statusCode < 300
                    if (!isSuccess) {
                        console.log(body)
                        res.status(proxyRes.statusCode || 500).json(JSON.parse(body))
                        return resolve(true)
                    }
                    // Get the Authorization header from proxyRes
                    const accessToken = proxyRes.headers['authorization']

                    const {data, message} = JSON.parse(body)

                    // convert token to cookies
                    const cookies = new Cookies(req, res, {secure: process.env.NODE_ENV !== 'development'})
                    cookies.set('access_token', accessToken, {
                        httpOnly: true,
                        sameSite: 'lax',
                        expires: new Date(new Date().getTime() + 60 * 60 * 24 * 7 * 1000), // expire in 7 day from now
                    })

                    res.status(200).json({data, message})
                } catch (error) {
                    res.status(500).json({message: 'something went wrong'})
                }
                resolve(true)
            })
        }

        proxy.once('proxyRes', handleLoginResponse)
        proxy.web(req, res, {
            target: process.env.BASE_BE_URL,
            changeOrigin: true,
            selfHandleResponse: true,
        })
    })
}
