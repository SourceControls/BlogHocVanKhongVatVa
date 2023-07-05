import CategorySection from '../component/CategorySection'
import {CategoryContext} from '../Layout/index'
import {useContext} from 'react'
function ListCategorySection() {
    const categories = useContext(CategoryContext)
    return (
        <>
            {categories &&
                categories.map((item, index) => <CategorySection key={index} {...item} category={item.subEndPoint} />)}
        </>
    )
}

export default ListCategorySection
