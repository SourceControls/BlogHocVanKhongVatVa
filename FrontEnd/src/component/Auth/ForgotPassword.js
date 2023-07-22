import {Button, Stack, TextInput} from '@mantine/core'
import {useForm} from '@mantine/form'

function ForgotPassword() {
    const form = useForm({
        initialValues: {
            email: '',
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
                    description='Chúng tôi sẽ gửi đường dẫn đổi mật khẩu đến mail của bạn!'
                    required
                />
                <Button type='submit' mx='auto'>
                    Xác Nhận
                </Button>
            </Stack>
        </form>
    )
}

export default ForgotPassword
