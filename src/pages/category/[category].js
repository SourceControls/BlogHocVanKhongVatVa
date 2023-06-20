import CategorySection from '../component/CategorySection/index'
import Hero from '../component/Hero'
import Layout from '../Layout/index'
import {useRouter} from 'next/router'

function Category() {
    const category = useRouter()
    return (
        <>
            <Hero page='category' category={category.query.category}></Hero>
            <CategorySection name='Tin mới nhất' category={category.query.category} handleLoadData={true} />
        </>
    )
}

Category.Layout = Layout
export default Category
