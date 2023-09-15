import {LoadingOverlay} from '@mantine/core'
import {IconAdjustments, IconBook2, IconNews, IconTags, IconUsersGroup, IconDashboard} from '@tabler/icons-react'
import {useSettings, useUsers} from '@util'
import {useRouter} from 'next/router'
import {Col, Container, Row} from 'react-bootstrap'
import Link from 'next/link'
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
    const {users, mutate, isLoading: isUserLoading} = useUsers('', '/profile')
    const router = useRouter()
    const {settings, isLoading} = useSettings()

    if (isUserLoading) return <LoadingOverlay visible />
    if (!users[0]?.role || users[0]?.role === 'VIEWER') {
        router.push('/home#signIn')
        return <></>
    }
    return (
        <Container fluid>
            <Row>
                <Col xs={2} className='p-0'>
                    <ul className='sidebar list-unstyled ps-0'>
                        <li>
                            <a href='#' className='nav-link link-dark'>
                                <IconDashboard />
                                Số liệu
                            </a>
                        </li>
                        <li className=''>
                            <div className='d-flex align-items-center'>
                                <IconNews size='1.8rem' className='p-1 rounded bg-muted' />
                                <button
                                    className='btn btn-toggle align-items-center rounded collapsed'
                                    data-bs-toggle='collapse'
                                    data-bs-target='#home-collapse'
                                    aria-expanded='true'>
                                    Bài viết
                                </button>
                            </div>
                            <div className='collapse show sidebar-collapse' id='home-collapse'>
                                <ul className='btn-toggle-nav list-unstyled fw-normal pb-1 small '>
                                    <li className='mt-2 ms-3'>
                                        <a href='#' className='link-dark rounded'>
                                            Nháp
                                        </a>
                                    </li>
                                    <li className='mt-2 ms-3'>
                                        <a href='#' className='link-dark rounded'>
                                            Chờ Duyệt
                                        </a>
                                    </li>
                                    <li className='mt-2 ms-3'>
                                        <a href='#' className='link-dark rounded'>
                                            Công khai
                                        </a>
                                    </li>
                                    <li className='mt-2 ms-3'>
                                        <a href='#' className='link-dark rounded'>
                                            Đã Ẩn
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className=''>
                            <div className='d-flex align-items-center'>
                                <IconUsersGroup size='1.8rem' className='p-1 rounded bg-muted' />
                                <button
                                    className='btn btn-toggle align-items-center rounded collapsed'
                                    data-bs-toggle='collapse'
                                    data-bs-target='#orders-collapse'
                                    aria-expanded='false'>
                                    Người dùng
                                </button>
                            </div>
                            <div className='collapse sidebar-collapse' id='orders-collapse'>
                                <ul className='btn-toggle-nav list-unstyled fw-normal pb-1 small'>
                                    <li className='mt-2 ms-3'>
                                        <Link href='users' className='link-dark rounded'>
                                            Người xem
                                        </Link>
                                    </li>
                                    <li className='mt-2 ms-3'>
                                        <a href='#' className='link-dark rounded'>
                                            Cộng tác viên
                                        </a>
                                    </li>
                                    <li className='mt-2 ms-3'>
                                        <a href='#' className='link-dark rounded'>
                                            Quản trị viên
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className='border-top my-3'></li>
                        <li className=''>
                            <button
                                className='btn btn-toggle align-items-center rounded collapsed'
                                data-bs-toggle='collapse'
                                data-bs-target='#account-collapse'
                                aria-expanded='false'>
                                Account
                            </button>
                            <div className='collapse sidebar-collapse' id='account-collapse'>
                                <ul className='btn-toggle-nav list-unstyled fw-normal pb-1 small'>
                                    <li className='mt-2 ms-3'>
                                        <a href='#' className='link-dark rounded'>
                                            New...
                                        </a>
                                    </li>
                                    <li className='mt-2 ms-3'>
                                        <a href='#' className='link-dark rounded'>
                                            Profile
                                        </a>
                                    </li>
                                    <li className='mt-2 ms-3'>
                                        <a href='#' className='link-dark rounded'>
                                            Settings
                                        </a>
                                    </li>
                                    <li className='mt-2 ms-3'>
                                        <a href='#' className='link-dark rounded'>
                                            Sign out
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </Col>
                <Col xs={10}>{children}</Col>
            </Row>
        </Container>
    )
}
// <MantineProvider
//     theme={{
//         fontFamily: settings[1].fontFamily,
//         primaryColor: 'dark',
//         globalStyles: (theme) => {
//             theme.primaryColors = theme.colors['dark']
//             theme.backgroundColor = theme.colors['dark'][0]
//         },
//     }}>
//     <AppShell
//         bg='white'
//         navbar={
//             <Navbar height={'100vh'} width={{sm: 300}} p='md' className={classes.navbar}>
//                 <Navbar.Section className={classes.header}>
//                     <Link href='/home'>
//                         <Image src={settings[1].logo} width={rem(150)} alt='' />
//                     </Link>
//                 </Navbar.Section>

//                 <Navbar.Section grow className={classes.links} component={ScrollArea}>
//                     <div className={classes.linksInner}>{links}</div>
//                 </Navbar.Section>

//                 <Navbar.Section className={classes.footer}>
//                     <UserButton image={users[0]?.avatarImage} name={users[0]?.name} email={users[0]?.email} />
//                 </Navbar.Section>
//             </Navbar>
//         }>

//     </AppShell>
// </MantineProvider>
export default Layout
