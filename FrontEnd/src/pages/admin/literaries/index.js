import {ActionIcon, Box, Button, Group, Image, Modal, SegmentedControl, Select, Stack, Text, Title} from '@mantine/core'
import {FloatingLabelInput, ExtraInfo} from '@comp'
import Layout from '../Layout'
import {Edit, Eye, PresentationAnalytics, Search, ThumbUp, ThumbDown, Plus, News} from 'tabler-icons-react'
import {useDisclosure} from '@mantine/hooks'
import LiteraryForm from './LiteraryForm'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useForm} from '@mantine/form'
import {useEffect, useState} from 'react'
function Literaries() {
    const [opened, {open, close}] = useDisclosure(false)
    const [literaries, setLiteraries] = useState([])
    const router = useRouter()
    useEffect(() => {
        setLiteraries(router.query.visibility == 1 ? [1, 1, 1, 1] : [1, 1])
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
                        {value: 'publishedAt', label: 'Tạo gần đây'},
                        {value: 'posts', label: 'Nhiều Bài Viết'},
                        {value: 'view', label: 'Nhiều Lượt Xem'},
                        {value: 'like', label: 'Nhiều Lượt Like '},
                        {value: 'dislike', label: 'Nhiều Lượt Dislike '},
                    ]}
                    onChange={(val) => changeQuery('sort', val)}
                />
                <Button leftIcon={<Plus />} onClick={open}>
                    Tạo
                </Button>
            </Group>
            <div>
                {literaries.map(() => (
                    <Group w='100%' py='md' style={{borderTop: '1px solid #ccc'}} align='flex-start'>
                        <Image width='120px' src='https://i.ibb.co/W2zv6HF/T-m-C-m-1-removebg-preview.png' alt='' />
                        <Stack spacing='4px'>
                            <Text fw='bold' size='lg' lineClamp={1}>
                                Tấm Cám
                            </Text>
                            <Text color='dimmed'>
                                <Group>
                                    <Text color='red'>Công Khai</Text>
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
                            <Text>Tác giả: Khuyết Danh</Text>
                            <Link href='/search'>
                                <Group spacing='xs' sx={{'&:hover': {textDecoration: 'underline'}}}>
                                    <News />
                                    <Text>129 bài viết</Text>
                                </Group>
                            </Link>
                        </Stack>
                        <Group ml='auto' align='center'>
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
            <Modal size={1100} opened={opened} onClose={close} centered yOffset='1vh' xOffset={0} title='Tác Phẩm'>
                <LiteraryForm />
            </Modal>
        </>
    )
}
Literaries.Layout = Layout
export default Literaries
