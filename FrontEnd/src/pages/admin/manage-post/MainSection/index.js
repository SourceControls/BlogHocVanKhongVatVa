import {Grid, Stack} from '@mantine/core'
import Header from './Header'
import PostTable from './PostTable'
import {useState, useEffect} from 'react'
import {getNews} from '@util'
function MainSection(prop) {
    const [listPost, setListPost] = useState()
    const [currentPage, setCurrentPage] = useState(1)
    const [searchKey, setSearchKey] = useState()
    const [currentCategory, setCurrentCategory] = useState()
    const [displayType, setDispayType] = useState()
    useEffect(() => {
        getNews({
            limit: 3,
            displayType: displayType,
            page: currentPage,
            category: currentCategory,
            key: searchKey,
        }).then((rs) => {
            setListPost(rs.data)
        })
    }, [currentPage, searchKey, currentCategory])

    return (
        <>
            {listPost && (
                <Stack w={prop.w}>
                    <Header
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        searchKey={searchKey}
                        setSearchKey={setSearchKey}
                        currentCategory={currentCategory}
                        setCurrentCategory={setCurrentCategory}
                        displayType={displayType}
                        setDispayType={setDispayType}></Header>
                    <PostTable listPost={listPost}></PostTable>
                </Stack>
            )}
        </>
    )
}
export default MainSection
