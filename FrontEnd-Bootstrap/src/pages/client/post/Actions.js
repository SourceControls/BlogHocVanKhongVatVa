import {
    IconEye,
    IconThumbDown,
    IconBookmarks,
    IconLink,
    IconThumbDownFilled,
    IconThumbUp,
    IconThumbUpFilled,
} from '@tabler/icons-react'
import {reaction, useUsers, getOwnReaction} from '@util'
import {useEffect, useState} from 'react'
import {toast} from 'react-toastify'
function Actions(props) {
    const {users} = useUsers('', '/profile')
    const [userReact, setUserReact] = useState()
    useEffect(() => {
        if (users[0]?.userId)
            getOwnReaction(props.post.slug).then((rs) => {
                if (rs?.postId) setUserReact(rs.type)
            })
        else setUserReact()
    }, [users[0]?.userId])
    if (!props.post) return <></>
    return (
        <div
            className='d-flex flex-row flex-md-column align-items-center justify-content-center position-sticky ms-auto ms-md-auto me-md-0 d-block'
            style={{width: 'fit-content', top: props.direction == 'horizontal' ? '0px' : '17rem'}}
            gap='3'>
            <div className='d-inline-flex d-md-flex flex-row flex-md-column align-items-center me-5 me-md-0'>
                <div className='d-flex flex-row flex-md-column align-items-center me-3 me-md-0 mb-md-3'>
                    <IconEye size='2rem' role='button' className='color-7' />
                    <p className='text-muted'>{props.post.view}</p>
                </div>
                <div className='d-flex flex-row flex-md-column align-items-center me-3 me-md-0 mb-md-3'>
                    <div
                        title='Thích'
                        onClick={() => {
                            if (!users[0]?.userId) return toast.info('Cần đăng nhập để sử dụng')

                            reaction(props.post.slug)
                            if (userReact === 'LIKE') {
                                props.mutate([{...props.post, likeCount: props.post.likeCount - 1}], false)
                                setUserReact()
                            } else {
                                let post = {...props.post, likeCount: props.post.likeCount + 1}
                                setUserReact('LIKE')
                                if (userReact === 'DISLIKE') post.dislikeCount = props.post.dislikeCount - 1
                                props.mutate([post], false)
                            }
                        }}>
                        {userReact == 'LIKE' ? (
                            <IconThumbUpFilled size='2rem' role='button' className='color-7' />
                        ) : (
                            <IconThumbUp size='2rem' role='button' className='color-7' />
                        )}
                    </div>
                    <p className='text-muted'>{props.post.likeCount}</p>
                </div>
                <div className='d-flex flex-row flex-md-column align-items-center me-3 me-md-0 mb-md-3'>
                    <div
                        title='Không Thích'
                        onClick={() => {
                            if (!users[0]?.userId) return toast.info('Cần đăng nhập để sử dụng')

                            reaction(props.post.slug, false)
                            if (userReact === 'DISLIKE') {
                                props.mutate([{...props.post, dislikeCount: props.post.dislikeCount - 1}], false)
                                setUserReact()
                            } else {
                                let post = {...props.post, dislikeCount: props.post.dislikeCount + 1}
                                setUserReact('DISLIKE')
                                if (userReact === 'LIKE') post.likeCount = props.post.likeCount - 1
                                props.mutate([post], false)
                            }
                        }}>
                        {userReact == 'DISLIKE' ? (
                            <IconThumbDownFilled size='2rem' role='button' className='color-7' />
                        ) : (
                            <IconThumbDown size='2rem' role='button' className='color-7' />
                        )}
                    </div>
                    <p className='text-muted'>{props.post.dislikeCount}</p>
                </div>
            </div>
            <div className='d-inline-flex d-md-flex flex-row flex-md-column align-items-center  mt-md-3'>
                <IconBookmarks
                    size='2rem'
                    role='button'
                    className='color-7 me-3 me-md-0 mb-md-3'
                    onClick={() => toast.info('Coming soon')}
                />
                <div title='Lấy đường liên kết chia sẻ' onClick={() => navigator.clipboard.write(window.location.href)}>
                    <IconLink size='2rem' role='button' className='color-7' />
                </div>
            </div>
        </div>
    )
}

export default Actions
