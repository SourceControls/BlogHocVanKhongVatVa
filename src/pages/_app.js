import {MantineProvider} from '@mantine/core'
import {useEffect, useState} from 'react'
import {getConfigAsync, style, initWebInfo, GlobalLoading} from '@util'
import {ToastContainer} from 'react-toastify'

function EmptyLayout({children}) {
    return <>{children}</>
}

export default function MyApp({Component, pageProps}) {
    const [config, setConfig] = useState()
    useEffect(() => {
        getConfigAsync().then((rs) => {
            setConfig(rs)
            initWebInfo(rs.favIcon, rs.pageTitle)
        })
    }, [])

    const Layout = Component.Layout || EmptyLayout

    return (
        <>
            {config && (
                <MantineProvider theme={style(config)} withGlobalStyles withNormalizeCSS>
                    <Layout config={config}>
                        <Component {...pageProps} />
                    </Layout>
                </MantineProvider>
            )}
            <ToastContainer position='top-left' autoClose={1000} />
            <GlobalLoading />
        </>
    )
}
