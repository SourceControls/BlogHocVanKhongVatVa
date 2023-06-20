import Layout from '../Layout/index'
import Hero from './../component/Hero/index'
import ListCategorySection from './ListCategorySection'
function Home() {
    return (
        <>
            <Hero page='home'></Hero>
            <ListCategorySection />
        </>
    )
}
Home.Layout = Layout
export default Home
