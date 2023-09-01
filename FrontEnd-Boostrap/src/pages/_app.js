import './globalStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import {LoadingOverlay, MantineProvider} from '@mantine/core'
import {useEffect} from 'react'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {useSettings} from '@util'
import {Analytics} from '@vercel/analytics/react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Head from 'next/head'

function EmptyLayout({children}) {
    return <>{children}</>
}
function initWebInfo(favIcon) {
    let link = document.querySelector("link[rel~='icon']")
    if (!link) {
        link = document.createElement('link')
        link.rel = 'icon'
        document.getElementsByTagName('head')[0].appendChild(link)
    }
    link.href = favIcon
}

export default function MyApp({Component, pageProps}) {
    const {settings, isLoading} = useSettings()
    const Layout = Component.Layout || EmptyLayout
    useEffect(() => {
        initWebInfo(settings[1]?.favIcon)
    }, [settings[1]?.favIcon])
    if (!settings[1]) return <LoadingOverlay visible />
    return (
        <>
            <Head>
                <title>{settings[1]?.webTitle}</title>
            </Head>
            {
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            }
            <ToastContainer position='top-left' autoClose={3000} limit={3} />
            <Analytics />
        </>
    )
}
