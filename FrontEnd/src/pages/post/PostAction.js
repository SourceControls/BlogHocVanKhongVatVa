import {Flex, Text, ActionIcon} from '@mantine/core'
import {IconBookmarks, IconLink, IconThumbDownFilled, IconThumbUp, IconThumbUpFilled} from '@tabler/icons-react'
import {Eye, ThumbDown, ThumbUp} from 'tabler-icons-react'
import {reaction, useUsers, getOwnReaction} from '@util'
import {useEffect, useState} from 'react'
import {toast} from 'react-toastify'
function PostAction(props) {
    const {users} = useUsers('', '/profile')
    const [userReact, setUserReact] = useState()
    useEffect(() => {
        if (users[0]?.userId)
            getOwnReaction(props.post.slug).then((rs) => {
                if (rs?.postId) setUserReact(rs.type)
            })
        else setUserReact()
    }, [users[0]])
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
                    <Eye size='1.8rem' color='var(--primary-color-7)' />
                    <Text color='grey'>{props.post.view}</Text>
                </Flex>
                <Flex direction={props.direction || 'column'} align='center'>
                    <ActionIcon
                        title='Thích'
                        onClick={() => {
                            if (!users[0]?.userId) return toast.info('Cần đăng nhập để sử dụng')

                            reaction(props.post.slug).then((rs) => {
                                if (rs?.postId) {
                                    props.mutate([rs], false)
                                    if (userReact === 'LIKE') {
                                        setUserReact()
                                    } else setUserReact('LIKE')
                                }
                            })
                        }}>
                        {userReact == 'LIKE' ? <IconThumbUpFilled size='1.8rem' /> : <IconThumbUp size='1.8rem' />}
                    </ActionIcon>
                    <Text color='grey'>{props.post.likeCount}</Text>
                </Flex>
                <Flex direction={props.direction || 'column'} align='center'>
                    <ActionIcon
                        title='Không Thích'
                        onClick={() => {
                            if (!users[0]?.userId) return toast.info('Cần đăng nhập để sử dụng')

                            reaction(props.post.slug, false).then((rs) => {
                                if (rs?.postId) {
                                    props.mutate([rs], false)
                                    if (userReact === 'DISLIKE') {
                                        setUserReact()
                                    } else setUserReact('DISLIKE')
                                }
                            })
                        }}>
                        {userReact == 'DISLIKE' ? <IconThumbDownFilled size='1.8rem' /> : <ThumbDown size='1.8rem' />}
                    </ActionIcon>
                    <Text color='grey'>{props.post.dislikeCount}</Text>
                </Flex>
            </Flex>
            <Flex direction={props.direction || 'column'} align='center' gap='xs'>
                <ActionIcon title='Lưu bài viết' onClick={() => toast.info('Coming soon')}>
                    <IconBookmarks size='1.8rem' />
                </ActionIcon>
                <ActionIcon
                    title='Lấy đường liên kết chia sẻ'
                    onClick={() => navigator.clipboard.writeText(window.location.href)}>
                    <IconLink size='1.8rem' />
                </ActionIcon>
            </Flex>
        </Flex>
    )
}

export default PostAction
