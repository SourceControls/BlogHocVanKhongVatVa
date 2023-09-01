import {Text, Avatar, Group, Button, Textarea, Divider, Stack, ActionIcon, Box, Modal} from '@mantine/core'
import {useMediaQuery, useDisclosure} from '@mantine/hooks'
import {useRouter} from 'next/router'
import {Clock, Send, Trash} from 'tabler-icons-react'
import {useComments, useUsers, formatDate, createComment, deleteComment} from '@util'
import {useState} from 'react'
import {toast} from 'react-toastify'

export default function CommentSection() {
    const [opened, {open, close}] = useDisclosure(false)
    const router = useRouter()
    const [cmt, setCmt] = useState('')

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
    const handleDelete = (id) => {
        deleteComment(id, router.query.slug).then((rs) => {
            if (rs?.commentId) {
                mutate(
                    comments.filter((item) => item.commentId != rs.commentId),
                    false,
                )
            }
        })
    }
    return (
        <Box mt='xl'>
            <form onSubmit={handleComment}>
                <Textarea
                    label='Viết Bình Luận'
                    mb='xl'
                    value={cmt}
                    onChange={(e) => setCmt(e.target.value)}
                    rightSection={
                        cmt && (
                            <ActionIcon radius='50%' w='50px' onClick={handleComment} mr='xl'>
                                <Send />
                            </ActionIcon>
                        )
                    }></Textarea>
            </form>
            {comments[0]?.user &&
                comments.map((item) => (
                    <div key={item.commentId}>
                        <Group noWrap align='flex-start' spacing='xs'>
                            <Avatar src={item.user.avatarImage} alt={item.user.name} mt='4px' />
                            <Stack justify='flex-start' spacing='0'>
                                <Group>
                                    <Text size='sm' fw='bold'>
                                        {item.user.name}
                                        {users[0]?.userId == item.user.userId && ' (bạn)'}
                                    </Text>
                                    <Text color='grey' size='xs'>
                                        {item.user.role === 'VIEWER' && '(Người xem)'}
                                        {item.user.role === 'CONTRIBUTOR' && '(Cộng tác viên)'}
                                        {item.user.role === 'ADMIN' && '(Quản trị viên)'}
                                        {item.user.role === 'SUPERADMIN' && '(QTV cao cấp)'}
                                    </Text>
                                    <Group align='center' spacing='xs'>
                                        <Clock size='0.8rem' color='grey' />
                                        <Text size='xs' color='dimmed'>
                                            {formatDate(item.createdAt)}
                                        </Text>
                                    </Group>
                                </Group>

                                <Text size='sm'>{item.content}</Text>
                            </Stack>
                            {users[0]?.userId == item.user.userId && (
                                <>
                                    <ActionIcon color='red' ml={'auto'} onClick={open}>
                                        <Trash />
                                    </ActionIcon>
                                    <Modal opened={opened} onClose={close} size='xs' title=' Xóa bình luận?' centered>
                                        {/* <Text fw='bold' align='center' mb='xl'></Text> */}
                                        <Group align='center' position='apart' px='xl' mt='md'>
                                            <Button variant='outline' onClick={close}>
                                                Hủy
                                            </Button>
                                            <Button
                                                onClick={() => {
                                                    handleDelete(item.commentId)
                                                    close()
                                                }}>
                                                Xác nhận
                                            </Button>
                                        </Group>
                                    </Modal>
                                </>
                            )}
                        </Group>
                        <Divider my='md'></Divider>
                    </div>
                ))}
            <Button w='200px' mx='auto' variant='outline' display='block' mt='xl' onClick={() => setSize(size + 1)}>
                Xem thêm
            </Button>
        </Box>
    )
}
