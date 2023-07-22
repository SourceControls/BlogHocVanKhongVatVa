'use client'
import {ActionIcon, Box, Button, Flex, Group, Image, Modal, TextInput} from '@mantine/core'
import Link from 'next/link'
import {UserCircle} from 'tabler-icons-react'
import {getConfig} from '@util'
import {Auth, FloatingLabelInput} from '@comp'
import {useMediaQuery, useDisclosure} from '@mantine/hooks'
import {useRouter} from 'next/router'
import {IconHome, IconSearch} from '@tabler/icons-react'
import {useState} from 'react'
function Header({categories, active, setActive}) {
    const router = useRouter()
    const [searchKey, setSearchKey] = useState('')
    const [opened, {open, close}] = useDisclosure(false)
    const smScreen = useMediaQuery('(max-width: 48em)')

    return (
        <Flex className='limit-w' mx='auto' align='center' py='xs' px='md'>
            <Box style={{flex: 1}}>
                <Link href='/home' onClick={() => setActive(undefined)}>
                    {smScreen ? <IconHome /> : <Image width='200px' src={getConfig().logo} />}
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
                }}
                icon={<IconSearch size='1.5rem' stroke={2.5} />}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        router.push('/search?key=' + searchKey)
                    }
                }}
            />
            {smScreen ? (
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
            <Modal
                opened={opened}
                onClose={close}
                styles={(theme) => ({
                    content: {backgroundColor: theme.backgroundColor},
                    header: {backgroundColor: theme.backgroundColor},
                })}>
                <Auth></Auth>
            </Modal>
        </Flex>
    )
}

export default Header
