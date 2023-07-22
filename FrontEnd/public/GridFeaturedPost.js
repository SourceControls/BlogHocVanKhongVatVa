import {useMantineTheme, rem, Group, Box, BackgroundImage} from '@mantine/core'
import {Stack, Text, Title} from '@mantine/core'
import Link from 'next/link'
import {Eye, ThumbUp} from 'tabler-icons-react'
import {useMediaQuery} from '@mantine/hooks'
import {ExtraInfo} from '@comp'

function PostContainer(props) {
    let config = listConfig[props.index]
    return (
        <Box {...props} style={{borderRadius: '12px', overflow: 'hidden'}}>
            <BackgroundImage src='https://vnkings.com/wp-content/uploads/2021/04/maxresdefault.jpg' h='100%'>
                <Stack align='flex-end' justify='flex-end' h='100%'>
                    <Stack
                        p='xs'
                        h={config.textBoxHeight}
                        w='100%'
                        mah='100%'
                        spacing='0'
                        sx={{
                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                            ' .show-on-hover': {
                                transition: '0.3s',
                                height: 0,
                            },
                            ' .text': {
                                transition: '0.3s',
                                opacity: 0,
                            },
                            '&:hover': {
                                ' .show-on-hover': {
                                    height: '100px',
                                    ' .text': {
                                        opacity: 1,
                                    },
                                },
                            },
                        }}>
                        <Link href='' style={{color: 'white'}}>
                            <Title order={config.order} lineClamp={config.titleClamp} mb='xs'>
                                Phân tích nhân vật nhiếp ảnh gia Phùng trong truyện ngắn Chiếc thuyền ngoài xa.
                            </Title>
                        </Link>
                        <Box className='show-on-hover'>
                            <Text lineClamp={config.contentClamp} color='white' className='text'>
                                Nhân vật Phùng trong truyện vừa là nhân vật chính đồng thời lại là người kể chuyện. Mọi
                                diễn biến của câu chuyện về gia đình người đàn bà hàng chài đều xoay quanh các câu
                                chuyện qua lời kể của nhân vật Phùng.
                            </Text>
                        </Box>
                        <ExtraInfo publisherName='Tuấn Hùng' publishedAt='05/09/2001' color='white' />

                        <Group spacing='xl' mt='xs'>
                            <Group spacing='xs'>
                                <Eye color='white' />
                                <Text color='white'>113.6k</Text>
                            </Group>
                            <Group spacing='xs'>
                                <ThumbUp color='white' />
                                <Text color='white'>11.2k</Text>
                            </Group>
                        </Group>
                    </Stack>
                </Stack>
            </BackgroundImage>
        </Box>
    )
}

export default function FeaturedPosts() {
    const theme = useMantineTheme()
    const smScreen = useMediaQuery('(max-width: 48em)')

    return (
        <Stack my='48px'>
            <Group w='100%' h='600px' grow={!smScreen} spacing={10}>
                <PostContainer h='100%' size='lg' index={0} />
                <Stack h='100%' spacing={10}>
                    <PostContainer h='50%' size='md' index={1} />
                    <Group grow h='50%' spacing={10}>
                        <PostContainer h='100%' size='sm' index={2} />
                        <PostContainer h='100%' size='sm' index={2} />
                    </Group>
                </Stack>
            </Group>
        </Stack>
    )
}
