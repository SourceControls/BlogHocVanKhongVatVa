import {Button, Dialog, Group, Image, Modal, Stack, Text, Title} from '@mantine/core'
import {useMediaQuery, useDisclosure} from '@mantine/hooks'
import {MailForward} from 'tabler-icons-react'
import RequestPostForm from './RequestPostForm'
import {useSettings, useUsers} from '@util'
import {useRouter} from 'next/router'

function Hero() {
    const [opened, {open, close}] = useDisclosure(false)
    const router = useRouter()
    const {users} = useUsers('', '/profile')
    const {settings, isLoading} = useSettings()
    const smScreen = useMediaQuery('(max-width: 48em)')
    return (
        <>
            <Group grow={!smScreen} w='100%' className='limit-w' mx='auto' px='md'>
                <Stack>
                    <Title order={1}>{settings[1].homeHeroTitle} </Title>
                    <Text>{settings[1].homeHeroSubtitle}</Text>
                    <Stack>
                        <Text size='xl' fw='bold'>
                            Hoặc
                        </Text>

                        <>
                            <Button rightIcon={<MailForward />} w='230px' variant='outline' onClick={open}>
                                Yêu Cầu Bài Viết
                            </Button>
                        </>
                    </Stack>
                </Stack>
                {!smScreen && <Image src={settings[1].homeHeroCover} alt=''></Image>}
            </Group>
            {users[0]?.userId ? (
                <Modal opened={opened} onClose={close}>
                    <RequestPostForm close={close} />
                </Modal>
            ) : (
                <Dialog
                    opened={opened}
                    withCloseButton
                    onClose={setTimeout(close, 4000)}
                    size='lg'
                    zIndex={100}
                    // position={{bottom: '84px', right: '16px'}}
                    radius='md'
                    bg='var(--primary-color-0)'>
                    <Text size='sm' mb='xs' weight={500}>
                        Hãy trở thành viên để sử dụng chức năng!
                    </Text>

                    <Button
                        mr='xl'
                        onClick={() => {
                            close()
                            router.push(router.asPath + '#signIn')
                        }}>
                        Đăng nhập
                    </Button>
                    <Button
                        variant='outline'
                        onClick={() => {
                            close()
                            router.push(router.asPath + '#signUp')
                        }}>
                        Đăng kí
                    </Button>
                </Dialog>
            )}
        </>
    )
}

export default Hero
