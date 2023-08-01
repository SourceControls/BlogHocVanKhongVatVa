import {Button, Center, Image, PasswordInput, Stack, Text, Textarea, TextInput} from '@mantine/core'
import {useForm} from '@mantine/form'
import {useSettings} from '@util'
function RequestPostForm() {
    const {settings, isLoading} = useSettings()

    const form = useForm({
        initialValues: {
            title: '',
            details: '',
        },
    })
    return (
        <>
            <Center h='200px'>
                <Image src={settings[1].logo} />
            </Center>
            <Text size='xl' mb='md'>
                Gửi Yêu Cầu Viết Bài
            </Text>
            <form onSubmit={form.onSubmit(console.log)}>
                <Stack>
                    <TextInput
                        {...form.getInputProps('title')}
                        label='Tiêu Đề'
                        placeHolder='Nhập tiêu đề bài viết'
                        required
                    />
                    <Textarea
                        {...form.getInputProps('details')}
                        autosize
                        minRows={5}
                        label='Chi Tiết'
                        placeHolder='Cho chúng tôi biết yêu cầu chi tiết'
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

export default RequestPostForm
