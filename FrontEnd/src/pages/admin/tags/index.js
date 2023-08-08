import {ActionIcon, Anchor, Button, Group, Modal, SegmentedControl, Select, Table, Text} from '@mantine/core'
import {FloatingLabelInput} from '@comp'
import Layout from '../Layout'
import {Edit, PresentationAnalytics, Search, Plus, News, ExternalLink, Trash} from 'tabler-icons-react'
import {useRouter} from 'next/router'
import TagForm from './TagForm'
import {useDisclosure} from '@mantine/hooks'
import {useTags, deleteTag} from '@util'
import {useState} from 'react'
import AuthGuard from '../AuthGuard'

function Tags() {
    const [opened, {open, close}] = useDisclosure(false)
    const router = useRouter()
    const {tags, isLoading, size, setSize, mutate} = useTags('&limit=6&' + router.asPath.split('?')[1])
    const [modalContent, setModalContent] = useState(<TagForm close={close} mutate={mutate} tags={tags} />)
    const changeQuery = (key, value) => {
        router.push({
            query: {
                ...router.query,
                [key]: value,
            },
        })
    }

    const handleDelete = async (id) => {
        let rs = await deleteTag(id)
        if (rs.tagId) {
            const newItems = tags.filter((item) => item.tagId !== rs.tagId)
            mutate(newItems, false)
        }
    }
    return (
        <AuthGuard allowedRoles={['ADMIN', 'SUPERADMIN']}>
            <Group mb='38px' noWrap align='flex-end'>
                <Text mr='auto' size='xl' fw='bold'>
                    Tags
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
                        {value: '', label: 'Gần đây'},
                        {value: 'usedCount', label: 'Nhiều Lượt Sử Dụng'},
                    ]}
                    onChange={(val) => changeQuery('sortBy', val)}
                />

                <Button
                    leftIcon={<Plus />}
                    onClick={() => {
                        setModalContent(<TagForm close={close} mutate={mutate} tags={tags} />)
                        open()
                    }}>
                    Tạo
                </Button>
            </Group>
            <Table w='100%' verticalSpacing='md'>
                <thead>
                    <tr>
                        <th>Tên thẻ</th>
                        <th>URL</th>
                        <th>Hoạt động</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {tags &&
                        tags.map((item, index) => (
                            <tr w='100%' py='xs' style={{borderTop: '1px solid #ccc'}} key={index}>
                                <td width='50%'>
                                    <Text fw='bold' size='lg' lineClamp={1}>
                                        {item.tagName}
                                    </Text>
                                    <Text lineClamp={2} pr='xl'>
                                        {item.description}
                                    </Text>
                                </td>
                                <td>
                                    <Anchor href='/search?tags=tam-cam' target='_blank'>
                                        <Group spacing='xs'>
                                            {item.slug}
                                            <ExternalLink />
                                        </Group>
                                    </Anchor>
                                </td>
                                <td>
                                    <Group spacing='xs'>
                                        <News />
                                        <Text>{item.usedCount} lượt sử dụng</Text>
                                    </Group>
                                </td>
                                <td>
                                    <Group ml='auto'>
                                        <ActionIcon
                                            onClick={() => {
                                                setModalContent(
                                                    <TagForm close={close} tag={item} mutate={mutate} tags={tags} />,
                                                )
                                                open()
                                            }}>
                                            <Edit />
                                        </ActionIcon>
                                        <ActionIcon color='red' onClick={() => handleDelete(item.tagId)}>
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
            <Modal opened={opened} onClose={close} centered yOffset='1vh' xOffset={0} title='Tags'>
                {modalContent}
            </Modal>
        </AuthGuard>
    )
}
Tags.Layout = Layout
export default Tags
