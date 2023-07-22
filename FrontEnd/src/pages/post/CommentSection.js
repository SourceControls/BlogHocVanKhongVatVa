import {createStyles, Text, Avatar, Group, rem, Button, Textarea, Divider, Stack, ActionIcon, Box} from '@mantine/core'
import {Send} from 'tabler-icons-react'

export function CommentSection() {
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
            {[1, 1, 1].map((e) => (
                <>
                    <Group noWrap align='flex-start'>
                        <Avatar
                            src='https://www.graphicdesignforum.com/uploads/default/original/2X/0/0e58f26a6dd982e7f04d1286defd4320e6d6153b.jpeg'
                            alt='Tuấn Hùng'
                            radius='xl'
                            mt='4px'
                        />
                        <Stack justify='flex-start' spacing='xs'>
                            <Group>
                                <Text size='sm'>Tuấn Hùng</Text>
                                <Text size='xs' color='dimmed'>
                                    10 phút trước
                                </Text>
                            </Group>
                            <Text size='sm'>
                                Lorem isum dolor sit amet, consectetur adipiscing el, sed do eius, sed do eiusmod, sed
                                do eiusmod
                            </Text>
                        </Stack>
                    </Group>
                    <Divider my='md'></Divider>
                </>
            ))}
            <Button w='200px' mx='auto' variant='outline' display='block' mt='xl'>
                Xem thêm
            </Button>
        </Box>
    )
}
