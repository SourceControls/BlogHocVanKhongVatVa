'use client'
import {ActionIcon, Avatar, Box, Button, Flex, Group, Image, Menu, Modal, Paper, Text, TextInput} from '@mantine/core'
import Link from 'next/link'
import {ArrowBarToRight, Logout, MailOpened, User, UserCircle} from 'tabler-icons-react'
import {Auth, FloatingLabelInput} from '@comp'
import {useMediaQuery, useDisclosure} from '@mantine/hooks'
import {useRouter} from 'next/router'
import {IconHome, IconMessageCircle, IconSearch, IconSettings, IconTrash} from '@tabler/icons-react'
import {useState} from 'react'
import {useSettings, useUsers, signOut} from '@util'
import {toast} from 'react-toastify'
import ContributorForm from './ContributorForm'
import ProfileForm from './ProfileForm'
function Header({categories, active, setActive}) {
    const router = useRouter()
    const [openedContributorForm, {open: openContributorForm, close: closeContributorForm}] = useDisclosure(false)
    const [openedProfileForm, {open: openProfileForm, close: closeProfileForm}] = useDisclosure(false)
    const [searchKey, setSearchKey] = useState('')
    const smScreen = useMediaQuery('(max-width: 48em)')
    const {settings, isLoading} = useSettings()
    const {users, mutate: userMutate} = useUsers('', '/profile')

    if (!settings[0]) return <></>
    return (
        <>
            <Paper
                sx={(theme) => ({
                    backgroundColor: 'var(--primary-color-0)',
                    position: 'sticky',
                    zIndex: 11,
                    top: 0,
                })}
                shadow='sm'>
                <Flex className='limit-w' mx='auto' align='center' py='xs' px='md'>
                    <Box style={{flex: 1}}>
                        <Link href='/home' onClick={() => setActive(undefined)}>
                            {smScreen ? <IconHome /> : <Image width='200px' src={settings[1].logo} alt='' />}
                        </Link>
                    </Box>
                    <FloatingLabelInput
                        placeholder='Nhập tên tác phẩm, tác giả, chủ đề...'
                        label='Tìm kiếm'
                        radius='xl'
                        w='70%'
                        maw='400px'
                        value={searchKey}
                        onChange={(e) => {
                            setSearchKey(e.target.value)
                        }}
                        icon={<IconSearch size='1.5rem' stroke={2.5} />}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                console.log(searchKey)
                                searchKey.includes('#')
                                    ? router.push('/search?type=post&tag=' + searchKey.replace('#', ''))
                                    : router.push('/search?key=' + searchKey)
                            }
                        }}
                    />
                    {users[0]?.userId ? (
                        <Group style={{flex: 1}}>
                            <Menu shadow='md' width={200}>
                                <Menu.Target>
                                    <Group
                                        ml='auto'
                                        align='center'
                                        style={{width: 'fit-content', cursor: 'pointer'}}
                                        spacing='0'>
                                        <Avatar src={users[0].avatarImage} />
                                        <Text fw='bold'>{users[0].name}</Text>
                                    </Group>
                                </Menu.Target>

                                <Menu.Dropdown>
                                    <Menu.Item icon={<User size='1.2rem' />} onClick={openProfileForm}>
                                        Tài khoản
                                    </Menu.Item>
                                    {users[0].role !== 'VIEWER' && (
                                        <Menu.Item
                                            icon={<ArrowBarToRight size='1.2rem' />}
                                            onClick={() => router.push('/admin/posts')}>
                                            Quản lý
                                        </Menu.Item>
                                    )}
                                    {users[0].role === 'VIEWER' && (
                                        <Menu.Item icon={<MailOpened size='1.2rem' />} onClick={openContributorForm}>
                                            Trở thành cộng tác viên
                                        </Menu.Item>
                                    )}

                                    <Menu.Item
                                        icon={<Logout size='1.2rem' />}
                                        onClick={async () => {
                                            await signOut()
                                            userMutate([], false)
                                        }}>
                                        Đăng xuất
                                    </Menu.Item>
                                    <Menu.Divider />
                                    <Menu.Item
                                        color='red'
                                        icon={<IconTrash size='1.2rem' />}
                                        onClick={async () => {
                                            toast.info('Coming soon')
                                        }}>
                                        Xóa tài khoản
                                    </Menu.Item>
                                </Menu.Dropdown>
                            </Menu>
                        </Group>
                    ) : smScreen ? (
                        <ActionIcon ml='md' onClick={open}>
                            <UserCircle />
                        </ActionIcon>
                    ) : (
                        <Group style={{flex: 1}} position='right' spacing='xl'>
                            <Button variant='filled' onClick={() => router.push(router.asPath + '#signIn')}>
                                Đăng nhập
                            </Button>
                            <Button variant='outline' onClick={() => router.push(router.asPath + '#signUp')}>
                                Đăng kí
                            </Button>
                        </Group>
                    )}
                </Flex>
            </Paper>
            <Modal
                opened={router.asPath.includes('#signIn') || router.asPath.includes('#signUp')}
                onClose={() => {
                    router.push(
                        {pathname: router.pathname.replace('/client', ''), query: {...router.query}},
                        undefined,
                        {scroll: false},
                    )
                }}
                styles={(theme) => ({
                    content: {backgroundColor: theme.backgroundColor},
                    header: {backgroundColor: theme.backgroundColor},
                })}>
                <Auth
                    closeModal={() => {
                        router.push(
                            {pathname: router.pathname.replace('/client', ''), query: {...router.query}},
                            undefined,
                            {
                                scroll: false,
                            },
                        )
                    }}
                    userMutate={userMutate}></Auth>
            </Modal>
            <Modal
                opened={openedContributorForm}
                onClose={closeContributorForm}
                styles={(theme) => ({
                    content: {backgroundColor: theme.backgroundColor},
                    header: {backgroundColor: theme.backgroundColor},
                })}>
                <ContributorForm close={closeContributorForm} />
            </Modal>
            <Modal
                opened={openedProfileForm}
                onClose={closeProfileForm}
                styles={(theme) => ({
                    content: {backgroundColor: theme.backgroundColor},
                    header: {backgroundColor: theme.backgroundColor},
                })}>
                <ProfileForm close={closeProfileForm} />
            </Modal>
        </>
    )
}

export default Header
