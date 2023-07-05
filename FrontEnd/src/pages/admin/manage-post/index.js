import {Button, Group} from '@mantine/core'
import MainSection from './MainSection'
import Layout from '../Layout'

function ManagePost() {
    return (
        <Group w='100%' position='apart' align='flex-start'>
            <MainSection w='100%' />
        </Group>
    )
}
ManagePost.Layout = Layout
export default ManagePost
