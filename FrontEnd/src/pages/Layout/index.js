import Header from './Header'
import {Box} from '@mantine/core'
import {useState} from 'react'
import Footer from './Footer'
import CustomAffix from './CustomAffix'
import {Decorate} from '@comp'
function Layout({children}) {
    const [active, setActive] = useState()

    return (
        <Box className='init-bg'>
            <Header active={active} setActive={setActive} />
            <Box className='limit-w ' mx='auto'>
                {children}
                {/* <Decorate align='left' /> */}
            </Box>
            <Footer></Footer>
            <CustomAffix />
        </Box>
    )
}

export default Layout
