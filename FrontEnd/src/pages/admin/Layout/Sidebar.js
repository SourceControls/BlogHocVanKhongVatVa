import {Navbar, Tooltip, Modal} from '@mantine/core'
import {IconLogout, IconUsersGroup, IconUser, IconNews, IconSettings} from '@tabler/icons-react'
import Link from 'next/link'
import {useEffect, useState} from 'react'
import Setting from '../Setting'
import useStyles from './style'
import {useDisclosure} from '@mantine/hooks'
const navItem = [
    {link: '/admin/manage-post', label: 'Quản Lý Bài Viết', icon: IconNews},
    {link: '/admin/manage-user', label: 'Quản Lý Người Dùng', icon: IconUsersGroup},
    {link: '/admin/profile', label: 'Thông Tin Cá Nhân', icon: IconUser},
]
function Sidebar() {
    const {classes, cx} = useStyles()
    const [opened, {open, close}] = useDisclosure(false)
    const [active, setActive] = useState(navItem[0].label)
    useEffect(() => {
        console.log(navItem)
    }, [])
    return (
        <>
            <Navbar width={{base: 80}} p='md' className={classes.navbar}>
                <Navbar.Section grow>
                    {navItem.map((item) => (
                        <Tooltip label={item.label} key={item.label}>
                            <Link
                                className={cx(classes.link, {[classes.linkActive]: item.label === active})}
                                href={item.link}
                                key={item.label}
                                onClick={() => {
                                    setActive(item.label)
                                }}
                                passHref>
                                <item.icon className={classes.linkIcon} stroke={2} size={28} />
                            </Link>
                        </Tooltip>
                    ))}
                </Navbar.Section>
                <Navbar.Section>
                    <Tooltip label='Cài đặt'>
                        <Link href='#' onClick={open} className={classes.link}>
                            <IconSettings className={classes.linkIcon} stroke={2} size={28} />
                        </Link>
                    </Tooltip>
                    <Tooltip label='Đăng xuất'>
                        <Link href='/sign-in' className={classes.link}>
                            <IconLogout className={classes.linkIcon} stroke={2} size={28} />
                        </Link>
                    </Tooltip>
                </Navbar.Section>
            </Navbar>
            <Modal size='40vw' opened={opened} onClose={close} centered yOffset='1vh' xOffset={0}>
                <Setting />
            </Modal>
        </>
    )
}

export default Sidebar
