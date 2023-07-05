import {ActionIcon, Group, Modal, Menu} from '@mantine/core'
import {IconCircleX, IconDots, IconEdit} from '@tabler/icons-react'
import {useDisclosure} from '@mantine/hooks'
import MyEditor from './Editor'
function Options({post}) {
    const [opened, {open, close}] = useDisclosure(false)

    return (
        <>
            <Group spacing='md' position='center'>
                <Menu transitionProps={{transition: 'pop'}} withArrow position='bottom-end' withinPortal>
                    <Menu.Target>
                        <ActionIcon>
                            <IconDots />
                        </ActionIcon>
                    </Menu.Target>

                    <Menu.Dropdown>
                        <Menu.Item icon={<IconEdit />} color='green' onClick={open}>
                            Chỉnh sửa
                        </Menu.Item>

                        <Menu.Item icon={<IconCircleX />} color='red'>
                            Xóa bài viết
                        </Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </Group>
            <Modal size='90vw' opened={opened} onClose={close} title='Bài viết' centered yOffset='1vh' xOffset={0}>
                <MyEditor post={post} />
            </Modal>
        </>
    )
}

export default Options
