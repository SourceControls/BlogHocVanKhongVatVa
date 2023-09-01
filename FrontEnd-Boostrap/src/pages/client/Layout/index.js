import Header from './Header'
import {Box} from '@mantine/core'
import {useState} from 'react'
import Footer from './Footer'
import CustomAffix from './CustomAffix'
import {Decorate, Style} from '@comp'
function Layout({children}) {
    const [active, setActive] = useState()

    return (
        <>
            <Style></Style>
            <div className='init-bg'>
                <Header active={active} setActive={setActive} />
                <main className='container'>
                    {children}
                    <Decorate />
                </main>
                <Footer></Footer>
                <CustomAffix />
            </div>
        </>
    )
}

export default Layout
