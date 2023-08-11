import {ActionIcon, Anchor, Avatar, Badge, Button, Group, SegmentedControl, Select, Table, Text} from '@mantine/core'
import {FloatingLabelInput} from '@comp'
import Layout from '../Layout'
import {Edit, PresentationAnalytics, Search, News, ExternalLink} from 'tabler-icons-react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import {useUsers, formatDate} from '@util'
function Users() {
    const router = useRouter()
    const {users, isLoading, size, setSize} = useUsers('&limit=6&' + router.asPath.split('?')[1])

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
                            changeQuery('key', e.target.value)
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
                    onChange={(val) => changeQuery('role', val)}
                />
            </Group>
            <Table w='100%' verticalSpacing='md'>
                <thead>
                    <tr>
                        <th>Tên</th>
                        <th>Hoạt động</th>
                        <th>Ngày đăng kí</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users &&
                        users.map((item, index) => (
                            <tr w='100%' py='xs' style={{borderTop: '1px solid #ccc'}} key={index}>
                                <td width='60%'>
                                    <Group>
                                        <Avatar
                                            radius='50%'
                                            size='3rem'
                                            style={{border: '1px solid black'}}
                                            src={
                                                item.avatarImage ||
                                                'https://cdn-icons-png.flaticon.com/512/3001/3001764.png'
                                            }
                                            alt={item.name}
                                        />
                                        <div>
                                            <Text size='lg' fw='bold'>
                                                {item.name}
                                                {item.role == 'SUPERADMIN' && (
                                                    <Badge ml='md' color='grape'>
                                                        S-ADMIN
                                                    </Badge>
                                                )}
                                                {item.role == 'ADMIN' && (
                                                    <Badge ml='md' color='teal'>
                                                        admin
                                                    </Badge>
                                                )}
                                                {item.role == 'CONTRIBUTOR' && (
                                                    <Badge ml='md' color='orange'>
                                                        contrib
                                                    </Badge>
                                                )}
                                                {/* {item.role == 'VIEWER' && (
                                                    <Badge ml='md' color='dark'>
                                                        viewer
                                                    </Badge>
                                                )} */}
                                            </Text>
                                            <Text>{item.email}</Text>
                                        </div>
                                    </Group>
                                </td>

                                <td>
                                    <Group spacing='xs'>
                                        <News />
                                        <Text> {item._count?.createdPosts} bài viết</Text>
                                    </Group>
                                </td>
                                <td>
                                    <Text> {new Date(item.createdAt).toLocaleDateString()}</Text>
                                    <Text color='dimmed'>{formatDate(item.createdAt)}</Text>
                                </td>
                                <td>
                                    <Group ml='auto'>
                                        <Link href={'/admin/users/' + item.userId}>
                                            <ActionIcon>
                                                <Edit />
                                            </ActionIcon>
                                        </Link>
                                        <ActionIcon>
                                            <PresentationAnalytics />
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
        </>
    )
}
Users.Layout = Layout
export default Users
