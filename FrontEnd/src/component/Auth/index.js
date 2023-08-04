import {Box, Center, Image, Tabs} from '@mantine/core'
import {getConfig} from '@util'
import ForgotPassword from './ForgotPassword'
import SignIn from './SignIn'
import SignUp from './SignUp'
import {useSettings} from '@util'

export function Auth({closeModal, userMutate}) {
    const tab = typeof window !== 'undefined' && window.location.hash // Lấy phần định danh từ URL
    const {settings, isLoading} = useSettings()

    return (
        <Box>
            <Center h='200px'>
                <Image src={settings[1].logo} />
            </Center>

            <Tabs defaultValue={tab} pb='xl'>
                <Tabs.List mb='md'>
                    <Tabs.Tab value='#signIn'>Đăng Nhập</Tabs.Tab>
                    <Tabs.Tab value='#signUp'>Đăng Ký</Tabs.Tab>
                    <Tabs.Tab value='Quên Mật Khẩu'>Quên Mật Khẩu</Tabs.Tab>
                </Tabs.List>
                <Tabs.Panel value='#signIn'>
                    <SignIn closeModal={closeModal} userMutate={userMutate} />
                </Tabs.Panel>
                <Tabs.Panel value='#signUp'>
                    <SignUp />
                </Tabs.Panel>

                <Tabs.Panel value='Quên Mật Khẩu'>
                    <ForgotPassword close={closeModal} />
                </Tabs.Panel>
            </Tabs>
        </Box>
    )
}
