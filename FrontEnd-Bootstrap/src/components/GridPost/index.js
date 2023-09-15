import {ExtraInfo} from '@comp'

import Link from 'next/link'
import {usePosts, formatDate} from '@util'
import {IconEye, IconHeart, IconThumbUp, IconStarFilled} from '@tabler/icons-react'
import {Button, Col, Container, OverlayTrigger, Ratio, Row, Stack, Tooltip} from 'react-bootstrap'

function GridPostSkeleton() {
    return (
        <Container>
            <Row>
                {[1, 1, 1].map((e, i) => (
                    <Col key={i}>
                        <Stack gap={2}>
                            <div className='animated-skeleton mb-3 rounded-3' style={{height: '220px'}} />
                            <div className='animated-skeleton rounded-3 mb-2' style={{height: '20px'}} />
                            <div className='animated-skeleton rounded-3 mb-1' style={{height: '10px'}} />
                            <div className='animated-skeleton rounded-3 mb-1' style={{height: '10px'}} />
                            <div className='animated-skeleton rounded-3 mb-1 w-75' style={{height: '10px'}} />
                            <div className='animated-skeleton rounded-3 mb-1 w-75' style={{height: '10px'}} />
                            <div className='animated-skeleton rounded-3 mb-1 w-25' style={{height: '10px'}} />
                        </Stack>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export function GridPost({query, excludePostId}) {
    // const [page, setPage] = useState(1)
    const {posts, isLoading, size, setSize} = usePosts(query || '')
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
                                                <IconEye className='me-2 text-muted' />
                                                <p className='text-muted'>{item.view}</p>
                                            </div>
                                            <div className='d-flex algin-items-center ms-3'>
                                                <IconThumbUp className='me-2 text-muted' />
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

            <Button variant='primary mx-auto mt-5' onClick={() => setSize(size + 1)}>
                Xem thêm
            </Button>
        </>
    )
}
