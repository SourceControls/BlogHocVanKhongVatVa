import {LoadingOverlay, Stack} from '@mantine/core'
import {Section, GridPost, FeaturedLiterary, Decorate} from '@comp'
import {usePosts} from '@util'
import Layout from '../Layout'
import FeaturedPosts from './FeaturedPosts'
import Hero from './Hero'
function Home() {
    return (
        <Stack pt='xl'>
            <Hero></Hero>
            {/* <Decorate /> */}
            <Section title='Tác Phẩm Tiêu Biểu' titlePosition='center'>
                <FeaturedLiterary />
            </Section>
            {/* <Adverting /> */}

            <Section title='Bài Viết Nổi Bật'>
                <FeaturedPosts />
            </Section>
            <Section title='Bài Viết Mới Nhất'>
                <GridPost query='&featured=false&status=published' />
            </Section>
        </Stack>
    )
}
Home.Layout = Layout
export default Home
