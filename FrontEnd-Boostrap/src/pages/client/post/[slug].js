import Postcontent from './PostContent'
import PostAction from './PostAction'
import Layout from '../Layout'
import {GridPost, Section, Adverting} from '@comp'
import PostHeader from './PostHeader'
import CommentSection from './CommentSection'
import {usePosts, countPostView, getPostsSSR, useSettings} from '@util'
import {useRouter} from 'next/router'
import ViewCountTracker from './ViewCountTracker'
import {useState} from 'react'
import Head from 'next/head'
import {Container, Col, Row, Stack} from 'react-bootstrap'
function Post({post}) {
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
            <Head>
                <title>{post.title}</title>
            </Head>
            <Adverting position='READ' my='md' />
            {/* <Box pos='relative'>
                <AspectRatio ratio={5 / 2} maw={800} w='100%' mx='auto'>
                    <img style={{objectFit: 'contain'}} src={settings[1]?.readPostCover || post.featuredImage} alt='' />
                </AspectRatio>
            </Box> */}
            <Container className='my-5'>
                <Row className='gy-3 mb-4'>
                    <Col xs={2} className='d-none d-md-block'>
                        {relevantPost[0]?.postId && <PostAction post={relevantPost[0]} mutate={mutate} />}
                    </Col>
                    <Col xs={12} md={8}>
                        <PostHeader post={post} />
                        <Postcontent post={post} />
                        {!viewed && (
                            <ViewCountTracker postId={relevantPost[0]?.postId} onComponentInView={handleCountView} />
                        )}
                    </Col>
                    <Col xs={12} md={2} className='d-block d-md-none'>
                        {relevantPost[0]?.postId && (
                            <PostAction post={relevantPost[0]} direction='row' mutate={mutate} />
                        )}
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col md={8}>
                        <Section title='Bình Luận'>
                            <CommentSection />
                        </Section>
                    </Col>
                </Row>
            </Container>
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
