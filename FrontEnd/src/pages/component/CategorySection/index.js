import {Container, Flex} from '@mantine/core'
import TopNews from './TopNews'
import ListNews from './ListNews'
import CategoryDivider from '../CategoryDivider'

function CategorySection(props) {
    return (
        <Container maw={1200} pb='xl'>
            <CategoryDivider {...props} />
            <Flex mx='auto' wrap='wrap' gap='xs'>
                <ListNews {...props} />
                <TopNews {...props} />
            </Flex>
        </Container>
    )
}

export default CategorySection
