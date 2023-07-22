import {Flex, Text, ActionIcon} from '@mantine/core'
import {IconBookmarks, IconLink} from '@tabler/icons-react'
import {Eye, ThumbDown, ThumbUp} from 'tabler-icons-react'

function PostAction(props) {
    return (
        <Flex
            direction={props.direction || 'column'}
            justify='center'
            align='center'
            gap='xl'
            pos='sticky'
            top={props.direction == 'row' ? '0px' : '17rem'}
            ml='auto'
            w={props.direction == 'row' ? '100%' : '80px'}>
            <Flex direction={props.direction || 'column'} gap='md'>
                <Flex direction={props.direction || 'column'} align='center'>
                    <ActionIcon title='Lượt Xem'>
                        <Eye size='1.8rem' />
                    </ActionIcon>
                    <Text color='grey'>312.6k</Text>
                </Flex>
                <Flex direction={props.direction || 'column'} align='center'>
                    <ActionIcon title='Thích'>
                        <ThumbUp size='1.8rem' />
                    </ActionIcon>
                    <Text color='grey'>112.3k</Text>
                </Flex>
                <Flex direction={props.direction || 'column'} align='center'>
                    <ActionIcon title='Không Thích'>
                        <ThumbDown size='1.8rem' />
                    </ActionIcon>
                    <Text color='grey'>1.3k</Text>
                </Flex>
            </Flex>
            <Flex direction={props.direction || 'column'} align='center' gap='xs'>
                <ActionIcon title='Lưu bài viết'>
                    <IconBookmarks size='1.8rem' />
                </ActionIcon>
                <ActionIcon title='Lấy đường liên kết chia sẻ'>
                    <IconLink size='1.8rem' />
                </ActionIcon>
            </Flex>
        </Flex>
    )
}

export default PostAction
