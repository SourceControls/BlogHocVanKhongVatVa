import {Button, PasswordInput, Stack, TextInput} from '@mantine/core'
import {useForm} from '@mantine/form'
import {signIn} from '@util'

function SignIn({closeModal, userMutate}) {
    const form = useForm({
        initialValues: {
            email: 'tuanhung592001@gmail.com',
            password: '123456',
        },
    })

    const handleSignIn = () => {
        signIn(form.values).then((rs) => {
            if (rs?.userId) {
                userMutate([rs], false)
                closeModal()
            }
        })
    }
    return (
        <form onSubmit={form.onSubmit(handleSignIn)}>
            <Stack>
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
                <Button type='submit' mx='auto' mt='lg'>
                    Đăng Nhập
                </Button>
            </Stack>
        </form>
    )
}

export default SignIn
