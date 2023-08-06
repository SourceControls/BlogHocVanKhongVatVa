import {AspectRatio, Box, Button, Divider, Grid, Group, Image, LoadingOverlay, Stack, Text, Title} from '@mantine/core'
import {ExtraInfo} from '@comp'
import {useMediaQuery} from '@mantine/hooks'

import Link from 'next/link'
import {Eye, Heart, ThumbUp} from 'tabler-icons-react'
import {usePosts} from '@util'

export function GridPost({query}) {
    // const [page, setPage] = useState(1)
    const {posts, isLoading, size, setSize} = usePosts(query || '')
    const smScreen = useMediaQuery('(max-width: 48em)')
    if (!posts[0]?.postId) return <LoadingOverlay />
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
                                    transition: '0.2s',
                                    '&:hover': {
                                        transform: 'translateY(-2%)',
                                        boxShadow: '0 4px 8px rgba(0, 0, 0,0.4)',
                                    },
                                })}>
                                <Link href={'/post/' + item.slug}>
                                    <AspectRatio ratio={1920 / 1020} mb='md'>
                                        <Image fit='cover' src={item.featuredImage} alt='' />
                                    </AspectRatio>
                                    <Group
                                        grow={!smScreen && span == 12}
                                        spacing={!smScreen && span == 12 && '40px'}
                                        align='flex-start'>
                                        <Stack>
                                            <Title order={3} lineClamp={3}>
                                                {item.title}
                                            </Title>
                                            <Text lineClamp={3}>{item.summary}</Text>
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
