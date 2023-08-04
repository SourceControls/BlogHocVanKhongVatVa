import {Button, Center, PasswordInput, Stack, TextInput, Title} from '@mantine/core'
import {useForm} from '@mantine/form'
import {changePasswordCaseForgot} from '@util'
import {useRouter} from 'next/router'
import {useEffect} from 'react'
function ChangePassword() {
    const form = useForm({
        initialValues: {
            newPassword: '',
            confirmPassword: '',
            token: '',
        },
    })
    const router = useRouter()
    useEffect(() => {
        if (router.isReady) form.setValues({token: router.query.token})
    }, [router.isReady])
    const handleSubmit = () => {
        changePasswordCaseForgot(form.values).then((rs) => {
            if (rs) router.push('/home')
        })
    }
    return (
        <form onSubmit={form.onSubmit(handleSubmit)}>
            <Center>
                <Stack w='300px'>
                    <Title order={3}>Đổi mật khẩu</Title>
                    <PasswordInput
                        {...form.getInputProps('newPassword')}
                        label='Mật khẩu'
                        placeholder='Nhập mật khẩu'
                        required
                    />
                    <PasswordInput
                        {...form.getInputProps('confirmPassword')}
                        label='Nhập lại mật khẩu'
                        placeholder='Nhập lại mật khẩu'
                        required
                    />
                    <Button type='submit' mx='auto' mt='lg'>
                        Xác Nhận
                    </Button>
                </Stack>
            </Center>
        </form>
    )
}

export default ChangePassword
