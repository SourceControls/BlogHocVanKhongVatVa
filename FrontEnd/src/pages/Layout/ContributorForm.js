import {Button, Center, Image, PasswordInput, Stack, Text, Textarea, TextInput} from '@mantine/core'
import {useForm} from '@mantine/form'
import {useSettings} from '@util'
function ContributorForm({closeContributorForm}) {
    const {settings, isLoading} = useSettings()

    const form = useForm({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            address: '',
            website: '',
            career: '',
            note: '',
        },
    })
    return (
        <>
            <Center h='200px'>
                <Image src={settings[1].logo} />
            </Center>
            <Text size='xl' mb='md' fw='bold'>
                Đăng kí trở thành cộng tác viên
            </Text>
            <form onSubmit={form.onSubmit(console.log)}>
                <Stack>
                    <TextInput
                        {...form.getInputProps('name')}
                        label='Họ tên'
                        placeHolder='Đầy đủ họ tên của bạn'
                        required
                    />
                    <TextInput {...form.getInputProps('email')} label='Email' placeHolder='Email của bạn' required />
                    <TextInput
                        {...form.getInputProps('phone')}
                        label='Số điện thoại'
                        placeHolder='Số điện thoại'
                        required
                    />
                    <TextInput
                        {...form.getInputProps('address')}
                        label='Địa chỉ'
                        placeHolder='Địa chỉ hiện tại của bạn'
                        required
                    />
                    <TextInput
                        {...form.getInputProps('website')}
                        label='Website'
                        placeHolder='Website hoặc trang cá nhân của bạn'
                        required
                    />
                    <TextInput
                        {...form.getInputProps('career')}
                        label='Nghề nghiệp'
                        placeHolder='Ví dụ: Học sinh cấp 3, giáo viên...'
                        required
                    />
                    <Textarea
                        {...form.getInputProps('node')}
                        autosize
                        minRows={5}
                        label='Giới thiệu'
                        placeHolder='Giới thiệu về bản thân bạn'
                        required
                    />
                    <Button type='submit' mx='auto'>
                        Xác Nhận
                    </Button>
                </Stack>
            </form>
        </>
    )
}

export default ContributorForm
