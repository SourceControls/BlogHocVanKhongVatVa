import {Section, GridPost, AnimatedDivider} from '@comp'
import {Stack} from 'react-bootstrap'
import Layout from '../Layout'
import FeaturedPosts from './FeaturedPosts'
import Hero from './Hero'
import FeaturedLiterary from './FeaturedLiterary'
function Home() {
    return (
        <Stack>
            <Hero></Hero>
            <AnimatedDivider />
            <Section title='Tác Phẩm Tiêu Biểu' titlePosition='center'>
                <FeaturedLiterary />
            </Section>

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
