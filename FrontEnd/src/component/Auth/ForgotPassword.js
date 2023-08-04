import {Button, Stack, TextInput} from '@mantine/core'
import {useForm} from '@mantine/form'
import {forgotPassword} from '@util'

function ForgotPassword({close}) {
    const form = useForm({
        initialValues: {
            email: '',
        },
    })
    const handleSubmit = () => {
        forgotPassword(form.values).then((rs) => {
            if (rs) close()
        })
    }
    return (
        <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack>
                <TextInput
                    {...form.getInputProps('email')}
                    type='email'
                    label='Email'
                    placeHolder='Nhập email của bạn'
                    description='Chúng tôi sẽ gửi đường dẫn đổi mật khẩu đến mail của bạn!'
                    required
                />
                <Button type='submit' mx='auto' mt='lg'>
                    Xác Nhận
                </Button>
            </Stack>
        </form>
    )
}

export default ForgotPassword
