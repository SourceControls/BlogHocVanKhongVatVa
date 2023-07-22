import {ActionIcon, Anchor, Button, Group, Modal, SegmentedControl, Select, Table, Text} from '@mantine/core'
import {FloatingLabelInput} from '@comp'
import Layout from '../Layout'
import {Edit, PresentationAnalytics, Search, Plus, News, ExternalLink} from 'tabler-icons-react'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import TagsForm from './TagsForm'
import {useDisclosure} from '@mantine/hooks'

function Tags() {
    const [opened, {open, close}] = useDisclosure(false)

    const [tags, setTags] = useState([])
    const router = useRouter()
    useEffect(() => {
        setTags(router.query.searchKey ? [1, 1] : [1, 1, 1, 1])
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
                <SegmentedControl
                    data={[
                        {value: '1', label: 'Công Khai'},
                        {value: '0', label: 'Đã Ẩn'},
                    ]}
                    onChange={(val) => changeQuery('visibility', val)}
                />
                <Select
                    defaultValue='publishedAt'
                    data={[
                        {value: 'publishedAt', label: 'Gần đây'},
                        {value: 'usedCount', label: 'Nhiều Lượt Sử Dụng'},
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
                        <th>Tên thẻ</th>
                        <th>URL</th>
                        <th>Posts</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {tags &&
                        tags.map(() => (
                            <tr w='100%' py='xs' style={{borderTop: '1px solid #ccc'}}>
                                <td width='60%'>
                                    <Text fw='bold' size='lg' lineClamp={1}>
                                        Tấm Cám
                                    </Text>
                                </td>
                                <td>
                                    <Anchor href='/search?tags=tam-cam' target='_blank'>
                                        <Group spacing='xs'>
                                            tam-cam
                                            <ExternalLink />
                                        </Group>
                                    </Anchor>
                                </td>
                                <td>
                                    <Group spacing='xs'>
                                        <News />
                                        128 bài viết
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
            <Modal opened={opened} onClose={close} centered yOffset='1vh' xOffset={0} title='Tags'>
                <TagsForm />
            </Modal>
        </>
    )
}
Tags.Layout = Layout
export default Tags
