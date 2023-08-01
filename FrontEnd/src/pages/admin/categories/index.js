import {ActionIcon, Anchor, Button, Group, Modal, Select, Table, Text} from '@mantine/core'
import {FloatingLabelInput} from '@comp'
import Layout from '../Layout'
import {Edit, PresentationAnalytics, Search, Plus, ExternalLink, Trash} from 'tabler-icons-react'
import {useRouter} from 'next/router'
import {useState} from 'react'
import CategoryForm from './CategoryForm'
import {useDisclosure} from '@mantine/hooks'
import {IconBook2} from '@tabler/icons-react'
import {useCategories, deleteCategory} from '@util'

function Categories() {
    const router = useRouter()
    const [opened, {open, close}] = useDisclosure(false)
    const {categories, isLoading, size, setSize, mutate} = useCategories('&limit=6&' + router.asPath.split('?')[1])
    const [modalContent, setModalContent] = useState(
        <CategoryForm close={close} mutate={mutate} categories={categories} />,
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
        let rs = await deleteCategory(id)
        if (rs.categoryId) {
            const newItems = categories.filter((item) => item.categoryId !== rs.categoryId)
            mutate(newItems, false)
        }
    }
    console.log(1)
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
                        {value: 'literaryCount', label: 'Nhiều tác phẩm'},
                    ]}
                    onChange={(val) => changeQuery('sortBy', val)}
                />

                <Button
                    leftIcon={<Plus />}
                    onClick={() => {
                        setModalContent(<CategoryForm close={close} mutate={mutate} categories={categories} />)
                        open()
                    }}>
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
                        categories.map((item, index) => (
                            <tr key={index} w='100%' py='xs' style={{borderTop: '1px solid #ccc'}}>
                                <td width='50%'>
                                    <Text fw='bold' size='lg' lineClamp={1}>
                                        {item.categoryName}
                                    </Text>
                                    <Text lineClamp={2} pr='xl'>
                                        {item.description}
                                    </Text>
                                </td>
                                <td>
                                    <Anchor href={'/search?category=' + item.slug} target='_blank'>
                                        <Group spacing='xs'>
                                            <Text lineClamp={1} maw='230px'>
                                                {item.slug}
                                            </Text>
                                            <ExternalLink />
                                        </Group>
                                    </Anchor>
                                </td>
                                <td>
                                    <Group spacing='xs'>
                                        <IconBook2 />
                                        {item.literaryCategory?.length + ' '}
                                        Tác Phẩm
                                    </Group>
                                </td>
                                <td>
                                    <Group ml='auto'>
                                        <ActionIcon
                                            onClick={() => {
                                                setModalContent(
                                                    <CategoryForm
                                                        close={close}
                                                        category={item}
                                                        mutate={mutate}
                                                        categories={categories}
                                                    />,
                                                )
                                                open()
                                            }}>
                                            <Edit />
                                        </ActionIcon>
                                        <ActionIcon color='red' onClick={() => handleDelete(item.categoryId)}>
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
            <Modal opened={opened} onClose={close} centered yOffset='1vh' xOffset={0} title='Danh Mục'>
                {modalContent}
            </Modal>
        </>
    )
}
Categories.Layout = Layout
export default Categories
