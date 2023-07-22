import {Box, Button, Divider, Grid, Group, Image, Stack, Text, Title} from '@mantine/core'
import {ExtraInfo} from '@comp'
import {useMediaQuery} from '@mantine/hooks'

import Link from 'next/link'
import {Eye, Heart, ThumbUp} from 'tabler-icons-react'

export function PostSection() {
    const props = {}
    props.posts = [1, 1, 1, 1, 1, 1, 1, 1, 1]

    const smScreen = useMediaQuery('(max-width: 48em)')
    return (
        <>
            <Grid gutter={0}>
                {props.posts &&
                    props.posts.map((post, index) => {
                        if (index >= 6) return
                        let span = 4
                        if (index == 0) span = 12
                        else if (index == 1 || index == 2) span = 6
                        if (smScreen) span = 12
                        return (
                            <Grid.Col
                                span={span}
                                mb='xl'
                                p={smScreen ? 'sm' : 'xl'}
                                sx={(theme) => ({
                                    backgroundColor: theme.primaryColors[0],
                                    borderRadius: '12px',
                                    transition: '0.3s',
                                    '.content': {
                                        position: 'absolute',
                                        top: '100%',
                                        height: '100%',
                                        transition: '0.3s',
                                        // background: `linear-gradient(${theme.primaryColors[0]}, transparent)`,
                                        background: theme.primaryColors[0],
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
                                        },
                                        ' .hide-on-hover': index != 0 && {
                                            opacity: 0,
                                        },
                                    },
                                })}>
                                <Link href='/read/tam-cam'>
                                    <Group
                                        grow={!smScreen && span == 12}
                                        spacing={!smScreen && span == 12 && '40px'}
                                        align='flex-start'>
                                        <div style={{overflow: 'hidden', position: 'relative'}}>
                                            <Image
                                                fit='cover'
                                                src='https://vnkings.com/wp-content/uploads/2021/04/maxresdefault.jpg'
                                                alt=''
                                            />

                                            {index != 0 && (
                                                <Text lineClamp={5} py='md' className='content'>
                                                    <Title order={4} lineClamp={3} mb='md'>
                                                        Phân tích nhân vật nhiếp ảnh gia Phùng trong truyện ngắn Chiếc
                                                        thuyền ngoài xa.
                                                    </Title>
                                                    Nhân vật Phùng trong truyện vừa là nhân vật chính đồng thời lại là
                                                    người kể chuyện. Mọi diễn biến của câu chuyện về gia đình người đàn
                                                    bà hàng chài đều xoay quanh các câu chuyện qua lời kể của nhân vật
                                                    Phùng.
                                                </Text>
                                            )}
                                        </div>
                                        <Stack>
                                            <Title order={4} lineClamp={3} className={index != 0 && 'hide-on-hover'}>
                                                Phân tích nhân vật nhiếp ảnh gia Phùng trong truyện ngắn Chiếc thuyền
                                                ngoài xa.
                                            </Title>
                                            {index == 0 && !smScreen && (
                                                <Text lineClamp={5}>
                                                    Nhân vật Phùng trong truyện vừa là nhân vật chính đồng thời lại là
                                                    người kể chuyện. Mọi diễn biến của câu chuyện về gia đình người đàn
                                                    bà hàng chài đều xoay quanh các câu chuyện qua lời kể của nhân vật
                                                    Phùng.
                                                </Text>
                                            )}
                                            <ExtraInfo publisherName='Tuấn Hùng' publishedAt='05/09/2001' />
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
