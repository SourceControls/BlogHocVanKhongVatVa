import {ActionIcon, Anchor, Badge, Button, Group, Modal, Select, Table, Text} from '@mantine/core'
import {FloatingLabelInput} from '@comp'
import Layout from '../Layout'
import {Edit, Search, Plus, ExternalLink, Trash} from 'tabler-icons-react'
import {useRouter} from 'next/router'
import {useState} from 'react'
import AdvertisementForm from './AdvertisementForm'
import {useDisclosure} from '@mantine/hooks'
import {useAdvertisements, deleteAdvertisement, formatDate} from '@util'
import AuthGuard from '../AuthGuard'

function Advertisement() {
    const [opened, {open, close}] = useDisclosure(false)
    const router = useRouter()
    const {
        advertisements: ads,
        isLoading,
        size,
        setSize,
        mutate,
    } = useAdvertisements('&limit=6&' + router.asPath.split('?')[1])
    const [modalContent, setModalContent] = useState()
    const changeQuery = (key, value) => {
        router.push({
            query: {
                ...router.query,
                [key]: value,
            },
        })
    }
    const handleDelete = async (id) => {
        let rs = await deleteAdvertisement(id)
        if (rs.advertisementId) {
            const newItems = ads.filter((item) => item.advertisementId !== rs.advertisementId)
            mutate(newItems, false)
        }
    }
    return (
        <AuthGuard allowedRoles={['ADMIN', 'SUPERADMIN']}>
            <Group mb='38px' noWrap align='flex-end'>
                <Text mr='auto' size='xl' fw='bold'>
                    Quảng cáo
                </Text>
                <FloatingLabelInput
                    ml='xl'
                    label='Tìm Kiếm'
                    placeholder='Nhập từ khóa...'
                    icon={<Search />}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            changeQuery('searchKey', e.target.value)
                        }
                    }}
                />
                <Select
                    defaultValue=''
                    data={[
                        {value: '', label: 'Tất cả'},
                        {value: 'true', label: 'Đang hiển thị'},
                        {value: 'false', label: 'Hàng chờ'},
                    ]}
                    onChange={(val) => changeQuery('visibility', val)}
                />
                <Select
                    defaultValue=''
                    data={[
                        {value: '', label: 'Gần đây'},
                        {value: 'clickCount', label: 'Nhiều click'},
                        {value: 'price', label: 'Giá giá cao nhất'},
                    ]}
                    onChange={(val) => changeQuery('sortBy', val)}
                />

                <Button
                    leftIcon={<Plus />}
                    onClick={() => {
                        setModalContent(<AdvertisementForm close={close} mutate={mutate} ads={ads} />)
                        open()
                    }}>
                    Tạo
                </Button>
            </Group>
            <Table w='100%' verticalSpacing='md'>
                <thead>
                    <tr>
                        <th>Tiêu đề</th>
                        <th>Vị trí</th>
                        <th>Lượt click </th>
                        <th>Bắt đầu</th>
                        <th>Kết thúc</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {ads &&
                        ads.map((item, index) => (
                            <tr key={index} w='100%' py='xs' style={{borderTop: '1px solid #ccc'}}>
                                <td width='40%' style={{paddingRight: '32px'}}>
                                    <Anchor href='/search?tags=tam-cam' target='_blank'>
                                        <Text fw='bold' size='lg' lineClamp={1}>
                                            <Group spacing='xs'>
                                                {item.title}
                                                <ExternalLink />
                                            </Group>
                                        </Text>
                                    </Anchor>
                                    <Text>{item.description}</Text>
                                </td>
                                <td>
                                    {item.displayPosition == 'HOME'
                                        ? 'Trang chủ'
                                        : item.displayPosition == 'SEARCH'
                                        ? 'Trang tìm kiếm'
                                        : 'Trang đọc'}
                                </td>
                                <td>
                                    <Badge color='green'>{item.clickCount}</Badge>
                                    {/* <Badge color='green'>{item.impressionCount}</Badge>
                                    <Text align='center'>
                                        Rating: {(item.clickCount / item.impressionCount).toFixed(2)}
                                    </Text> */}
                                </td>
                                <td>
                                    <Text> {new Date(item.startDate).toLocaleDateString('vi')}</Text>
                                    <Text color='dimmed'> {formatDate(item.startDate)}</Text>
                                </td>
                                <td>
                                    <Text> {new Date(item.endDate).toLocaleDateString('vi')}</Text>
                                    <Text color='dimmed'> {formatDate(item.endDate)}</Text>
                                </td>
                                <td>
                                    <Group ml='auto'>
                                        <ActionIcon
                                            onClick={() => {
                                                setModalContent(
                                                    <AdvertisementForm
                                                        close={close}
                                                        ad={item}
                                                        mutate={mutate}
                                                        ads={ads}
                                                    />,
                                                )
                                                open()
                                            }}>
                                            <Edit />
                                        </ActionIcon>
                                        <ActionIcon color='red' onClick={() => handleDelete(item.advertisementId)}>
                                            <Trash />
                                        </ActionIcon>
                                    </Group>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
            <Button mx='auto' display='block' px='xl' mt='xl' onClick={() => setSize(size + 1)}>
                Xem thêm
            </Button>
            <Modal opened={opened} size='xl' onClose={close} centered yOffset='1vh' xOffset={0} title='Quảng cáo'>
                {modalContent}
            </Modal>
        </AuthGuard>
    )
}
Advertisement.Layout = Layout
export default Advertisement
