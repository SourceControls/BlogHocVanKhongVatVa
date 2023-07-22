import {useRouter} from 'next/router'
import {Box, Button, Center, Grid, Group, Select, Tabs, TextInput} from '@mantine/core'
import {Section, CommonLiterarySection, FloatingLabelInput} from '@comp'
import {Search} from 'tabler-icons-react'
import {useEffect, useState} from 'react'
import Layout from '../Layout'
import GridLiterary from './GridLiterary'
import GridPostWithFilter from './GridPostWithFilter'
function SearchPage({heading}) {
    const router = useRouter()
    const [key, setKey] = useState(router.query.key)
    const handleRemoveQuery = () => {
        router.push(
            {
                pathname: router.pathname, // Keep the current pathname
                query: {}, // Set an empty object as the query
            },
            undefined,
            {replace: true},
        )
    }
    useEffect(() => {
        handleRemoveQuery()
    }, [])
    useEffect(() => {
        setKey('')
    }, [router.query.category])
    return (
        <Box pt='48px' px='md'>
            {/* <Section title='Tác phẩm tiêu biểu' titlePosition='center'>
                <CommonLiterarySection />
            </Section> */}
            {/* <Image alt='' src={getConfig().categoryCover} my='xl' fit='cover' imageProps={{objectPotition: 'center'}} /> */}

            <Tabs defaultValue='literary' pb='xl'>
                <Tabs.List mb='md'>
                    <Tabs.Tab value='literary'>Tác Phẩm</Tabs.Tab>
                    <Tabs.Tab value='post'>Bài Viết</Tabs.Tab>
                    <Tabs.Tab value='user'>Người Dùng</Tabs.Tab>
                </Tabs.List>
                <Tabs.Panel value='literary'>
                    <GridLiterary />
                </Tabs.Panel>
                <Tabs.Panel value='post'>
                    <GridPostWithFilter />
                </Tabs.Panel>
                <Tabs.Panel value='Quên Mật Khẩu'>
                    <p>Người dùng </p>
                </Tabs.Panel>
            </Tabs>
        </Box>
    )
}
SearchPage.Layout = Layout
export default SearchPage
