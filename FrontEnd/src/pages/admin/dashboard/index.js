import {AspectRatio, Box, Grid, Group, LoadingOverlay, Paper, Stack, Text} from '@mantine/core'
import {IconEye, IconMessage, IconNews, IconTag, IconThumbDown, IconThumbUp} from '@tabler/icons-react'
import 'chart.js/auto'
import {Bar, Chart, Line} from 'react-chartjs-2'
import {usePosts, useDashboard} from '@util'
import AuthGuard from '../AuthGuard'
import Layout from '../Layout'
import {useState} from 'react'

function PostStatus({title, data, icon, total}) {
    return (
        <Paper shadow='md' withBorder p='xl' radius='xl' h='100%'>
            <Stack>
                <Group align='center' position='center'>
                    {icon}
                    <Text fw='bold' size='1.6rem'>
                        {total + ' '}

                        {title}
                    </Text>
                </Group>
                <Box pos='relative'>
                    <Chart
                        type='doughnut'
                        data={{
                            labels: ['Công khai', 'Nháp', 'Ẩn', 'Chờ Duyệt'],
                            datasets: [
                                {
                                    data: data.map((row) => row._count),
                                },
                            ],
                        }}></Chart>
                </Box>
            </Stack>
        </Paper>
    )
}

function TopPost() {
    const {posts, isLoading, size, setSize, mutate} = usePosts('&limit=3&sortBy=view')

    return (
        <div>
            <Text fw='bold' size='1.6rem' mb='md'>
                Bài viết nhiều người xem
            </Text>
            {posts[0]?.postId &&
                posts.map((item, index) => (
                    <Group key={index} w='100%' py='6px' style={{borderTop: '1px solid #ccc'}} spacing='0'>
                        <Box w='20%'>
                            <AspectRatio ratio={1920 / 1020}>
                                <img
                                    src={item.featuredImage}
                                    style={{borderRadius: '4px', objectFit: 'cover'}}
                                    alt=''
                                />
                            </AspectRatio>
                        </Box>
                        <Stack spacing='12px' w='80%' pl='20px'>
                            <Text fw='bold' size='1.1rem' lineClamp={1}>
                                {item.title}
                            </Text>
                            <Text color='dimmed'>
                                <Group>
                                    <Group spacing='xs'>
                                        <IconEye />
                                        <Text>{item.view}</Text>
                                    </Group>
                                    <Group spacing='xs'>
                                        <IconThumbUp />
                                        <Text> {item.like_Count}</Text>
                                    </Group>
                                    <Group spacing='xs'>
                                        <IconThumbDown />
                                        <Text> {item.dislike_Count}</Text>
                                    </Group>
                                </Group>
                            </Text>
                        </Stack>
                    </Group>
                ))}
        </div>
    )
}

function Interaction({data}) {
    return (
        <Paper shadow='md' withBorder p='xl' radius='xl' h='100%' display='block'>
            <Stack>
                <Text fw='bold' align='center' size='1.4rem'>
                    Hoạt động
                </Text>
                <Group align='center'>
                    <IconEye />
                    <Text fw='bold' size='1.3rem'>
                        {data.view > 1000 ? (data.view / 1000).toFixed(2) + 'k' : data.view}
                    </Text>
                </Group>
                <Group align='center'>
                    <IconThumbUp />
                    <Text fw='bold' size='1.3rem'>
                        {data.likeCount > 1000 ? (data.likeCount / 1000).toFixed(2) + 'k' : data.likeCount}
                    </Text>
                </Group>
                <Group align='center'>
                    <IconThumbDown />
                    <Text fw='bold' size='1.3rem'>
                        {data.dislikeCount > 1000 ? (data.dislikeCount / 1000).toFixed(2) + 'k' : data.dislikeCount}
                    </Text>
                </Group>
                <Group align='center'>
                    <IconMessage />
                    <Text fw='bold' size='1.3rem'>
                        {data.comment > 1000 ? (data.comment / 1000).toFixed(2) + 'k' : data.comment}
                    </Text>
                </Group>
                <Group align='center'>
                    <IconTag />
                    <Text fw='bold' size='1.3rem'>
                        {data.tag > 1000 ? (data.tag / 1000).toFixed(2) + 'k' : data.tag}
                    </Text>
                </Group>
            </Stack>
        </Paper>
    )
}

function NewUser({data}) {
    const [year, setYear] = useState(new Date().getFullYear())
    const options = {
        responsive: true,
        aspectRatio: 2,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Thành viên mới trong năm ' + new Date().getFullYear(),
            },
        },
    }
    const labels = [
        'Tháng 1',
        'Tháng 2',
        'Tháng 3',
        'Tháng 4',
        'Tháng 5',
        'Tháng 6',
        'Tháng 7',
        'Tháng 8',
        'Tháng 9',
        'Tháng 10',
        'Tháng 11',
        'Tháng 12',
    ]
    const chartData = {
        labels,
        datasets: [
            {
                data,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                tension: 0.3,
            },
        ],
    }

    return (
        // <Box h='30vh'>
        <Stack>
            <Line options={options} data={chartData} />
        </Stack>
        // </Box>
    )
}
function UserRole({data}) {
    const options = {
        responsive: true,
        aspectRatio: 1.4,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Nhóm người dùng',
            },
        },
        // indexAxis: 'y',
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            },
        },
    }
    const labels = ['QTV cao cấp', 'Quản trị viên', 'Cộng tác viên', 'Người xem']
    const chartData = {
        labels,
        datasets: [
            {
                // axis: 'y',
                label: '',
                data: data.map((e) => e._count),
                borderWidth: 1,
            },
        ],
    }

    return (
        // <Box h='30vh'>
        <Bar options={options} data={chartData} />
        // </Box>
    )
}
function Dashboard() {
    const {dashboard, isLoading} = useDashboard(new Date().getFullYear())

    if (isLoading || !dashboard?.user) return <LoadingOverlay visible />
    return (
        <AuthGuard allowedRoles={['ADMIN', 'SUPERADMIN']}>
            <Grid align='stretch'>
                <Grid.Col span={7}>
                    <Paper shadow='md' withBorder p='xl' radius='xl' h='100%' display='block'>
                        <NewUser data={dashboard.user.newRegister} />
                    </Paper>
                </Grid.Col>
                <Grid.Col span={5}>
                    <Paper shadow='md' withBorder p='xl' radius='xl' h='100%' display='block'>
                        <UserRole data={dashboard.user.groupByRole} />
                    </Paper>
                </Grid.Col>
                <Grid.Col span={7}>
                    <Paper shadow='md' withBorder p='xl' radius='xl' h='100%' display='block'>
                        <TopPost />
                    </Paper>
                </Grid.Col>
                <Grid.Col span={3}>
                    <PostStatus
                        title='Bài viết'
                        data={dashboard.post.classify}
                        total={dashboard.post.classify.reduce((a, b) => a + b._count, 0)}
                        icon={<IconNews size='1.6rem' />}
                    />
                </Grid.Col>
                <Grid.Col span={2}>
                    <Interaction data={dashboard.post.reaction} />
                </Grid.Col>
            </Grid>
        </AuthGuard>
    )
}
Dashboard.Layout = Layout
export default Dashboard
