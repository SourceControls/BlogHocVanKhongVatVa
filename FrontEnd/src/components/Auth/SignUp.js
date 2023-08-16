import {Button, PasswordInput, Stack, TextInput} from '@mantine/core'
import {useForm} from '@mantine/form'
import {signUp} from '@util'
function SignUp() {
    const form = useForm({
        initialValues: {
            name: 'Tuấn Hùng',
            email: 'hungbuituan1@gmail.com',
            password: '123456',
            confirmPassword: '123456',
        },
    })
    const handleSignUp = () => {
        signUp(form.values).then((rs) => {
            console.log(rs)
        })
    }
    return (
        <form onSubmit={form.onSubmit(handleSignUp)}>
            <Stack>
                <TextInput {...form.getInputProps('name')} label='Họ Tên' placeholder='Nhập họ tên của bạn' required />
                <TextInput
                    {...form.getInputProps('email')}
                    type='email'
                    label='Email'
                    placeholder='Nhập email của bạn'
                    required
                />
                <PasswordInput
                    {...form.getInputProps('password')}
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
                    Đăng Ký
                </Button>
            </Stack>
        </form>
    )
}

export default SignUp
