import {useRouter} from 'next/router'
import {Box, Tabs} from '@mantine/core'
import {Adverting} from '@comp'
import Layout from '../Layout'
import GridLiterary from './GridLiterary'
import GridPostWithFilter from './GridPostWithFilter'
import {toast} from 'react-toastify'
function SearchPage({heading}) {
    const router = useRouter()
    const handleQuery = (type) => {
        router.push({
            pathname: router.pathname.replace('/client', ''),
            query: {
                type,
                key: router.query?.key,
                tag: router.query?.tag,
            },
        })
    }
    if (!router.query.type) handleQuery('literary')
    return (
        <>
            <Adverting position='SEARCH' mt='xl' />
            <Box pt='48px' px='md'>
                <Tabs value={router.query?.type} pb='xl'>
                    <Tabs.List mb='md'>
                        <Tabs.Tab value='literary' onClick={() => handleQuery('literary')}>
                            Tác phẩm
                        </Tabs.Tab>
                        <Tabs.Tab value='post' onClick={() => handleQuery('post')}>
                            Bài Viết
                        </Tabs.Tab>
                        <Tabs.Tab
                            value='user'
                            onClick={async () => {
                                toast.info('Coming soon')
                            }}>
                            Người Dùng
                        </Tabs.Tab>
                    </Tabs.List>
                    <Tabs.Panel value='literary'>{router.query.type == 'literary' && <GridLiterary />}</Tabs.Panel>
                    <Tabs.Panel value='post'>{router.query.type == 'post' && <GridPostWithFilter />}</Tabs.Panel>
                </Tabs>
            </Box>
        </>
    )
}
SearchPage.Layout = Layout
export default SearchPage
