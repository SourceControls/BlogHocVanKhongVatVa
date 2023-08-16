import {AspectRatio, Box, Grid, Group, Image, Stack} from '@mantine/core'
import Postcontent from './PostContent'
import PostAction from './PostAction'
import Layout from '../Layout'
import {GridPost, Section, Adverting} from '@comp'
import {useMediaQuery} from '@mantine/hooks'
import PostHeader from './PostHeader'
import CommentSection from './CommentSection'
import {usePosts, countPostView, getPostsSSR, useSettings} from '@util'
import {useRouter} from 'next/router'
import ViewCountTracker from './ViewCountTracker'
import {useState} from 'react'
function Post({post}) {
    const smScreen = useMediaQuery('(max-width: 48em)')
    const [viewed, setViewed] = useState(false)
    const router = useRouter()
    const {settings} = useSettings()
    const {posts: relevantPost, isLoading, mutate} = usePosts('', `/${router.isReady && router.query.slug}`)
    const handleCountView = () => {
        setViewed(true)
        countPostView(post.slug).then((rs) => {
            if (rs?.postId) {
                mutate([rs], false)
            }
        })
    }
    if (!post?.postId) return <></>
    return (
        <Stack>
            <Adverting position='READ' my='md' />
            <Box pos='relative'>
                <AspectRatio ratio={5 / 2} maw={800} w='100%' mx='auto'>
                    <img style={{objectFit: 'contain'}} src={settings[1]?.readPostCover || post.featuredImage} alt='' />
                </AspectRatio>
            </Box>
            <Grid mx='auto'>
                <Grid.Col span={smScreen ? 12 : 3} order={smScreen ? 2 : 1}>
                    {relevantPost[0]?.postId && (
                        <PostAction post={relevantPost[0]} direction={smScreen && 'row'} mutate={mutate} />
                    )}
                </Grid.Col>
                <Grid.Col span={smScreen ? 12 : 6} order={smScreen ? 1 : 2}>
                    <PostHeader post={post} />
                    <Postcontent post={post} />
                    {!viewed && (
                        <ViewCountTracker postId={relevantPost[0]?.postId} onComponentInView={handleCountView} />
                    )}
                </Grid.Col>
                <Grid.Col span={smScreen ? 12 : 6} order={3} offset={smScreen ? 0 : 3}>
                    <Section title='Bình Luận'>
                        <CommentSection />
                    </Section>
                </Grid.Col>
            </Grid>
            <Section title='Bài Viết Liên Quan'>
                {relevantPost[0]?.postId && (
                    <GridPost query={'&' + relevantPost[0].title} excludePostId={relevantPost[0]?.postId} />
                )}
            </Section>
        </Stack>
    )
}
Post.Layout = Layout

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps({params}) {
    const post = await getPostsSSR('/' + params.slug)
    return {
        props: {
            post,
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 1h
        revalidate: 60 * 60, // In seconds
    }
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getStaticPaths() {
    const posts = await getPostsSSR('?page=1&sortBy=view&limit=2')
    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
        params: {slug: post.slug},
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: 'blocking' } will server-render pages
    // on-demand if the path doesn't exist.
    return {paths, fallback: 'blocking'}
}
export default Post
