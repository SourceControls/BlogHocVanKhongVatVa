import {Avatar, Flex, Stack, Text} from '@mantine/core'
import {ExtraInfo} from '@comp'

function PostHeader(props) {
    return (
        <Flex w='100%' align='center' gap={12} mb='xl'>
            <Avatar
                src='https://www.graphicdesignforum.com/uploads/default/original/2X/0/0e58f26a6dd982e7f04d1286defd4320e6d6153b.jpeg'
                alt="it's me"
                size='lg'
            />
            <Stack style={{flex: 1}} spacing='0'>
                <Text fw='bold'>Bùi Tuấn Hùng</Text>
                <ExtraInfo publisherName='128 bài viết' publishedAt='05/09/2001' justify='flex-start' />
            </Stack>
        </Flex>
    )
}

export default PostHeader
