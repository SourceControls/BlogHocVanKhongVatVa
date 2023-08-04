import {Box, Button, Divider, Grid, Group, Image, Stack, Text, Title} from '@mantine/core'
import {ExtraInfo} from '@comp'
import {useMediaQuery} from '@mantine/hooks'

import Link from 'next/link'
import {Eye, Heart, ThumbUp} from 'tabler-icons-react'
import {usePosts} from '@util'

export function GridPost({query}) {
    // const [page, setPage] = useState(1)
    const {posts, isLoading, size, setSize} = usePosts(query || '')
    const smScreen = useMediaQuery('(max-width: 48em)')
    return (
        <>
            <Grid m={0}>
                {posts.length != 0 &&
                    posts.map((item, index) => {
                        let span = 4
                        if (smScreen) span = 12
                        return (
                            <Grid.Col
                                key={index}
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
                                <Link href={'/post/' + item.slug}>
                                    <Group
                                        grow={!smScreen && span == 12}
                                        spacing={!smScreen && span == 12 && '40px'}
                                        align='flex-start'>
                                        <div
                                            style={{overflow: 'visible', position: 'relative'}}
                                            className='unset-overflow'>
                                            <Image fit='cover' src={item.featuredImage} alt='' />

                                            <Box className='content'>
                                                <Title order={4} lineClamp={3} mb='md'>
                                                    {item.title}
                                                </Title>
                                                <Text lineClamp={10}>{item.summary}</Text>
                                            </Box>
                                        </div>
                                        <Stack>
                                            <Title order={4} lineClamp={3} className='hide-on-hover'>
                                                {item.title}
                                            </Title>
                                            <ExtraInfo
                                                publisherName={item.createdByUser.name}
                                                publishedAt={item.createdAt}
                                            />
                                            <Text color='dimmed'>
                                                <Group spacing='xl'>
                                                    <Group spacing='xs'>
                                                        <Eye />
                                                        <Text>{item.view}</Text>
                                                    </Group>
                                                    <Group spacing='xs'>
                                                        <ThumbUp />
                                                        <Text>{item.likeCount}</Text>
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
            <Button w='200px' mt='xl' mx='auto' variant='outline' onClick={() => setSize(size + 1)}>
                Xem Thêm
            </Button>
        </>
    )
}
