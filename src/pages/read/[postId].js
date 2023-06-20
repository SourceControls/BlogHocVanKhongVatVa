import {useEffect, useState} from 'react'
import {Flex, MantineProvider, Stack, Paper} from '@mantine/core'
import Postcontent from './PostContent'
import PublisherPosts from './PublisherPosts'
import PostHeader from './PostHeader'
import {getNews} from '@util'
import {useRouter} from 'next/router'
import Layout from '../Layout/index'

function Read() {
    const router = useRouter()
    const [news, setNews] = useState()
    useEffect(() => {
        if (!router.isReady) return
        getNews({id: router.query.postId, limit: 1}).then((rs) => {
            setNews(rs.data[0])
        })
    }, [router.isReady, router.query.postId])
    return (
        <>
            {news && (
                <Flex mx='auto' w='1200px'>
                    <Paper shadow='xl' p='xl' withBorder>
                        <Stack w={800}>
                            <PostHeader {...news}></PostHeader>
                            <Postcontent {...news}></Postcontent>
                        </Stack>
                    </Paper>
                    <PublisherPosts {...news}></PublisherPosts>
                </Flex>
            )}
        </>
    )
}
Read.Layout = Layout
export default Read
