import './globalStyle.css'
import {MantineProvider} from '@mantine/core'
import {useEffect} from 'react'
import {style} from '@util'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {useSettings} from '@util'

function EmptyLayout({children}) {
    return <>{children}</>
}

export default function MyApp({Component, pageProps}) {
    const {settings, isLoading} = useSettings()
    const Layout = Component.Layout || EmptyLayout
    if (!settings[1]) return <></>
    return (
        <>
            {
                <MantineProvider theme={style(settings)} withGlobalStyles withNormalizeCSS withCSSVariables>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </MantineProvider>
            }
            <ToastContainer position='top-left' autoClose={3000} limit={3} />
            {/* <GlobalLoading /> */}
        </>
    )
}
