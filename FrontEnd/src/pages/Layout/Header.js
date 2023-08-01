'use client'
import {ActionIcon, Avatar, Box, Button, Flex, Group, Image, Modal, Paper, Text, TextInput} from '@mantine/core'
import Link from 'next/link'
import {UserCircle} from 'tabler-icons-react'
import {Auth, FloatingLabelInput} from '@comp'
import {useMediaQuery, useDisclosure} from '@mantine/hooks'
import {useRouter} from 'next/router'
import {IconHome, IconSearch} from '@tabler/icons-react'
import {useState} from 'react'
import {useSettings, useUsers} from '@util'
function Header({categories, active, setActive}) {
    const router = useRouter()
    const [searchKey, setSearchKey] = useState('')
    const [opened, {open, close}] = useDisclosure(false)
    const smScreen = useMediaQuery('(max-width: 48em)')
    const {settings, isLoading} = useSettings()
    const {users, mutate} = useUsers(undefined, '/profile')
    const closeModal = (props) => {
        close(props)
        router.push(router.asPath, undefined, {shallow: true})
    }
    const signOut = () => {}
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
                    {/* <Nav categories={categories} active={active} setActive={setActive} /> */}
                    <FloatingLabelInput
                        placeholder='Nhập tên tác phẩm, tác giả, chủ đề...'
                        label='Tìm kiếm'
                        radius='xl'
                        w='70%'
                        maw='400px'
                        value={searchKey}
                        onChange={(e) => {
                            setSearchKey(e.target.value)
                            // if (e.target.value == '') router.push('/search?key=' + '')
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
                            <Group
                                ml='auto'
                                align='center'
                                style={{width: 'fit-content', cursor: 'pointer'}}
                                spacing='xs'>
                                <Avatar src={users[0].avatarImage} />
                                <Text fw='bold'>{users[0].name}</Text>
                            </Group>
                            <Button onClick={signOut}>Đăng xuất</Button>
                        </Group>
                    ) : smScreen ? (
                        <ActionIcon ml='md' onClick={open}>
                            <UserCircle />
                        </ActionIcon>
                    ) : (
                        <Group style={{flex: 1}} position='right' spacing='xl'>
                            <Button component='a' href='#signIn' variant='filled' onClick={open}>
                                Đăng nhập
                            </Button>
                            <Button component='a' href='#signUp' variant='outline' onClick={open}>
                                Đăng kí
                            </Button>
                        </Group>
                    )}
                </Flex>
            </Paper>
            <Modal
                opened={opened}
                onClose={closeModal}
                styles={(theme) => ({
                    content: {backgroundColor: theme.backgroundColor},
                    header: {backgroundColor: theme.backgroundColor},
                })}>
                <Auth closeModal={closeModal}></Auth>
            </Modal>
        </>
    )
}

export default Header
