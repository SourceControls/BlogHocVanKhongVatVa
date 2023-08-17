import Layout from '../Layout'
import {useRouter} from 'next/router'
import {AspectRatio, Box, Group, Spoiler, Stack, Text, Title} from '@mantine/core'
import {Section, GridPost, Decorate, Adverting} from '@comp'
import {Eye, EyeOff, News} from 'tabler-icons-react'
import {useMediaQuery} from '@mantine/hooks'
import {useLiteries, countLiterayView} from '@util'
import ViewCountTracker from './ViewCountTracker'
import {useState} from 'react'
import Head from 'next/head'
function Category() {
    const router = useRouter()
    const smScreen = useMediaQuery('(max-width: 48em)')
    const [viewed, setViewed] = useState(false)
    const {literaries, isLoading, mutate} = useLiteries('', `/${router.query.slug}`)
    const handleCountView = () => {
        setViewed(true)
        countLiterayView(literaries[0].slug).then((rs) => {
            if (rs?.literaryId) {
                mutate([rs], false)
            }
        })
    }
    if (!literaries[0]?.literaryId) {
        return <p>Loading...</p>
    }
    return (
        <Box px='xs'>
            <Head>
                <title>Tác phẩm {literaries[0].title + ' - ' + literaries[0].authorName} </title>
            </Head>
            <Stack
                maw='800px'
                mx='auto'
                sx={(theme) => ({
                    backgroundColor: 'transparent',
                    paddingTop: smScreen ? '12px' : '64px',
                    borderRadius: '12px',
                })}>
                <Adverting position='LITERARY' mb='xl' />

                <Group noWrap={!smScreen} align='flex-start' spacing='xl'>
                    <AspectRatio ratio={3 / 4} w={smScreen ? '50%' : '40%'}>
                        <img
                            src={literaries[0].image}
                            alt=''
                            style={{borderRadius: '24px'}}
                            width='100%'
                            height='100%'
                        />
                    </AspectRatio>

                    <Stack w={smScreen ? '100%' : '80%'} h='100%' spacing='md'>
                        <Title order={2}>{literaries[0].title}</Title>
                        <Group spacing='md'>
                            <Text size='xl' fw='bold'>
                                Tác giả:
                            </Text>
                            <Text>{literaries[0].authorName}</Text>
                        </Group>
                        <Text>
                            <Text size='xl' fw='bold' mr='md' display='inline-block'>
                                Thời điểm sáng tác:
                            </Text>
                            {literaries[0].timeOfCreation}
                        </Text>
                        <Group spacing='md'>
                            <Text size='xl' fw='bold'>
                                Thể loại:
                            </Text>
                            <Text>{literaries[0].literaryCategory[0]?.category.categoryName}</Text>
                        </Group>
                        <Group spacing='xl'>
                            <Group spacing='xs'>
                                <Eye />
                                <Text>{literaries[0].view}</Text>
                            </Group>

                            <Group spacing='xs'>
                                <News />
                                <Text>{literaries[0].postCount} bài viết</Text>
                            </Group>
                        </Group>
                    </Stack>
                </Group>
                <Text size='xl' fw='bold'>
                    Giới thiệu
                </Text>
                <Text pb='md' className='format-content'>
                    {literaries[0].intro}
                </Text>
                <Text size='xl' fw='bold'>
                    Tóm tắt
                </Text>
                <Spoiler
                    maxHeight={smScreen ? 200 : 310}
                    showLabel={
                        <Group align='center' spacing='6px' c>
                            <label>...Xem Thêm</label>
                            <Eye />
                        </Group>
                    }
                    hideLabel={
                        <Group align='center' spacing='6px' c>
                            <label> - Ẩn Bớt</label>
                            <EyeOff />
                        </Group>
                    }>
                    <Text className='format-content'>{literaries[0].summary}</Text>
                </Spoiler>
            </Stack>

            <Decorate />
            {!viewed && <ViewCountTracker literaryId={literaries[0]?.literaryId} onComponentInView={handleCountView} />}

            <Section title={'Bài Viết Về: ' + literaries[0].title}>
                <GridPost query={'&status=published&literarySlug=' + router.query.slug} />
            </Section>
        </Box>
    )
}

Category.Layout = Layout
export default Category
