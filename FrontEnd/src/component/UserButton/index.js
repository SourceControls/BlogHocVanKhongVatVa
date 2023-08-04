import {UnstyledButton, Group, Avatar, Tooltip, Text, createStyles} from '@mantine/core'
import {IconLogout} from '@tabler/icons-react'
import {useUsers, signOut} from '@util'
import {useRouter} from 'next/router'
const useStyles = createStyles((theme) => ({
    user: {
        display: 'block',
        width: '100%',
        padding: theme.spacing.md,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
    },
}))

export function UserButton({image, name, email, icon, ...others}) {
    const {classes} = useStyles()
    const {users, mutate: userMutate} = useUsers('', '/profile')
    const router = useRouter()
    return (
        <UnstyledButton className={classes.user} {...others}>
            <Group>
                <Avatar src={image} radius='xl' />

                <div style={{flex: 1}}>
                    <Text size='sm' weight={500}>
                        {name}
                    </Text>

                    <Text color='dimmed' size='xs'>
                        {email}
                    </Text>
                </div>

                {
                    <Tooltip label='Đăng xuất'>
                        <IconLogout
                            size='1.5rem'
                            stroke={1.5}
                            onClick={async () => {
                                await signOut()
                                userMutate([], false)
                                router.push('/home')
                            }}
                        />
                    </Tooltip>
                }
            </Group>
        </UnstyledButton>
    )
}
