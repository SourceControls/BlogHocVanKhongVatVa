import {ActionIcon, Button, Group, Image, Modal, Select, Stack, Text, Title} from '@mantine/core'
import {FloatingLabelInput} from '@comp'
import Layout from '../Layout'
import {Edit, Eye, Search, Plus, News, Trash} from 'tabler-icons-react'
import {useDisclosure} from '@mantine/hooks'
import LiteraryForm from './LiteraryForm'
import {useRouter} from 'next/router'
import {useState} from 'react'
import {useLiteries, deleteLiterary} from '@util'
import {IconStarFilled} from '@tabler/icons-react'
import AuthGuard from '../AuthGuard'

function Literaries() {
    const [opened, {open, close}] = useDisclosure(false)
    const router = useRouter()
    const {literaries, isLoading, size, setSize, mutate} = useLiteries('&limit=6&' + router.asPath.split('?')[1])
    const [modalContent, setModalContent] = useState(
        <LiteraryForm close={close} mutate={mutate} literaries={literaries} />,
    )

    const changeQuery = (key, value) => {
        router.push({
            query: {
                ...router.query,
                [key]: value,
            },
        })
    }
    const handleDelete = async (id) => {
        let rs = await deleteLiterary(id)
        if (rs.literaryId) {
            const newItems = literaries.filter((item) => item.literaryId !== rs.literaryId)
            mutate(newItems, false)
        }
    }
    return (
        <AuthGuard allowedRoles={['ADMIN', 'SUPERADMIN']}>
            <Group mb='38px' noWrap align='flex-end'>
                <Title mr='auto' order={2} style={{whiteSpace: 'noWrap'}}>
                    Tác Phẩm
                </Title>
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
                        {value: '', label: 'Tất cả'},
                        {value: 'true', label: 'Công Khai'},
                        {value: 'false', label: 'Đã Ẩn'},
                    ]}
                    onChange={(val) => changeQuery('visibility', val)}
                />
                <Select
                    defaultValue=''
                    data={[
                        {value: '', label: 'Tạo gần đây'},
                        {value: 'postCount', label: 'Nhiều Bài Viết'},
                        {value: 'view', label: 'Nhiều Lượt Xem'},
                    ]}
                    onChange={(val) => changeQuery('sortBy', val)}
                />
                <Button
                    leftIcon={<Plus />}
                    onClick={() => {
                        setModalContent(<LiteraryForm close={close} mutate={mutate} literaries={literaries} />)
                        open()
                    }}>
                    Tạo
                </Button>
            </Group>
            <div>
                {literaries.map((item, index) => (
                    <Group key={index} w='100%' py='md' style={{borderTop: '1px solid #ccc'}} align='flex-start'>
                        <Image width='120px' src={item.image} alt={item.name} />
                        <Stack spacing='4px'>
                            <Group align='center'>
                                <Text fw='bold' size='lg' lineClamp={2}>
                                    {item.title}
                                </Text>
                                {item.featured && <IconStarFilled size='1rem' />}
                            </Group>
                            <Text>Tác giả: {item.authorName}</Text>

                            <Text color='dimmed'>
                                <Text color='red'>{item.visibility ? 'Công khai' : 'Đã ẩn'}</Text>
                                <Group spacing='xs'>
                                    <Eye />
                                    <Text>{item.view} lượt xem</Text>
                                </Group>
                                <Group spacing='xs'>
                                    <News />

                                    <Text>{item.postCount} bài viết</Text>
                                </Group>
                            </Text>
                        </Stack>
                        <Group ml='auto' align='center'>
                            <ActionIcon
                                size='xl'
                                onClick={() => {
                                    setModalContent(
                                        <LiteraryForm
                                            close={close}
                                            literary={item}
                                            mutate={mutate}
                                            literaries={literaries}
                                        />,
                                    )
                                    open()
                                }}>
                                <Edit />
                            </ActionIcon>
                            <ActionIcon
                                size='xl'
                                color='red'
                                onClick={() => {
                                    handleDelete(item.literaryId)
                                }}>
                                <Trash />
                            </ActionIcon>
                        </Group>
                    </Group>
                ))}
            </div>
            <Button mx='auto' display='block' px='xl' mt='xl' onClick={() => setSize(size + 1)}>
                Xem thêm
            </Button>
            <Modal size={1100} opened={opened} onClose={close} centered yOffset='1vh' xOffset={0} title='Tác Phẩm'>
                {modalContent}
            </Modal>
        </AuthGuard>
    )
}
Literaries.Layout = Layout
export default Literaries
