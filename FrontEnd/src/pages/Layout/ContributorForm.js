import {Button, Center, Image, PasswordInput, Stack, Text, Textarea, TextInput} from '@mantine/core'
import {useForm} from '@mantine/form'
import {useSettings, contributorRegister} from '@util'
function ContributorForm({close}) {
    const {settings, isLoading} = useSettings()

    const form = useForm({
        initialValues: {
            name: 'Thu Huyền',
            phone: '0973343541',
            address: 'Phủ Lý, Hà Nam',
            career: 'Giáo viên văn học',
            intro: 'Tôi là một người đam mê về văn học, sinh năm 1998 và hiện đang là một giảng viên về môn này. Từ khi còn nhỏ, tôi đã luôn mê mải đắm chìm trong thế giới của các tác phẩm văn học, từ những cuốn sách kinh điển cho đến những bài viết ngắn đầy cảm xúc. Được trải qua những hành trình tinh tế trong các trang sách, tôi đã thấu hiểu được sức mạnh của từng câu chữ, từng dòng văn, và tầm ảnh hưởng của chúng đối với cuộc sống của mỗi người.',
        },
    })
    const handleSubmit = () => {
        contributorRegister(form.values).then((rs) => {
            if (rs) close()
        })
    }
    return (
        <>
            <Center h='200px'>
                <Image src={settings[1].logo} />
            </Center>
            <Text size='xl' mb='md' fw='bold'>
                Đăng kí trở thành cộng tác viên
            </Text>
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <Stack>
                    <TextInput
                        {...form.getInputProps('phone')}
                        label='Số điện thoại'
                        placeHolder='Số điện thoại của bạn'
                        required
                    />
                    <TextInput
                        {...form.getInputProps('address')}
                        label='Địa chỉ'
                        placeHolder='Tỉnh hoặc thành phố bạn đang ở'
                        required
                    />
                    <TextInput
                        {...form.getInputProps('career')}
                        label='Nghề nghiệp'
                        placeHolder='Ví dụ: Học sinh cấp 3, giáo viên...'
                        required
                    />
                    <Textarea
                        {...form.getInputProps('intro')}
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
