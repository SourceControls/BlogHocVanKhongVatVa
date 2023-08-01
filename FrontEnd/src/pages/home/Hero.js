import {Button, Group, Image, Modal, Stack, Text, Title} from '@mantine/core'
import {useMediaQuery, useDisclosure} from '@mantine/hooks'
import {MailForward} from 'tabler-icons-react'
import RequestPostForm from './RequestPostForm'
import {useSettings} from '@util'

function Hero() {
    const [opened, {open, close}] = useDisclosure(false)
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
                        <Button rightIcon={<MailForward />} w='230px' variant='outline' onClick={open}>
                            Yêu Cầu Bài Viết
                        </Button>
                    </Stack>
                </Stack>
                {!smScreen && <Image src={settings[1].homeHeroCover}></Image>}
            </Group>
            <Modal opened={opened} onClose={close}>
                <RequestPostForm />
            </Modal>
        </>
    )
}

export default Hero
