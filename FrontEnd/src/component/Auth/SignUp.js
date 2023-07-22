import {Button, PasswordInput, Stack, TextInput} from '@mantine/core'
import {useForm} from '@mantine/form'
function SignUp() {
    const form = useForm({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    })
    return (
        <form onSubmit={form.onSubmit(console.log)}>
            <Stack>
                <TextInput {...form.getInputProps('name')} label='Họ Tên' placeHolder='Nhập họ tên của bạn' required />
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
                <PasswordInput
                    {...form.getInputProps('confirmPassword')}
                    label='Nhập lại mật khẩu'
                    placeHolder='Nhập lại mật khẩu'
                    required
                />
                <Button type='submit' mx='auto'>
                    Đăng Ký
                </Button>
            </Stack>
        </form>
    )
}

export default SignUp
