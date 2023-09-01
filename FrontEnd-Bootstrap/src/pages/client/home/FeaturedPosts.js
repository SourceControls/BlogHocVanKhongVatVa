import {usePosts, formatDate} from '@util'
import Link from 'next/link'
import {Eye, ThumbUp} from 'tabler-icons-react'
import {useState} from 'react'
import {IconStarFilled} from '@tabler/icons-react'
import {Button, OverlayTrigger, Ratio, Stack, Tooltip} from 'react-bootstrap'
import {LoadingOverlay} from '@mantine/core'

export default function FeaturedPosts() {
    const [page, setPage] = useState(1)
    const {posts, isLoading, size, setSize} = usePosts(`&featured=true&status=published`)
    if (!posts[0]?.postId) return <LoadingOverlay />
    return (
        <>
            <>
                {posts &&
                    posts.map((item, index) => {
                        return (
                            <Link href={'/post/' + item.slug} className='hover-shadow rounded-5 p-4'>
                                <Stack gap='3' className={index % 2 == 0 ? 'flex-lg-row' : 'flex-lg-row-reverse'}>
                                    <Ratio
                                        aspectRatio='16x9'
                                        className='flex-grow-1 '
                                        style={{flexBasis: '50%', maxHeight: '20rem'}}>
                                        <img
                                            src={item.featuredImage}
                                            style={{borderRadius: '24px', objectFit: 'cover'}}
                                            className='rounded-5'
                                        />
                                    </Ratio>
                                    <Stack className='flex-grow-1' style={{flexBasis: '50%'}} gap='3'>
                                        <div className='max-line-2'>
                                            <h1 className='h3 d-inline fw-bold'>
                                                {item.title}{' '}
                                                {item.featured && (
                                                    <OverlayTrigger
                                                        overlay={<Tooltip id={item.title}>Bài viết nổi bật</Tooltip>}>
                                                        <IconStarFilled size='1rem' />
                                                    </OverlayTrigger>
                                                )}
                                            </h1>
                                        </div>
                                        <p className='format-content max-line-5'>{item.summary}</p>
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
                                </Stack>
                            </Link>
                        )
                    })}
            </>
            <Button w='200px' mt='xl' mx='auto' variant='outline' onClick={() => setSize(size + 1)}>
                Xem Thêm
            </Button>
        </>
    )
}
