import {Grid, Group, Image, Stack} from '@mantine/core'
import Postcontent from './PostContent'
import PostAction from './PostAction'
import Layout from '../Layout'
import {GridPost, Section} from '@comp'
import {useMediaQuery} from '@mantine/hooks'
import PostHeader from './PostHeader'
import CommentSection from './CommentSection'
import {usePosts} from '@util'
import {useRouter} from 'next/router'
import {useEffect} from 'react'
function Post() {
    const smScreen = useMediaQuery('(max-width: 48em)')
    const router = useRouter()
    const {posts, isLoading} = usePosts('', `/${router.isReady && router.query.slug}`)

    if (!posts[0]) return <></>
    return (
        <Stack>
            <Image height={400} fit='cover' src='https://i.ibb.co/9rHFrZq/Untitled.png' alt='' my='xl' />
            <Grid mx='auto'>
                <Grid.Col span={smScreen ? 12 : 3} order={smScreen ? 2 : 1}>
                    <PostAction post={posts[0]} direction={smScreen && 'row'} />
                </Grid.Col>
                <Grid.Col span={smScreen ? 12 : 6} order={smScreen ? 1 : 2}>
                    <PostHeader post={posts[0]} />
                    <Postcontent post={posts[0]} />
                </Grid.Col>
                <Grid.Col span={smScreen ? 12 : 6} order={3} offset={smScreen ? 0 : 3}>
                    <Section title='Bình Luận'>
                        <CommentSection />
                    </Section>
                </Grid.Col>
            </Grid>
            <Section title='Bài Viết Liên Quan'>
                <GridPost />
            </Section>
        </Stack>
    )
}
Post.Layout = Layout
export default Post
