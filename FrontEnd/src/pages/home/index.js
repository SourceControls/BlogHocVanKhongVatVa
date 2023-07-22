import {Stack} from '@mantine/core'
import Layout from '../Layout'
import {Decorate} from '@comp'
import {Section, GridPost, CommonLiterarySection} from '@comp'
import Hero from './Hero'
import FeaturedPosts from './FeaturedPosts'
function Home() {
    return (
        <Stack pt='xl'>
            <Hero></Hero>
            <Decorate />
            <Section title='Tác Phẩm Tiêu Biểu' titlePosition='center'>
                <CommonLiterarySection />
            </Section>
            {/* <Adverting /> */}

            <Section title='Bài Viết Nổi Bật'>
                <FeaturedPosts />
            </Section>
            <Section title='Bài Viết Mới Nhất'>
                <GridPost />
            </Section>
        </Stack>
    )
}
Home.Layout = Layout
export default Home
