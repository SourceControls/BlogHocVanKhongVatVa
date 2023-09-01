import {ExtraInfo} from '@comp'
import {useMediaQuery} from '@mantine/hooks'

import Link from 'next/link'
import {Eye, Heart, ThumbUp} from 'tabler-icons-react'
import {usePosts, formatDate} from '@util'
import {IconStarFilled} from '@tabler/icons-react'
import {Button, Col, Container, OverlayTrigger, Ratio, Row, Stack, Tooltip} from 'react-bootstrap'

function GridPostSkeleton() {
    // <SimpleGrid cols={3}>
    //     {[1, 1, 1].map((e, i) => (
    //         <Stack key={i}>
    //             <Skeleton height={220} mb='xl' radius='md' />
    //             <Skeleton height={16} radius='xl' />
    //             <Skeleton height={8} mt={6} radius='xl' />
    //             <Skeleton height={8} mt={6} width='70%' radius='xl' />
    //             <Skeleton height={8} mt={6} width='30%' radius='xl' />
    //         </Stack>
    //     ))}
    // </SimpleGrid>
    return <></>
}

export function GridPost({query, excludePostId}) {
    // const [page, setPage] = useState(1)
    const {posts, isLoading, size, setSize} = usePosts(query || '')
    const smScreen = useMediaQuery('(max-width: 48em)')
    if (!posts[0]?.postId) return <GridPostSkeleton />
    return (
        <>
            <Container>
                <Row sm={1} md={2} lg={3}>
                    {posts.map((item, index) => {
                        if (item.postId === excludePostId) return <></>
                        return (
                            <Col key={index} className='p-3 rounded-4 hover-shadow'>
                                <Link href={'/post/' + item.slug}>
                                    <Stack gap='2 md-3'>
                                        <Ratio aspectRatio='16x9'>
                                            <img
                                                src={item.featuredImage}
                                                style={{borderRadius: '24px', objectFit: 'cover'}}
                                                className='rounded-4'
                                            />
                                        </Ratio>
                                        <div className='max-line-2'>
                                            <h1 className='h5 d-inline fw-bold'>
                                                {item.featured && (
                                                    <OverlayTrigger
                                                        overlay={<Tooltip id={item.title}>Bài viết nổi bật</Tooltip>}>
                                                        <IconStarFilled size='1rem' />
                                                    </OverlayTrigger>
                                                )}{' '}
                                                {item.title}
                                            </h1>
                                        </div>

                                        <p className=' max-line-3'>{item.summary}</p>
                                        <div className='d-flex algin-items-center'>
                                            <p className='text-muted'>{item.createdByUser.name}</p>
                                            <span className='mx-3'>-</span>
                                            <div className='text-muted'>{formatDate(item.updatedAt)}</div>
                                        </div>
                                        <div className='d-flex algin-items-center '>
                                            <div className='d-flex algin-items-center'>
                                                <Eye className='me-2 text-muted' />
                                                <p className='text-muted'>{item.view}</p>
                                            </div>
                                            <div className='d-flex algin-items-center ms-3'>
                                                <ThumbUp className='me-2 text-muted' />
                                                <p className='text-muted'>{item.likeCount}</p>
                                            </div>
                                        </div>
                                    </Stack>
                                </Link>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
            <Button w='200px' mt='xl' mx='auto' variant='outline' onClick={() => setSize(size + 1)}>
                Xem Thêm
            </Button>
        </>
    )
}
