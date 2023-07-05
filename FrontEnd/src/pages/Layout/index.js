import Header from './Header'
import Nav from './Nav'
import {MantineProvider} from '@mantine/core'
import React, {createContext, useState, useEffect} from 'react'
import {getCategories, style} from '@util'

// Khởi tạo Context
export const CategoryContext = createContext()

function Layout({children, category: currentCategory}) {
    const [categories, setCategories] = useState()
    useEffect(() => {
        getCategories().then((rs) => {
            setCategories(rs.data)
        })
    }, [])
    return (
        <>
            {categories && (
                <CategoryContext.Provider value={categories}>
                    {/* <Header /> */}
                    <Nav category={currentCategory} />
                    {children}
                </CategoryContext.Provider>
            )}
        </>
    )
}

export default Layout
