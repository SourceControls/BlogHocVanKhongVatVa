import {useState} from 'react'
import {AnimatedDivider} from '@comp'
import Footer from './Footer'
import Header from './Header'
import CustomAffix from './CustomAffix'
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
            <CustomAffix />
        </>
    )
}

export default Layout
