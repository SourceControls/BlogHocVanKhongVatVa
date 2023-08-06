import {AspectRatio, Box, Button, Divider, Grid, Group, Image, LoadingOverlay, Stack, Text, Title} from '@mantine/core'
import {ExtraInfo} from '@comp'
import {useMediaQuery} from '@mantine/hooks'
import {usePosts} from '@util'
import Link from 'next/link'
import {Eye, Heart, ThumbUp} from 'tabler-icons-react'
import {useState} from 'react'

export default function FeaturedPosts() {
    const [page, setPage] = useState(1)
    const {posts, isLoading, size, setSize} = usePosts(`&featured=true&status=published`)
    const smScreen = useMediaQuery('(max-width: 48em)')
    if (!posts[0]?.postId) return <LoadingOverlay />
    return (
        <>
            <Grid gutter={0}>
                {posts &&
                    posts.map((item, index) => {
                        return (
                            <Grid.Col
                                key={index}
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
                                <Link href={'/post/' + item.slug}>
                                    <Group
                                        grow={!smScreen}
                                        spacing={!smScreen && '40px'}
                                        align='flex-start'
                                        style={{
                                            flexFlow: index % 2 != 0 && !smScreen && 'row-reverse',
                                        }}>
                                        <AspectRatio ratio={1920 / 1020} w={smScreen && '100%'}>
                                            <img width='100%' height='auto' src={item.featuredImage} />
                                            {/* <Image fit='cover' src={item.featuredImage} alt='' pos='relative'></Image> */}
                                        </AspectRatio>
                                        <Stack>
                                            <Title order={3} lineClamp={3}>
                                                {item.title}
                                            </Title>
                                            {<Text lineClamp={5}>{item.summary}</Text>}
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
