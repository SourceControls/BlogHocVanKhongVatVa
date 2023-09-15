import {useState} from 'react'
import {AnimatedDivider} from '@comp'
import Footer from './Footer'
import Header from './Header'
function Layout({children}) {
    const [active, setActive] = useState()

    return (
        <>
            <Header active={active} setActive={setActive} />
            <main className='container'>
                {children}
                <AnimatedDivider />
            </main>
            <Footer></Footer>
        </>
    )
}

export default Layout
