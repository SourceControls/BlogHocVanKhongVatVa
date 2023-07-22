import './globalStyle.css'
import {MantineProvider} from '@mantine/core'
import {useEffect, useState} from 'react'
import {getConfigAsync, style, initWebInfo} from '@util'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function EmptyLayout({children}) {
    return <>{children}</>
}

export default function MyApp({Component, pageProps}) {
    const [config, setConfig] = useState()
    useEffect(() => {
        getConfigAsync().then((rs) => {
            setConfig(rs)
            initWebInfo(rs.favIcon, rs.webTitle)
        })
    }, [])

    const Layout = Component.Layout || EmptyLayout

    return (
        <>
            {config && (
                <MantineProvider theme={style()} withGlobalStyles withNormalizeCSS withCSSVariables>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </MantineProvider>
            )}
            <ToastContainer position='top-left' autoClose={1000} />
            {/* <GlobalLoading /> */}
        </>
    )
}
