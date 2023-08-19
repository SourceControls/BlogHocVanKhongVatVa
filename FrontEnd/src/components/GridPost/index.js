import {
    AspectRatio,
    Badge,
    Box,
    Button,
    Divider,
    Grid,
    Group,
    Image,
    LoadingOverlay,
    SimpleGrid,
    Skeleton,
    Stack,
    Text,
    Title,
    Tooltip,
} from '@mantine/core'
import {ExtraInfo} from '@comp'
import {useMediaQuery} from '@mantine/hooks'

import Link from 'next/link'
import {Eye, Heart, ThumbUp} from 'tabler-icons-react'
import {usePosts} from '@util'
import {IconStarFilled} from '@tabler/icons-react'

function GridPostSkeleton() {
    return (
        <SimpleGrid cols={3}>
            {[1, 1, 1].map((e, i) => (
                <Stack key={i}>
                    <Skeleton height={220} mb='xl' radius='md' />
                    <Skeleton height={16} radius='xl' />
                    <Skeleton height={8} mt={6} radius='xl' />
                    <Skeleton height={8} mt={6} width='70%' radius='xl' />
                    <Skeleton height={8} mt={6} width='30%' radius='xl' />
                </Stack>
            ))}
        </SimpleGrid>
    )
}

export function GridPost({query, excludePostId}) {
    // const [page, setPage] = useState(1)
    const {posts, isLoading, size, setSize} = usePosts(query || '')
    const smScreen = useMediaQuery('(max-width: 48em)')
    if (!posts[0]?.postId) return <GridPostSkeleton />
    return (
        <>
            <Grid m={0}>
                {posts.length != 0 &&
                    posts.map((item, index) => {
                        if (item.postId === excludePostId) return <></>
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
                                        <Image
                                            fit='cover'
                                            src={item.featuredImage}
                                            style={{borderRadius: '16px'}}
                                            alt=''
                                        />
                                    </AspectRatio>
                                    <Group
                                        grow={!smScreen && span == 12}
                                        spacing={!smScreen && span == 12 && '40px'}
                                        align='flex-start'>
                                        <Stack spacing='6px'>
                                            <Title order={3} lineClamp={2}>
                                                {item.title}{' '}
                                                {item.featured && (
                                                    <Tooltip label='Bài viết nổi bật'>
                                                        <IconStarFilled size='1rem' />
                                                    </Tooltip>
                                                )}
                                            </Title>

                                            <Text lineClamp={3} className='format-content'>
                                                {item.summary}
                                            </Text>
                                            <ExtraInfo
                                                publisherName={item.createdByUser.name}
                                                publishedAt={item.createdAt}
                                            />
                                            <Group spacing='xs'>
                                                {item.postTag.map((e, i) => (
                                                    <Text color='dimmed' key={i}>
                                                        {'#' + e.tag.tagName}
                                                    </Text>
                                                ))}
                                            </Group>
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
