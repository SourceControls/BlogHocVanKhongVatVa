import Layout from '../../../src/pages/Layout'
import {useRouter} from 'next/router'
import Literaries from '../../../src/pages/literary/Literaries'

function Category() {
    const category = useRouter()
    console.log(category)
    return <Literaries heading={'Danh Mục: ' + category.query.category} />
}

Category.Layout = Layout
export default Category
