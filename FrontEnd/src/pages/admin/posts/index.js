import {ActionIcon, Box, Button, Group, Modal, Select, Stack, Text, Title} from '@mantine/core'
import {FloatingLabelInput, ExtraInfo} from '@comp'
import Layout from '../Layout'
import {Edit, Eye, PresentationAnalytics, Search, ThumbUp, ThumbDown, Plus} from 'tabler-icons-react'
import MyEditor from './MyEditor'
import {useDisclosure} from '@mantine/hooks'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'

function Posts() {
    const [opened, {open, close}] = useDisclosure(false)

    const [posts, setPosts] = useState([])
    const router = useRouter()
    useEffect(() => {
        setPosts(router.query.searchKey ? [1, 1] : [1, 1, 1, 1, 1, 1])
        console.log(router.asPath)
    }, [router.query.searchKey, router.query.visibility, router.query.sort])
    const changeQuery = (key, value) => {
        router.push({
            query: {
                ...router.query,
                [key]: value,
            },
        })
    }
    return (
        <>
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
                    defaultValue='publishedAt'
                    data={[
                        {value: 'publishedAt', label: 'Mới nhất'},
                        {value: 'view', label: 'Nhiều Lượt Xem'},
                        {value: 'like', label: 'Nhiều Lượt Like '},
                        {value: 'dislike', label: 'Nhiều Lượt Dislike '},
                    ]}
                    onChange={(val) => changeQuery('sort', val)}
                />
                <Select
                    defaultValue=''
                    data={[
                        {value: '', label: 'Tất Cả Bài Viết'},
                        {value: 'draft', label: 'Nháp'},
                        {value: 'pending', label: 'Chờ Duyệt'},
                        {value: 'published', label: 'Công Khai'},
                        {value: 'hide', label: 'Đã Ẩn'},
                        {value: 'featured', label: 'Nổi Bật'},
                    ]}
                    onChange={(val) => changeQuery('status', val)}
                />
                <Select
                    defaultValue=''
                    searchable
                    nothingFound='Không tìm thấy'
                    maxDropdownHeight={280}
                    data={[
                        {value: '', label: 'Tất Cả Tác Giả'},
                        {value: 'author1', label: 'Tuấn Hùng'},
                        {value: 'author2', label: 'Mỹ Linh'},
                    ]}
                    onChange={(val) => changeQuery('author', val)}
                />

                <Button leftIcon={<Plus />} onClick={open}>
                    Tạo
                </Button>
            </Group>
            <div>
                {posts &&
                    posts.map(() => (
                        <Group w='100%' py='md' style={{borderTop: '1px solid #ccc'}}>
                            <Stack spacing='4px'>
                                <Text fw='bold' size='lg' lineClamp={1}>
                                    Phân tích nhân vật nhiếp ảnh gia Phùng trong truyện ngắn Chiếc thuyền ngoài xa.
                                </Text>
                                <Text>
                                    <ExtraInfo publisherName='Tuấn Hùng' publishedAt='02/11/2021' color='dimmed' />
                                </Text>
                                <Text color='dimmed'>
                                    <Group>
                                        <Text color='red'>Published</Text>
                                        {'-'}
                                        <Group spacing='xs'>
                                            <Eye />
                                            113.6k
                                        </Group>
                                        <Group spacing='xs'>
                                            <ThumbUp />
                                            <Text>11.2k</Text>
                                        </Group>
                                        <Group spacing='xs'>
                                            <ThumbDown />
                                            <Text>2.4k</Text>
                                        </Group>
                                    </Group>
                                </Text>
                            </Stack>
                            <Group ml='auto'>
                                <ActionIcon size='xl' onClick={open}>
                                    <Edit />
                                </ActionIcon>

                                <ActionIcon size='xl'>
                                    <PresentationAnalytics />
                                </ActionIcon>
                            </Group>
                        </Group>
                    ))}
            </div>
            <Modal
                size={1100}
                opened={opened}
                onClose={close}
                centered
                yOffset='1vh'
                xOffset={0}
                title='Soạn Thảo Bài Viết'>
                <MyEditor />
            </Modal>
        </>
    )
}
Posts.Layout = Layout
export default Posts
