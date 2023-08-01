import useStyles from './style'
import {Navbar, Group, Code, ScrollArea, rem, Image, Box, AppShell, MantineProvider, Text} from '@mantine/core'
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
} from '@tabler/icons-react'
import {UserButton, LinksGroup} from '@comp'
import {useSettings, useUsers} from '@util'

const mockdata = [
    // {label: 'Dashboard', icon: IconGauge},
    {
        label: 'Bài Viết',
        icon: IconNews,
        initiallyOpened: true,
        link: '/admin/posts',
        links: [
            {label: 'Nháp', link: '/admin/posts'},
            {label: 'Chờ Duyệt', link: '/admin/posts'},
            {label: 'Công Khai', link: '/admin/posts'},
            {label: 'Đã Ẩn', link: '/admin/posts'},
        ],
    },
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
    {
        label: 'Người Dùng',
        icon: IconUsersGroup,
        link: '/admin/users',
        links: [
            {label: 'Viewer', link: '/admin/users'},
            {label: 'Contributor', link: '/admin/users'},
            {label: 'Admin', link: '/admin/users'},
        ],
    },
    {label: 'Quảng cáo', link: '/admin/advertisement', icon: IconAd2},
    {label: 'Phân Tích', link: '/admin/analytics', icon: IconPresentationAnalytics},
    {label: 'Cài đặt', link: '/admin/settings', icon: IconAdjustments},
]

export function Layout({children}) {
    const {classes} = useStyles()
    const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />)
    const {settings, isLoading} = useSettings()
    const {users, mutate, isLoading: isUserLoading} = useUsers(undefined, '/profile')
    if (isUserLoading) {
        return <Text>Loading...</Text>
    }
    if (!users[0]?.userId) {
        return <Text>404 Error</Text>
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
                            <Group position='apart'>
                                <Image src={settings[1].logo} width={rem(120)} />
                            </Group>
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
