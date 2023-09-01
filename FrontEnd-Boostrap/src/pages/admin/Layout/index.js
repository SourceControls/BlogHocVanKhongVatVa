import useStyles from './style'
import {
    Navbar,
    Group,
    Code,
    ScrollArea,
    rem,
    Image,
    Box,
    AppShell,
    MantineProvider,
    Text,
    Button,
    Center,
    LoadingOverlay,
} from '@mantine/core'
import {
    IconGauge,
    IconPresentationAnalytics,
    IconAdjustments,
    IconBook2,
    IconNews,
    IconTags,
    IconUsersGroup,
    IconAd,
    IconAd2,
    IconDashboard,
    IconHome,
} from '@tabler/icons-react'
import {UserButton, LinksGroup} from '@comp'
import {useSettings, useUsers} from '@util'
import {useEffect, useState} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'

let mockContributor = [
    // {label: 'Dashboard', icon: IconGauge},
    {
        label: 'Bài Viết',
        icon: IconNews,
        initiallyOpened: true,
        link: '/admin/posts',
        links: [
            {label: 'Nháp', link: '/admin/posts?status=draft'},
            {label: 'Chờ Duyệt', link: '/admin/posts?status=pending'},
            {label: 'Công Khai', link: '/admin/posts?status=published'},
            {label: 'Đã Ẩn', link: '/admin/posts?status=hide'},
        ],
    },
]

let mockAdmin = [
    {
        label: 'Văn Học',
        icon: IconBook2,
        link: '/admin/literaries',
        links: [
            {label: 'Tác Phẩm', link: '/admin/literaries'},
            {label: 'Danh Mục & Thể Loại', link: '/admin/categories'},
        ],
    },
    {label: 'Tags', link: '/admin/tags', icon: IconTags},
    // {label: 'Quảng cáo', link: '/admin/advertisement', icon: IconAd2},
    // {label: 'Phân Tích', link: '/admin/analytics', icon: IconPresentationAnalytics},
    {label: 'Cài đặt', link: '/admin/settings', icon: IconAdjustments},
]
let mockSuperAdmin = [
    {
        label: 'Người Dùng',
        icon: IconUsersGroup,
        link: '/admin/users',
        // links: [
        //     {label: 'Người xem', link: '/admin/users?role=VIEWER'},
        //     {label: 'Cộng tác viên', link: '/admin/users?role=CONTRIBUTOR'},
        //     {label: 'Quản trị viên', link: '/admin/users?role=ADMIN'},
        // ],
    },
]
export function Layout({children}) {
    const {classes} = useStyles()
    const {users, mutate, isLoading: isUserLoading} = useUsers('', '/profile')
    const router = useRouter()
    const [links, setLinks] = useState()
    const {settings, isLoading} = useSettings()

    useEffect(() => {
        if (isUserLoading) return
        let mockData = []
        if (users[0]?.role !== 'VIEWER') mockData = [...mockData, ...mockContributor]
        if (users[0]?.role === 'ADMIN' || users[0]?.role === 'SUPERADMIN')
            mockData = [{label: 'Tổng quan', link: '/admin/dashboard', icon: IconHome}, ...mockData, ...mockAdmin]
        if (users[0]?.role === 'SUPERADMIN') mockData = [...mockData, ...mockSuperAdmin]
        setLinks(
            <>
                {mockData.map((item) => (
                    <LinksGroup {...item} key={item.label} />
                ))}
            </>,
        )
    }, [users[0]?.role])
    if (isUserLoading) return <LoadingOverlay visible />
    if (!users[0]?.role || users[0]?.role === 'VIEWER') {
        router.push('/home#signIn')
        return <></>
    }
    return (
        <MantineProvider
            theme={{
                fontFamily: settings[1].fontFamily,
                primaryColor: 'dark',
                globalStyles: (theme) => {
                    theme.primaryColors = theme.colors['dark']
                    theme.backgroundColor = theme.colors['dark'][0]
                },
            }}>
            <AppShell
                bg='white'
                navbar={
                    <Navbar height={'100vh'} width={{sm: 300}} p='md' className={classes.navbar}>
                        <Navbar.Section className={classes.header}>
                            <Link href='/home'>
                                <Image src={settings[1].logo} width={rem(150)} alt='' />
                            </Link>
                        </Navbar.Section>

                        <Navbar.Section grow className={classes.links} component={ScrollArea}>
                            <div className={classes.linksInner}>{links}</div>
                        </Navbar.Section>

                        <Navbar.Section className={classes.footer}>
                            <UserButton image={users[0]?.avatarImage} name={users[0]?.name} email={users[0]?.email} />
                        </Navbar.Section>
                    </Navbar>
                }>
                <Box px='38px' pt='md' h='100%' pos='relative'>
                    {children}
                </Box>
            </AppShell>
        </MantineProvider>
    )
}
export default Layout
