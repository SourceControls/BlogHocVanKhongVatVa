import {Button, Center, Image, PasswordInput, Stack, Text, Textarea, TextInput} from '@mantine/core'
import {DatePickerInput} from '@mantine/dates'

import {useForm} from '@mantine/form'
import {useSettings, requestPost} from '@util'
function RequestPostForm({close}) {
    const {settings, isLoading} = useSettings()

    const form = useForm({
        initialValues: {
            title: 'Phân tích tâm trạng của nhân vật tấm khi bị mẹ bắt ở nhà!',
            detail: `- Sự bất mãn và tủi hận
- Sự tuyệt vọng và cô đơn
- Sự kiên nhẫn và lạc quan
- Ý thức về bản thân và ước mơ
- Sự kiên định và tinh thần chiến đấu`,
            limitTime: undefined,
        },
    })
    const handleSubmit = () => {
        requestPost(form.values).then((rs) => {
            if (rs) {
                close()
            }
        })
    }
    return (
        <>
            <Center h='200px'>
                <Image src={settings[1].logo} />
            </Center>
            <Text size='xl' mb='md'>
                Gửi Yêu Cầu Viết Bài
            </Text>
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <Stack>
                    <TextInput
                        {...form.getInputProps('title')}
                        label='Tiêu Đề'
                        placeholder='Nhập tiêu đề bài viết'
                        required
                    />

                    <Textarea
                        {...form.getInputProps('detail')}
                        autosize
                        minRows={5}
                        label='Chi Tiết'
                        placeholder='Yêu cầu chi tiết, hoặc dàn ý'
                        required
                    />
                    <DatePickerInput
                        {...form.getInputProps('limitTime')}
                        valueFormat='YYYY - MM - DD'
                        label='Giới hạn thời gian'
                        placeholder='Bạn cần chúng tôi hoàn thiện khi nào?'
                        minDate={new Date()}
                        allowDeselect
                    />
                    <Button type='submit' mx='auto' mt='xl'>
                        Xác Nhận
                    </Button>
                </Stack>
            </form>
        </>
    )
}

export default RequestPostForm
