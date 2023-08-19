import {ActionIcon, Box, Button, Group, Modal, Select, Stack, Text, TextInput, Title, Tooltip} from '@mantine/core'
import {FloatingLabelInput, ExtraInfo} from '@comp'
import Layout from '../Layout'
import {Edit, Eye, PresentationAnalytics, Search, ThumbUp, ThumbDown, Plus, Bell, Mail} from 'tabler-icons-react'
import MyEditor from './MyEditor'
import {useDisclosure} from '@mantine/hooks'
import {useRouter} from 'next/router'
import {usePosts, useUsers, sendPostAlert} from '@util'
import {useState} from 'react'
import AuthGuard from '../AuthGuard'
function Posts() {
    const [opened, {open, close}] = useDisclosure(false)
    const [openedPostAlert, {open: openPostAlert, close: closePostAlert}] = useDisclosure(false)
    const router = useRouter()
    const [email, setEmail] = useState('hungbuituan1@gmail.com')
    const [alertPostId, setAlertPostId] = useState()
    const [modalContent, setModalContent] = useState(<MyEditor close={close} />)
    const {posts, isLoading, size, setSize, mutate} = usePosts('&limit=6&' + router.asPath.split('?')[1], '/admin')
    const {users: authUsers} = useUsers('', '/profile')

    const changeQuery = (key, value) => {
        router.push({
            query: {
                ...router.query,
                [key]: value,
            },
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        sendPostAlert(alertPostId, email)
    }
    return (
        <AuthGuard allowedRoles={['CONTRIBUTOR', 'ADMIN', 'SUPERADMIN']}>
            <Group mb='38px' noWrap align='flex-end'>
                <Text mr='auto' size='xl' fw='bold'>
                    Bài Viết
                </Text>
                <FloatingLabelInput
                    ml='xl'
                    label='Tìm Kiếm'
                    placeholder='Nhập từ khóa...'
                    icon={<Search />}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            changeQuery('key', e.target.value)
                        }
                    }}
                />
                <Select
                    defaultValue=''
                    data={[
                        {value: '', label: 'Mới nhất'},
                        {value: 'view', label: 'Nhiều Lượt Xem'},
                        {value: 'likeCount', label: 'Nhiều Lượt Like '},
                        {value: 'dislikeCount', label: 'Nhiều Lượt Dislike '},
                    ]}
                    onChange={(val) => changeQuery('sortBy', val)}
                />
                <Select
                    defaultValue=''
                    data={[
                        {value: '', label: 'Tất Cả Bài Viết'},
                        {value: 'draft', label: 'Nháp'},
                        {value: 'pending', label: 'Chờ Duyệt'},
                        {value: 'published', label: 'Công Khai'},
                        {value: 'hide', label: 'Đã Ẩn'},
                    ]}
                    onChange={(val) => changeQuery('status', val)}
                />
                {/* {authUsers[0]?.role && authUsers[0]?.role !== 'CONTRIBUTOR' && (
                    <Select
                        defaultValue=''
                        searchable
                        nothingFound='Không tìm thấy'
                        maxDropdownHeight={280}
                        data={[
                            {value: '', label: 'Tất Cả Tác Giả'},
                            ...users.map((item) => ({value: item.slug, label: item.name})),
                        ]}
                        onChange={(val) => changeQuery('author', val)}
                    />
                )} */}

                <Button
                    leftIcon={<Plus />}
                    onClick={() => {
                        setModalContent(<MyEditor close={close} mutate={mutate} posts={posts} />)
                        open()
                    }}>
                    Tạo
                </Button>
            </Group>
            <div>
                {posts[0]?.postId &&
                    posts.map((item, index) => (
                        <Group key={index} w='100%' py='md' style={{borderTop: '1px solid #ccc'}}>
                            <Stack spacing='4px' maw='70%'>
                                <Text fw='bold' size='lg' lineClamp={1}>
                                    {item.title}
                                </Text>
                                <Text>
                                    <ExtraInfo publisherName={item.createdByUser.name} publishedAt={item.createdAt} />
                                </Text>
                                <Text color='dimmed'>
                                    <Group>
                                        <Text color='red'>{item.status}</Text>
                                        {'-'}
                                        <Group spacing='xs'>
                                            <Eye />
                                            <Text>{item.view}</Text>
                                        </Group>
                                        <Group spacing='xs'>
                                            <ThumbUp />
                                            <Text> {item.likeCount}</Text>
                                        </Group>
                                        <Group spacing='xs'>
                                            <ThumbDown />
                                            <Text> {item.dislikeCount}</Text>
                                        </Group>
                                    </Group>
                                </Text>
                            </Stack>
                            <Group ml='auto'>
                                <ActionIcon
                                    size='xl'
                                    onClick={() => {
                                        setModalContent(
                                            <MyEditor close={close} post={item} mutate={mutate} posts={posts} />,
                                        )
                                        open()
                                    }}>
                                    <Edit />
                                </ActionIcon>

                                <Tooltip label='Gửi thông báo bài viết'>
                                    <ActionIcon
                                        size='xl'
                                        onClick={() => {
                                            setAlertPostId(item.postId)
                                            openPostAlert()
                                        }}>
                                        <Bell />
                                    </ActionIcon>
                                </Tooltip>
                            </Group>
                        </Group>
                    ))}
            </div>
            <Button mx='auto' display='block' px='xl' mt='xl' onClick={() => setSize(size + 1)}>
                Xem thêm
            </Button>
            <Modal
                size={1300}
                opened={opened}
                onClose={close}
                centered
                yOffset='1vh'
                xOffset={0}
                title='Soạn Thảo Bài Viết'>
                {modalContent}
            </Modal>
            <Modal opened={openedPostAlert} onClose={closePostAlert} centered yOffset='1vh' xOffset={0} title=''>
                <form onSubmit={handleSubmit}>
                    <Group align='flex-end' noWrap>
                        <TextInput
                            type='email'
                            label='Nhập email của người nhận'
                            w={300}
                            value={email}
                            onChange={(e) => setEmail(e.value)}
                        />
                        <Button type='submit' rightIcon={<Mail />}>
                            Gửi
                        </Button>
                    </Group>
                </form>
            </Modal>
        </AuthGuard>
    )
}
Posts.Layout = Layout
export default Posts
