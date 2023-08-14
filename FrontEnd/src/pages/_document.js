import {Html, Head, Main, NextScript} from 'next/document'
import {useSettings} from '@util'

export default function Document() {
    const {settings, isLoading} = useSettings()

    return (
        <Html lang='en'>
            <Head>
                {/* <script
                    async
                    src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7471167628515438'
                    crossOrigin='anonymous'></script> */}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
