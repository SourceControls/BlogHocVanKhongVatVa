import {ActionIcon, Anchor, Button, Group, Modal, SegmentedControl, Select, Table, Text} from '@mantine/core'
import {FloatingLabelInput} from '@comp'
import Layout from '../Layout'
import {Edit, PresentationAnalytics, Search, Plus, News, ExternalLink, Click} from 'tabler-icons-react'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import AdvertisementForm from './AdvertisementForm'
import {useDisclosure} from '@mantine/hooks'

function Advertisement() {
    const [opened, {open, close}] = useDisclosure(false)

    const [advertisements, setAdvertisementForm] = useState([])
    const router = useRouter()
    useEffect(() => {
        setAdvertisementForm(router.query.searchKey ? [1, 1] : [1, 1, 1, 1])
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
                <SegmentedControl
                    data={[
                        {value: '1', label: 'Đang hiển thị'},
                        {value: '0', label: 'Hàng chờ'},
                    ]}
                    onChange={(val) => changeQuery('visibility', val)}
                />
                <Select
                    defaultValue='publishedAt'
                    data={[
                        {value: 'publishedAt', label: 'Gần đây'},
                        {value: 'click', label: 'Nhiều click'},
                        {value: 'price', label: 'Giá tăng dần'},
                        {value: 'price', label: 'Giá giảm dần'},
                    ]}
                    onChange={(val) => changeQuery('sort', val)}
                />

                <Button leftIcon={<Plus />} onClick={open}>
                    Tạo
                </Button>
            </Group>
            <Table w='100%' verticalSpacing='md'>
                <thead>
                    <tr>
                        <th>Tiêu đề</th>
                        <th>Vị trí</th>
                        <th>Click</th>
                        <th>Bắt đầu</th>
                        <th>Kết thúc</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {advertisements &&
                        advertisements.map(() => (
                            <tr w='100%' py='xs' style={{borderTop: '1px solid #ccc'}}>
                                <td width='40%' style={{paddingRight: '32px'}}>
                                    <Anchor href='/search?tags=tam-cam' target='_blank'>
                                        <Text fw='bold' size='lg' lineClamp={1}>
                                            <Group spacing='xs'>
                                                Học bổng Úc
                                                <ExternalLink />
                                            </Group>
                                        </Text>
                                    </Anchor>
                                    <Text>Học bổng úc 2 năm trị giá 10 tỷ vnđ, dành cho sinh viên đủ năng lực.</Text>
                                </td>
                                <td>Trang chủ</td>
                                <td>115.801</td>
                                <td>
                                    <Text> 21-12-2023</Text>
                                    <Text color='dimmed'> 6 ngày trước</Text>
                                </td>
                                <td>
                                    <Text> 24-12-2023</Text>
                                    <Text color='dimmed'> 2 ngày sau</Text>
                                </td>
                                <td>
                                    <Group ml='auto'>
                                        <ActionIcon onClick={open}>
                                            <Edit />
                                        </ActionIcon>
                                        <ActionIcon>
                                            <PresentationAnalytics />
                                        </ActionIcon>
                                    </Group>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
            <Modal opened={opened} size='xl' onClose={close} centered yOffset='1vh' xOffset={0} title='Tags'>
                <AdvertisementForm />
            </Modal>
        </>
    )
}
Advertisement.Layout = Layout
export default Advertisement
