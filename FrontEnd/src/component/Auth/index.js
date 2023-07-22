import {Box, Center, Image, Tabs} from '@mantine/core'
import {getConfig} from '@util'
import {useEffect} from 'react'
import ForgotPassword from './ForgotPassword'
import SignIn from './SignIn'
import SignUp from './SignUp'

export function Auth() {
    const tab = typeof window !== 'undefined' && window.location.hash // Lấy phần định danh từ URL
    return (
        <Box>
            <Center h='200px'>
                <Image src={getConfig().logo} />
            </Center>

            <Tabs defaultValue={tab} pb='xl'>
                <Tabs.List mb='md'>
                    <Tabs.Tab value='#signIn'>Đăng Nhập</Tabs.Tab>
                    <Tabs.Tab value='#signUp'>Đăng Ký</Tabs.Tab>
                    <Tabs.Tab value='Quên Mật Khẩu'>Quên Mật Khẩu</Tabs.Tab>
                </Tabs.List>
                <Tabs.Panel value='#signIn'>
                    <SignIn />
                </Tabs.Panel>
                <Tabs.Panel value='#signUp'>
                    <SignUp />
                </Tabs.Panel>
                <Tabs.Panel value='Quên Mật Khẩu'>
                    <ForgotPassword />
                </Tabs.Panel>
            </Tabs>
        </Box>
    )
}
