import {Flex, Button} from '@mantine/core'
import {useState, useEffect} from 'react'
import {getNews} from '@util'
import NewsRow from './../NewsRow'
function ListNews(props) {
    const [news, setNews] = useState()
    const [page, setPage] = useState(1)
    const limit = props.handleLoadData ? 2 : 4

    useEffect(() => {
        getNews({category: props.category, limit}).then((rs) => {
            setNews(rs.data)
            setPage(1)
        })
    }, [props.category])

    const handleLoadData = () => {
        setPage(page + 1)
        getNews({category: props.category, page: page + 1, limit}).then((rs) => {
            if (rs.data.length == 0) {
                return alert('Hết posts')
            }
            setNews([...news, ...rs.data])
        })
    }
    return (
        <Flex direction='column' mx='auto' w='60%'>
            {news &&
                news.map((item, index) => {
                    return <NewsRow index={index} {...item} key={index}></NewsRow>
                })}
            {props.handleLoadData && <Button onClick={handleLoadData}> Xem thêm</Button>}
        </Flex>
    )
}

export default ListNews
