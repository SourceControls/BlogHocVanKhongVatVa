import Header from './Header'
import Nav from './Nav'
import {Box, Divider, Paper} from '@mantine/core'
import {useEffect, useState} from 'react'
import {getCategories} from '@util'
import Footer from './Footer'
import CustomAffix from './CustomAffix'
import {Decorate} from '@comp'
function Layout({children}) {
    const [categories, setCategories] = useState()
    const [active, setActive] = useState()

    useEffect(() => {
        getCategories().then((rs) => {
            setCategories(rs.data)
        })
    }, [])
    return (
        <Box className='init-bg'>
            <Paper
                sx={(theme) => ({
                    backgroundColor: 'var(--primary-color-0)',
                    position: 'sticky',
                    zIndex: 11,
                    top: 0,
                })}
                shadow='sm'>
                <Header categories={categories} active={active} setActive={setActive} />
            </Paper>
            <Box className='limit-w ' mx='auto'>
                {children}
                <Decorate align='left' />
            </Box>
            <Footer></Footer>
            <CustomAffix />
        </Box>
    )
}

export default Layout
