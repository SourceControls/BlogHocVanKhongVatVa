import {ActionIcon, Avatar, Button, Flex, Group, Stack, Text} from '@mantine/core'
import {ExtraInfo} from '@comp'
import {ArrowNarrowRight, Social} from 'tabler-icons-react'

function PostHeader(props) {
    return (
        <Flex w='100%' align='center' gap={12} mb='xl'>
            <Avatar src={props.post.createdByUser.avatarImage} alt="it's me" size='lg' />
            <Stack style={{flex: 1}} spacing='0'>
                <Group align='center'>
                    <Text fw='bold'>{props.post.createdByUser.name}</Text>
                    <Text color='grey' size='xs'>
                        {props.post.createdByUser.role === 'VIEWER' && '(Người xem)'}
                        {props.post.createdByUser.role === 'CONTRIBUTOR' && '(Cộng tác viên)'}
                        {props.post.createdByUser.role === 'ADMIN' && '(Quản trị viên)'}
                        {props.post.createdByUser.role === 'SUPERADMIN' && '(QTV cao cấp)'}
                    </Text>
                </Group>
                <Text color='dimmed'>{props.post.createdByUser.email}</Text>

                {/* <ExtraInfo publisherName={'Thời gian đăng'} publishedAt={props.post.createdAt} justify='flex-start' /> */}
            </Stack>
            <Button
                component='a'
                variant='outline'
                target='_blank'
                href={props.post.createdByUser.website || '#'}
                rightIcon={<ArrowNarrowRight />}>
                Liên hệ
            </Button>
        </Flex>
    )
}

export default PostHeader
