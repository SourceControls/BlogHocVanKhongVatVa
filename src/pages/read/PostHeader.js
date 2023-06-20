import {Avatar, Flex, Stack, Text, Group, Center, ActionIcon} from '@mantine/core'
import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandTwitter,
    IconClockHour4,
    IconBookmarks,
    IconDots,
    IconLink,
} from '@tabler/icons-react'
import ExtraInfo from '../component/ExtraInfo'

function PostHeader(props) {
    return (
        <Flex w='100%' align='center' gap={12}>
            <Avatar
                src='https://www.graphicdesignforum.com/uploads/default/original/2X/0/0e58f26a6dd982e7f04d1286defd4320e6d6153b.jpeg'
                alt="it's me"
                size='lg'
            />
            <Stack style={{flex: 1}} spacing='0'>
                <Text fw='bold'>{props.publisher[0].name}</Text>
                <ExtraInfo {...props} justify='flex-start' />
            </Stack>
            <Group spacing='xs'>
                <ActionIcon title='Chia sẻ qua Twitter'>
                    <IconBrandTwitter size='1.6rem' />
                </ActionIcon>
                <ActionIcon title='Chia sẻ qua Facebook'>
                    <IconBrandFacebook size='1.6rem' />
                </ActionIcon>
                <ActionIcon title='Chia sẻ qua LinkedIn'>
                    <IconBrandLinkedin size='1.6rem' />
                </ActionIcon>
                <ActionIcon title='Lấy đường liên kết'>
                    <IconLink size='1.6rem' />
                </ActionIcon>
            </Group>
            <ActionIcon title='Lưu bài viết' mx={12}>
                <IconBookmarks size='1.6rem' />
            </ActionIcon>
            <ActionIcon mx={12}>
                <IconDots size='1.6rem' />
            </ActionIcon>
        </Flex>
    )
}

export default PostHeader
