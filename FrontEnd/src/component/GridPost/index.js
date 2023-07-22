import {Box, Button, Divider, Grid, Group, Image, Stack, Text, Title} from '@mantine/core'
import {ExtraInfo} from '@comp'
import {useMediaQuery} from '@mantine/hooks'

import Link from 'next/link'
import {Eye, Heart, ThumbUp} from 'tabler-icons-react'

export function GridPost() {
    const props = {}
    props.posts = [1, 1, 1, 1, 1]

    const smScreen = useMediaQuery('(max-width: 48em)')
    return (
        <>
            <Grid m={0}>
                {props.posts &&
                    props.posts.map((post, index) => {
                        let span = 4
                        if (smScreen) span = 12
                        return (
                            <Grid.Col
                                span={span}
                                p={smScreen ? 'sm' : 'md'}
                                sx={(theme) => ({
                                    borderRadius: '12px',
                                    transition: '0.3s',
                                    '.content': {
                                        position: 'absolute',
                                        top: '100%',
                                        height: '0%',
                                        overflowY: 'hidden',
                                        transition: '0.3s',
                                        background: 'var(--primary-color-0)',
                                    },
                                    ' .hide-on-hover': {
                                        transition: '0.3s',
                                        opacity: 1,
                                    },
                                    '&:hover': {
                                        transform: 'translateY(-2%)',
                                        boxShadow: '0 4px 8px rgba(0, 0, 0,0.4)',
                                        ' .content': {
                                            top: '0',
                                            height: 'calc(130%)',
                                        },
                                        ' .hide-on-hover': {
                                            opacity: 0,
                                        },
                                    },
                                })}>
                                <Link href='/post/tam-cam'>
                                    <Group
                                        grow={!smScreen && span == 12}
                                        spacing={!smScreen && span == 12 && '40px'}
                                        align='flex-start'>
                                        <div
                                            style={{overflow: 'visible', position: 'relative'}}
                                            className='unset-overflow'>
                                            <Image
                                                fit='cover'
                                                src='https://vnkings.com/wp-content/uploads/2021/04/maxresdefault.jpg'
                                                alt=''
                                            />

                                            <Box className='content'>
                                                <Title order={4} lineClamp={2} mb='md'>
                                                    Phân tích nhân vật nhiếp ảnh gia Phùng trong truyện ngắn Chiếc
                                                    thuyền ngoài xa.
                                                </Title>
                                                <Text lineClamp={10}>
                                                    Nhân vật Phùng trong truyện vừa là nhân vật chính đồng thời lại là
                                                    người kể chuyện. Mọi diễn biến của câu chuyện về gia đình người đàn
                                                    bà hàng chài đều xoay quanh các câu chuyện qua lời kể của nhân vật
                                                    Phùng.
                                                </Text>
                                            </Box>
                                        </div>
                                        <Stack>
                                            <Title order={4} lineClamp={3} className='hide-on-hover'>
                                                Phân tích nhân vật nhiếp ảnh gia Phùng trong truyện ngắn Chiếc thuyền
                                                ngoài xa.
                                            </Title>
                                            <ExtraInfo publisherName='Tuấn Hùng' publishedAt='05/09/2001' />
                                            <Text color='dimmed'>
                                                <Group spacing='xl'>
                                                    <Group spacing='xs'>
                                                        <Eye />
                                                        <Text>113.6k</Text>
                                                    </Group>
                                                    <Group spacing='xs'>
                                                        <ThumbUp />
                                                        <Text>11.2k</Text>
                                                    </Group>
                                                </Group>
                                            </Text>
                                        </Stack>
                                    </Group>
                                </Link>
                            </Grid.Col>
                        )
                    })}
            </Grid>
            <Button w='200px' mt='xl' mx='auto' variant='outline'>
                Xem Thêm
            </Button>
        </>
    )
}
