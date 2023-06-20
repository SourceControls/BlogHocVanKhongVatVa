import {Stack, Group} from '@mantine/core'
import NewsBox from './NewsBox'
function NewsGrid(props) {
    return (
        <Stack mx='auto' maw={1440} my='48px'>
            <Group w='100%' h='600px' grow spacing={10}>
                <NewsBox new={props.news[0]} h='100%' size='lg' />
                <Stack h='100%' spacing={10}>
                    <NewsBox new={props.news[1]} h='50%' size='md' />
                    <Group grow h='50%' spacing={10}>
                        <NewsBox new={props.news[2]} h='100%' size='sm' />
                        <NewsBox new={props.news[3]} h='100%' size='sm' />
                    </Group>
                </Stack>
            </Group>
        </Stack>
    )
}

export default NewsGrid
