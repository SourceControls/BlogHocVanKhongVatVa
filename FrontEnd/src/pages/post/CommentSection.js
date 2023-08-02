import {createStyles, Text, Avatar, Group, rem, Button, Textarea, Divider, Stack, ActionIcon, Box} from '@mantine/core'
import {useRouter} from 'next/router'
import {Send, Trash} from 'tabler-icons-react'
import {useComments, useUsers, formatDate, createComment, deleteComment} from '@util'
import {useState} from 'react'

export default function CommentSection() {
    const router = useRouter()
    const [cmt, setCmt] = useState('')
    const {users} = useUsers('', '/profile')
    const {comments, isLoading, size, setSize, mutate} = useComments(router.query.slug)
    const handleComment = () => {
        createComment(cmt, router.query.slug).then((rs) => {
            if (rs.commentId) mutate([rs, ...comments], false)
        })
    }
    const handleDelete = (id) => {
        deleteComment(id, router.query.slug).then((rs) => {
            if (rs.commentId) {
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
                        <ActionIcon h='100%' w='50px' onClick={handleComment}>
                            <Send />
                        </ActionIcon>
                    }></Textarea>
            </form>
            {comments &&
                comments.map((item) => (
                    <div key={item.commentId}>
                        <Group noWrap align='flex-start' spacing='xs'>
                            <Avatar src={item.user.avatarImage} alt={item.user.name} mt='4px' />
                            <Stack justify='flex-start' spacing='0'>
                                <Group>
                                    <Text size='sm' fw='bold'>
                                        {item.user.name}
                                        {users[0]?.userId == item.user.userId && '(bạn)'}
                                    </Text>
                                    <Text size='xs' color='dimmed'>
                                        {formatDate(item.createdAt)}
                                    </Text>
                                </Group>
                                <Text size='sm'>{item.content}</Text>
                            </Stack>
                            {users[0]?.userId == item.user.userId && (
                                <ActionIcon color='red' ml={'auto'} onClick={() => handleDelete(item.commentId)}>
                                    <Trash />
                                </ActionIcon>
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
