import {Flex, MantineProvider, Stack, Paper, Title, LoadingOverlay} from '@mantine/core'
import Postcontent from './PostContent'
import PublisherPosts from './PublisherPosts'
import PostHeader from './PostHeader'
import Layout from '../Layout/index'
import postSchema from '@/models/post'
import db from '../api/db'
import {useRouter} from 'next/router'
function Read({post, postByPublisher}) {
    const router = useRouter()

    // chưa có data thì hiển thị loading
    if (router.isFallback) {
        return <LoadingOverlay visible={true} overlayBlur={2} />
    }
    if (post) post = JSON.parse(post)
    return (
        <>
            {post && (
                <Flex mx='auto' w='1200px'>
                    <Paper shadow='xl' p='xl' withBorder>
                        <Stack w={800}>
                            <PostHeader {...post}></PostHeader>
                            <Postcontent {...post}></Postcontent>
                        </Stack>
                    </Paper>
                    <PublisherPosts {...post}></PublisherPosts>
                </Flex>
            )}
        </>
    )
}
Read.Layout = Layout

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps({params}) {
    try {
        let post = (
            await new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve(getNews({id: params.postId}))
                }, 10000)
            })
        )[0]
        post = JSON.stringify(post)
        return {
            props: {
                post,
            },
            // Next.js will attempt to re-generate the page:
            // - When a request comes in
            // - At most once every 60 min
            revalidate: 10,
        }
    } catch (error) {
        console.log(error.message)
    }
}

async function getNews({id = '', limit = 1, sortByView = 1}) {
    console.log('getNews: ', id)
    try {
        const query = [
            {
                $sort: {createdAt: -1},
            },
            {
                $limit: limit,
            },
            {
                $lookup: {
                    from: 'user',
                    localField: 'publisher',
                    foreignField: '_id',
                    as: 'publisher',
                },
            },
            {
                $lookup: {
                    from: 'post_category',
                    localField: '_id',
                    foreignField: 'postId',
                    as: 'categories',
                },
            },
        ]
        if (id) {
            query.unshift({$match: {$expr: {$eq: ['$_id', {$toObjectId: id}]}}})
        }

        // chuyển đổi thời gian
        let rs = await postSchema.aggregate(query)

        if (sortByView) {
            // sort theo ngày, nếu cùng ngày thì sort theo view
            rs.sort(function (a, b) {
                const timeA = new Date(new Date(a.createdAt).toLocaleDateString()).getTime()
                const timeB = new Date(new Date(b.createdAt).toLocaleDateString()).getTime()

                if (timeA > timeB) return -1
                else if (timeA < timeB) {
                    return 1
                } else {
                    return b.view - a.view
                }
            })
        }
        rs = rs.map((item) => ({
            ...item,
            url: '/read/' + item._id,
            publishedAt: new Date(item.createdAt).toLocaleDateString('vi-VN').toString(),
        }))
        return rs
    } catch (error) {
        console.log(error)
    }
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getStaticPaths() {
    const posts = await getNews({})
    // Get the paths we want to pre-render based on posts

    const paths = posts.map((post) => ({
        params: {postId: post._id.toString()},
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: 'blocking' } will server-render pages
    // on-demand if the path doesn't exist.
    return {paths, fallback: true}
}

export default Read
