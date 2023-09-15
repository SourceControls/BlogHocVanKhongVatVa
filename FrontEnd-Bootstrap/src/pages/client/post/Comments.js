import {useRouter} from 'next/router'
import {IconClock, IconSend, IconTrash} from '@tabler/icons-react'
import {useComments, useUsers, formatDate, createComment, deleteComment} from '@util'
import {useState} from 'react'
import {toast} from 'react-toastify'
import {Button, Modal, Stack} from 'react-bootstrap'

export default function Comments() {
    const router = useRouter()
    const [cmt, setCmt] = useState('')
    const [show, setShow] = useState(undefined)

    const {users} = useUsers('', '/profile')
    const {comments, isLoading, size, setSize, mutate} = useComments(router.query.slug)
    const handleComment = () => {
        if (!users[0]?.userId) return toast.info('Cần đăng nhập để sử dụng')

        createComment(cmt, router.query.slug).then((rs) => {
            if (rs?.commentId) {
                setCmt('')
                mutate([rs, ...comments], false)
            }
        })
    }
    const handleDelete = () => {
        deleteComment(show, router.query.slug).then((rs) => {
            if (rs?.commentId) {
                mutate(
                    comments.filter((item) => item.commentId != rs.commentId),
                    false,
                )
                setShow()
            }
        })
    }
    const handleClose = () => setShow()
    return (
        <div className='mt-4'>
            <form onSubmit={handleComment}>
                <label>Viết Bình Luận</label>
                <div className='position-relative'>
                    <textarea className='mb-4' value={cmt} onChange={(e) => setCmt(e.target.value)}></textarea>
                    {cmt && (
                        <IconSend
                            className='rounded-circle mr-4 position-absolute'
                            role='button'
                            size='2rem'
                            onClick={handleComment}
                        />
                    )}
                </div>
            </form>
            {comments[0]?.user &&
                comments.map((item) => (
                    <div key={item.commentId} className='border-2 border-bottom border-primary mb-3 pb-3'>
                        <Stack direction='horizontal' gap='3'>
                            <img
                                className='mt-1 rounded-circle'
                                width='50px'
                                src={item.user.avatarImage}
                                alt={item.user.name}
                            />
                            <Stack>
                                <Stack direction='horizontal' gap='4'>
                                    <p className='fs-6 fw-bold'>
                                        {item.user.name}
                                        {users[0]?.userId == item.user.userId && ' (bạn)'}
                                    </p>
                                    <p className='fs-6 text-muted d-none d-md-block'>
                                        {item.user.role === 'VIEWER' && '(Người xem)'}
                                        {item.user.role === 'CONTRIBUTOR' && '(Cộng tác viên)'}
                                        {item.user.role === 'ADMIN' && '(Quản trị viên)'}
                                        {item.user.role === 'SUPERADMIN' && '(QTV cao cấp)'}
                                    </p>
                                    <Stack direction='horizontal' gap='1'>
                                        <IconClock size='0.8rem' color='grey' />
                                        <p className='fs-6 text-muted'>{formatDate(item.createdAt)}</p>
                                    </Stack>
                                </Stack>
                                <p size='sm'>{item.content}</p>
                            </Stack>
                            {users[0]?.userId == item.user.userId && (
                                <IconTrash
                                    className='ms-auto'
                                    role='button'
                                    color='red'
                                    onClick={() => setShow(item.commentId)}
                                />
                            )}
                        </Stack>
                    </div>
                ))}
            <Button width='200px' className='mx-auto mt-4' onClick={() => setSize(size + 1)}>
                Xem thêm
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Xóa bình luận</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bình luận sẽ bị xóa khỏi bài viết!</Modal.Body>
                <Modal.Footer>
                    <Button variant='primary' onClick={handleDelete}>
                        Xác nhận
                    </Button>
                    <Button variant='link' onClick={handleClose}>
                        Hủy
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
