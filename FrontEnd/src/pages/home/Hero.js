import {ActionIcon, Button, Group, Image, Modal, Stack, Text, TextInput, Title} from '@mantine/core'
import {getConfig} from '@util'
import {useMediaQuery, useDisclosure} from '@mantine/hooks'
import {IconArrowRight, IconSearch} from '@tabler/icons-react'
import {useState} from 'react'
import {Mail, MailForward} from 'tabler-icons-react'
import RequestPostForm from './RequestPostForm'

function Hero() {
    const [opened, {open, close}] = useDisclosure(false)

    const smScreen = useMediaQuery('(max-width: 48em)')
    return (
        <>
            <Group grow={!smScreen} w='100%' className='limit-w' mx='auto' px='md'>
                <Stack>
                    <Title order={1}>{getConfig().homeHeroTitle} </Title>
                    <Text>{getConfig().homeHeroSubtitle}</Text>
                    <Stack>
                        <Text size='xl' fw='bold'>
                            Hoặc
                        </Text>
                        <Button rightIcon={<MailForward />} w='230px' variant='outline' onClick={open}>
                            Yêu Cầu Bài Viết
                        </Button>
                    </Stack>
                </Stack>
                {!smScreen && <Image src={getConfig().homeHeroCover}></Image>}
            </Group>
            <Modal opened={opened} onClose={close}>
                <RequestPostForm />
            </Modal>
        </>
    )
}

export default Hero
