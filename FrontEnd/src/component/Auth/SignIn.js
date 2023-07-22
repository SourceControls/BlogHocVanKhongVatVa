import {Button, PasswordInput, Stack, TextInput} from '@mantine/core'
import {useForm} from '@mantine/form'

function SignIn() {
    const form = useForm({
        initialValues: {
            email: '',
            password: '',
        },
    })
    return (
        <form onSubmit={form.onSubmit(console.log)}>
            <Stack>
                <TextInput
                    {...form.getInputProps('email')}
                    type='email'
                    label='Email'
                    placeHolder='Nhập email của bạn'
                    required
                />
                <PasswordInput
                    {...form.getInputProps('password')}
                    label='Mật khẩu'
                    placeHolder='Nhập mật khẩu'
                    required
                />
                <Button type='submit' mx='auto'>
                    Đăng Nhập
                </Button>
            </Stack>
        </form>
    )
}

export default SignIn
