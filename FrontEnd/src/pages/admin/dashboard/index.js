import {AspectRatio, Box, Grid, Group, Paper, Stack, Text} from '@mantine/core'
import {IconEye, IconMessage, IconNews, IconTag, IconThumbDown, IconThumbUp} from '@tabler/icons-react'
import 'chart.js/auto'
import {Bar, Chart, Line} from 'react-chartjs-2'
import {usePosts} from '@util'
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
                            labels: data.map((row) => row.type),
                            datasets: [
                                {
                                    data: data.map((row) => row.count),
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
                Bài viết tiêu biểu
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
                                        <Text> {item.likeCount}</Text>
                                    </Group>
                                    <Group spacing='xs'>
                                        <IconThumbDown />
                                        <Text> {item.dislikeCount}</Text>
                                    </Group>
                                </Group>
                            </Text>
                        </Stack>
                    </Group>
                ))}
        </div>
    )
}

function Interaction() {
    return (
        <Paper shadow='md' withBorder p='xl' radius='xl' h='100%' display='block'>
            <Stack>
                <Text fw='bold' align='center' size='1.4rem'>
                    Hoạt động
                </Text>
                <Group align='center'>
                    <IconEye />
                    <Text fw='bold' size='1.3rem'>
                        {'634.2k'}
                    </Text>
                </Group>
                <Group align='center'>
                    <IconThumbUp />
                    <Text fw='bold' size='1.3rem'>
                        {'12.6k'}
                    </Text>
                </Group>
                <Group align='center'>
                    <IconThumbDown />
                    <Text fw='bold' size='1.3rem'>
                        {924}
                    </Text>
                </Group>
                <Group align='center'>
                    <IconMessage />
                    <Text fw='bold' size='1.3rem'>
                        {523}
                    </Text>
                </Group>
                <Group align='center'>
                    <IconTag />
                    <Text fw='bold' size='1.3rem'>
                        {24}
                    </Text>
                </Group>
            </Stack>
        </Paper>
    )
}

function NewUser() {
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
    const data = {
        labels,
        datasets: [
            {
                label: '',
                data: labels.map(() => Math.round(Math.random() * 100)),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                tension: 0.3,
            },
        ],
    }

    return (
        // <Box h='30vh'>
        <Stack>
            <Line options={options} data={data} />
        </Stack>
        // </Box>
    )
}
function UserRole() {
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
    const labels = ['Admin', 'Contributor', 'Viewer']
    const data = {
        labels,
        datasets: [
            {
                // axis: 'y',
                label: '',
                data: [3, 6, 20],
                borderWidth: 1,
            },
        ],
    }

    return (
        // <Box h='30vh'>
        <Bar options={options} data={data} />
        // </Box>
    )
}
function Dashboard() {
    const postData = [
        {type: 'Công khai', count: 40},
        {type: 'Nháp', count: 10},
        {type: 'Ẩn', count: 15},
    ]

    const userData = [
        {type: 'Viewer', count: 512},
        {type: 'Author', count: 12},
    ]
    return (
        <AuthGuard allowedRoles={['ADMIN', 'SUPERADMIN']}>
            <Grid align='stretch'>
                <Grid.Col span={7}>
                    <Paper shadow='md' withBorder p='xl' radius='xl' h='100%' display='block'>
                        <NewUser />
                    </Paper>
                </Grid.Col>
                <Grid.Col span={5}>
                    <Paper shadow='md' withBorder p='xl' radius='xl' h='100%' display='block'>
                        <UserRole />
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
                        data={postData}
                        total={postData.reduce((a, b) => a + b.count, 0)}
                        icon={<IconNews size='1.6rem' />}
                    />
                </Grid.Col>
                <Grid.Col span={2}>
                    <Interaction />
                </Grid.Col>
            </Grid>
        </AuthGuard>
    )
}
Dashboard.Layout = Layout
export default Dashboard
