import {Box, Button, Divider, Grid, Group, Image, Stack, Text, Title} from '@mantine/core'
import {ExtraInfo} from '@comp'
import {useMediaQuery} from '@mantine/hooks'

import Link from 'next/link'
import {Eye, Heart, ThumbUp} from 'tabler-icons-react'

export default function FeaturedPosts() {
    const props = {}
    props.posts = [1, 1, 1]
    const smScreen = useMediaQuery('(max-width: 48em)')
    return (
        <>
            <Grid gutter={0}>
                {props.posts &&
                    props.posts.map((post, index) => {
                        return (
                            <>
                                <Grid.Col
                                    p={smScreen ? 'sm' : 'xl'}
                                    sx={(theme) => ({
                                        backgroundColor: 'var(--primary-color-0)',
                                        borderRadius: '12px',
                                        transition: '0.3s',

                                        '&:hover': {
                                            transform: 'translateY(-2%)',
                                            boxShadow: '0 4px 8px rgba(0, 0, 0,0.4)',
                                            ' .content': {
                                                top: '0',
                                            },
                                        },
                                    })}>
                                    <Link href='/post/tam-cam'>
                                        <Group
                                            grow={!smScreen}
                                            spacing={!smScreen && '40px'}
                                            align='flex-start'
                                            style={{
                                                flexFlow: index % 2 != 0 && !smScreen && 'row-reverse',
                                            }}>
                                            <div style={{overflow: 'hidden', position: 'relative'}}>
                                                <Image
                                                    fit='cover'
                                                    src='https://vnkings.com/wp-content/uploads/2021/04/maxresdefault.jpg'
                                                    alt=''
                                                />
                                            </div>
                                            <Stack>
                                                <Title order={4} lineClamp={3}>
                                                    Phân tích nhân vật nhiếp ảnh gia Phùng trong truyện ngắn Chiếc
                                                    thuyền ngoài xa.
                                                </Title>
                                                {!smScreen && (
                                                    <Text lineClamp={5}>
                                                        Nhân vật Phùng trong truyện vừa là nhân vật chính đồng thời lại
                                                        là người kể chuyện. Mọi diễn biến của câu chuyện về gia đình
                                                        người đàn bà hàng chài đều xoay quanh các câu chuyện qua lời kể
                                                        của nhân vật Phùng.
                                                    </Text>
                                                )}
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
                            </>
                        )
                    })}
            </Grid>
            <Button w='200px' mt='xl' mx='auto' variant='outline'>
                Xem Thêm
            </Button>
        </>
    )
}
