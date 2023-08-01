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
    const handleQuery = (type) => {
        router.push({
            query: {
                type,
                key: router.query?.key,
                tag: router.query?.tag,
            },
        })
    }
    if (!router.query.type) handleQuery('literary')
    return (
        <Box pt='48px' px='md'>
            {/* <Section title='Tác phẩm tiêu biểu' titlePosition='center'>
                <CommonLiterarySection />
            </Section> */}
            {/* <Image alt='' src={getConfig().categoryCover} my='xl' fit='cover' imageProps={{objectPotition: 'center'}} /> */}

            <Tabs value={router.query?.type} pb='xl'>
                <Tabs.List mb='md'>
                    <Tabs.Tab value='literary' onClick={() => handleQuery('literary')}>
                        Tác phẩm
                    </Tabs.Tab>
                    <Tabs.Tab value='post' onClick={() => handleQuery('post')}>
                        Bài Viết
                    </Tabs.Tab>
                    <Tabs.Tab value='user' onClick={() => handleQuery('user')}>
                        Người Dùng
                    </Tabs.Tab>
                </Tabs.List>
                <Tabs.Panel value='literary'>{router.query.type == 'literary' && <GridLiterary />}</Tabs.Panel>
                <Tabs.Panel value='post'>{router.query.type == 'post' && <GridPostWithFilter />}</Tabs.Panel>
            </Tabs>
        </Box>
    )
}
SearchPage.Layout = Layout
export default SearchPage
