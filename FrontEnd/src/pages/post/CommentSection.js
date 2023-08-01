import {createStyles, Text, Avatar, Group, rem, Button, Textarea, Divider, Stack, ActionIcon, Box} from '@mantine/core'
import {useRouter} from 'next/router'
import {Send} from 'tabler-icons-react'
import {useComments, formatDate} from '@util'

export default function CommentSection() {
    const router = useRouter()

    const {comments, isLoading, size, setSize} = useComments(router.query.slug)

    return (
        <Box mt='xl'>
            <form>
                <Textarea
                    label='Viết Bình Luận'
                    mb='xl'
                    rightSection={
                        <ActionIcon h='100%' w='50px'>
                            <Send />
                        </ActionIcon>
                    }></Textarea>
            </form>
            {comments &&
                comments.map((item) => (
                    <div key={item.commentId}>
                        <Group noWrap align='flex-start'>
                            <Avatar
                                src={item.user.avatarImage || 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png'}
                                alt={item.user.name}
                                radius='xl'
                                mt='4px'
                            />
                            <Stack justify='flex-start' spacing='xs'>
                                <Group>
                                    <Text size='sm'>{item.user.name}</Text>
                                    <Text size='xs' color='dimmed'>
                                        {formatDate(item.createdAt)}
                                    </Text>
                                </Group>
                                <Text size='sm'>{item.content}</Text>
                            </Stack>
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
