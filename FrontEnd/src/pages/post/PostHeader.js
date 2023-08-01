import {Avatar, Flex, Stack, Text} from '@mantine/core'
import {ExtraInfo} from '@comp'

function PostHeader(props) {
    return (
        <Flex w='100%' align='center' gap={12} mb='xl'>
            <Avatar
                src={props.post.createdByUser.avatarImage || 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png'}
                alt="it's me"
                size='lg'
            />
            <Stack style={{flex: 1}} spacing='0'>
                <Text fw='bold'>{props.post.createdByUser.name}</Text>
                <ExtraInfo publisherName={props.post.role} publishedAt={props.post.createdAt} justify='flex-start' />
            </Stack>
        </Flex>
    )
}

export default PostHeader
