import {ActionIcon, Anchor, Button, Group, Modal, SegmentedControl, Select, Table, Text} from '@mantine/core'
import {FloatingLabelInput} from '@comp'
import Layout from '../Layout'
import {Edit, PresentationAnalytics, Search, Plus, News, ExternalLink} from 'tabler-icons-react'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import CategoriesForm from './CategoriesForm'
import {useDisclosure} from '@mantine/hooks'
import {IconBook2} from '@tabler/icons-react'

function Categories() {
    const [opened, {open, close}] = useDisclosure(false)

    const [categories, setCategories] = useState([])
    const router = useRouter()
    useEffect(() => {
        setCategories(router.query.searchKey ? [1, 1] : [1, 1, 1, 1])
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
                    Danh Mục & Thể Loại
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
                    defaultValue='publishedAt'
                    data={[
                        {value: 'publishedAt', label: 'Gần đây'},
                        {value: 'literary', label: 'Nhiều tác phẩm'},
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
                        <th>Danh mục</th>
                        <th>URL</th>
                        <th>Tác phẩm</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {categories &&
                        categories.map(() => (
                            <tr w='100%' py='xs' style={{borderTop: '1px solid #ccc'}}>
                                <td width='60%'>
                                    <Text fw='bold' size='lg' lineClamp={1}>
                                        Thơ lục bát
                                    </Text>
                                    <Text lineClamp={3} pr='xl'>
                                        Truyện cổ tích thần kỳ là tập hợp những câu chuyện cổ tích được người dân Việt
                                        Nam sáng tạo và lưu truyền từ hàng trăm năm nay.
                                    </Text>
                                </td>
                                <td>
                                    <Anchor href='/search?category=tho-luc-bat' target='_blank'>
                                        <Group spacing='xs'>
                                            tho-luc-bat
                                            <ExternalLink />
                                        </Group>
                                    </Anchor>
                                </td>
                                <td>
                                    <Group spacing='xs'>
                                        <IconBook2 />
                                        18 Tác Phẩm
                                    </Group>
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
            <Modal opened={opened} onClose={close} centered yOffset='1vh' xOffset={0} title='Danh Mục'>
                <CategoriesForm />
            </Modal>
        </>
    )
}
Categories.Layout = Layout
export default Categories
