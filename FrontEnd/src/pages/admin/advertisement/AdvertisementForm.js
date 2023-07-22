import {useForm} from '@mantine/form'
import {Button, Checkbox, Group, NumberInput, Select, Stack, Textarea, TextInput} from '@mantine/core'
import {ImageDropzone} from '@comp'
import {DateInput} from '@mantine/dates'

import {transformToUrl} from '@util'
function AdvertisementForm() {
    const form = useForm({
        initialValues: {
            advertisementId: '',
            title: '',
            description: '',
            image: '',
            displayPosition: '',
            targetUrl: '',
            startDate: '',
            endDate: '',
            impressionCount: '',
            clickCount: '',
            status: '',
            price: '',
            createdAt: '',
            createdBy: '',
            updatedAt: '',
            updatedBy: '',
        },
    })
    const handleSubmit = () => {
        console.log(form.values)
    }
    return (
        <form onSubmit={form.onSubmit(handleSubmit)}>
            <Group grow align='flex-start'>
                <Stack>
                    <TextInput
                        label='Tiêu đề'
                        placeholder='Nhập tiêu đề quảng cáo'
                        required
                        {...form.getInputProps('title')}
                        onChange={(e) => form.setValues({title: e.target.value, slug: transformToUrl(e.target.value)})}
                    />
                    <TextInput
                        label='URL đích'
                        placeholder='Trang đích khi người dùng click'
                        required
                        {...form.getInputProps('targetUrl')}
                    />

                    <DateInput valueFormat='YYYY MMM DD' label='Ngày bắt đầu' />
                    <DateInput valueFormat='YYYY MMM DD' label='Ngày kết thúc' />
                    <Select
                        label='Vị trí hiển thị'
                        data={[
                            {value: 'HOME', label: 'Trang chủ'},
                            {value: 'POST', label: 'Trang đọc bài viết'},
                        ]}
                        {...form.getInputProps('displayPosition')}
                    />
                    <NumberInput
                        {...form.getInputProps('price')}
                        defaultValue={0}
                        min={0}
                        placeholder='Nhập tiền hoa hồng'
                        label='Hoa hồng'
                    />
                    <Checkbox
                        label='Cho phép hiển thị'
                        checked={form.values.visibility}
                        {...form.getInputProps('visibility')}
                    />

                    <Button type='submit'>Lưu</Button>
                </Stack>
                <Stack>
                    <ImageDropzone form={form} imageField='image' />
                    <Textarea
                        minRows={5}
                        label='Mô tả'
                        placeholder='Mô tả thêm cho quảng cáo...'
                        {...form.getInputProps('description')}
                    />
                </Stack>
            </Group>
        </form>
    )
}

export default AdvertisementForm
