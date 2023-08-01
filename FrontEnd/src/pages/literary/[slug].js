import Layout from '../Layout'
import {useRouter} from 'next/router'
import {Box, Group, Image, Select, Skeleton, Spoiler, Stack, Text, TextInput, Title} from '@mantine/core'
import {Section, GridPost, Decorate} from '@comp'
import {Eye, News, Search, ThumbUp} from 'tabler-icons-react'
import {useMediaQuery} from '@mantine/hooks'
import {useLiteries} from '@util'
function Category() {
    const router = useRouter()
    const smScreen = useMediaQuery('(max-width: 48em)')
    const {literaries, isLoading} = useLiteries('', `/${router.query.slug}`)
    if (isLoading) return <Skeleton height='400'></Skeleton>
    return (
        <Box px='xs'>
            <Group>
                <Box
                    sx={(theme) => ({
                        backgroundColor: 'transparent',
                        paddingTop: smScreen ? '12px' : '64px',
                        transition: '0.3s',
                        ' .shadow': {
                            boxShadow: '8px 16px 16px rgba(0,0,0,0.6)',
                            transition: '0.3s',
                        },
                        ' .bookContainer': {
                            transition: '0.3s',
                        },
                        'bookContainer:hover .': {
                            transform: 'translate(-1%,-3%)',
                            ' .shadow': {
                                top: 0,
                            },
                        },
                        borderRadius: '12px',
                    })}>
                    <Group noWrap={!smScreen} align='flex-start' spacing='xl'>
                        <Box
                            style={{display: 'block', position: 'relative'}}
                            className='bookContainer'
                            w={smScreen ? '50%' : '20%'}>
                            <Box className='shadow' ml='4px' w='97%' h='97%' pos='absolute'></Box>
                            <Image src={literaries[0].image} alt='' radius='12px' />
                        </Box>

                        <Stack w={smScreen ? '100%' : '80%'} h='100%' spacing='6px'>
                            <Title order={2}>{literaries[0].title}</Title>
                            <Group spacing={0}>
                                <Text size='xl' fw='bold' mb='0'>
                                    Giới thiệu
                                </Text>
                                <Spoiler pb='md' maxHeight={75} showLabel='...Xem Thêm' hideLabel='Ẩn Bớt'>
                                    {literaries[0].intro}
                                </Spoiler>
                            </Group>
                            <Group spacing='md'>
                                <Text size='xl' fw='bold' mb='0'>
                                    Tác giả:
                                </Text>
                                <Text>{literaries[0].authorName}</Text>
                            </Group>
                            <Group spacing='md'>
                                <Text size='xl' fw='bold' mb='0'>
                                    Thời điểm sáng tác:
                                </Text>
                                <Text>{literaries[0].timeOfCreation}</Text>
                            </Group>
                            <Group spacing='md'>
                                <Text size='xl' fw='bold' mb='0'>
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
                    <Text size='xl' fw='bold' mb='0' mt='xl'>
                        Tóm tắt
                    </Text>
                    <Spoiler maxHeight={smScreen ? 120 : 450} showLabel='...Xem Thêm' hideLabel='Ẩn Bớt'>
                        <Text align='justify' mt='md'>
                            {literaries[0].summary}
                        </Text>
                    </Spoiler>
                </Box>
            </Group>
            <Decorate />
            <Section title={'Bài Viết Về: ' + literaries[0].title}>
                <GridPost query={'&status=published&literarySlug=' + router.query.slug} />
            </Section>
        </Box>
    )
}

Category.Layout = Layout
export default Category
