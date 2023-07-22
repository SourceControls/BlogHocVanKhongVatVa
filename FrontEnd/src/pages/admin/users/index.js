import {ActionIcon, Anchor, Avatar, Badge, Group, SegmentedControl, Select, Table, Text} from '@mantine/core'
import {FloatingLabelInput} from '@comp'
import Layout from '../Layout'
import {Edit, PresentationAnalytics, Search, News, ExternalLink} from 'tabler-icons-react'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'

function Users() {
    const [users, setUser] = useState([])
    const router = useRouter()
    useEffect(() => {
        setUser(router.query.searchKey ? [1, 1] : [1, 1, 1, 1])
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
                    Người Dùng
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
                        {value: 'ACTIVE', label: 'Hoạt động'},
                        {value: 'BANNED', label: 'Đã cấm'},
                    ]}
                    onChange={(val) => changeQuery('status', val)}
                />
                <Select
                    defaultValue=''
                    data={[
                        {value: '', label: 'Tất cả'},
                        {value: 'VIEWER', label: 'Người xem'},
                        {value: 'CONTRIBUTOR', label: 'Người đóng góp'},
                        {value: 'ADMIN', label: 'Quản trị viên'},
                    ]}
                    onChange={(val) => changeQuery('group', val)}
                />
            </Group>
            <Table w='100%' verticalSpacing='md'>
                <thead>
                    <tr>
                        <th>Tổng thành viên: 6</th>
                        <th>URL</th>
                        <th>Hoạt động</th>
                        <th>Ngày đăng kí</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users &&
                        users.map(() => (
                            <tr w='100%' py='xs' style={{borderTop: '1px solid #ccc'}}>
                                <td width='40%'>
                                    <Group>
                                        <Avatar src='https://cdn-icons-png.flaticon.com/512/3001/3001764.png' />
                                        <div>
                                            <Text size='lg' fw='bold'>
                                                Bùi Tuấn Hùng
                                                <Badge ml='md' color='grape'>
                                                    super admin
                                                </Badge>
                                                {/* <Badge ml='md' color='teal'>
                                                    admin
                                                </Badge>
                                                <Badge ml='md' color='orange'>
                                                    contributor
                                                </Badge>
                                                <Badge ml='md' color='dark'>
                                                    viewer
                                                </Badge> */}
                                            </Text>
                                            <Text>admin@vietlit.edu.vn</Text>
                                        </div>
                                    </Group>
                                </td>
                                <td>
                                    <Anchor href='/search?tags=tam-cam' target='_blank'>
                                        <Group spacing='xs'>
                                            vietlit-admin
                                            <ExternalLink />
                                        </Group>
                                    </Anchor>
                                </td>
                                <td>
                                    <Group spacing='xs'>
                                        <News />
                                        12 bài viết
                                    </Group>
                                </td>
                                <td>
                                    <Text> 21-12-2023</Text>
                                    <Text color='dimmed'> 12 ngày trước</Text>
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
        </>
    )
}
Users.Layout = Layout
export default Users
