import {useForm} from '@mantine/form'
import {Button, Checkbox, Group, Stack, Textarea, TextInput} from '@mantine/core'
import {ImageDropzone} from '@comp'
import {transformToUrl} from '@util'
function LiteraryForm() {
    const form = useForm({
        initialValues: {
            literaryId: '',
            title: '',
            slug: '',
            intro: '',
            summary: '',
            authorName: '',
            timeOfCreation: '',
            image: '',
            visibility: 0,
            visibility: 1,
            createdAt: '',
            createdBy: '',
            updatedAt: '',
            updatedBy: '',
            file: '',
        },
    })
    const handleSubmit = () => {
        console.log(form.values)
    }
    return (
        <form onSubmit={form.onSubmit(handleSubmit)}>
            <Group grow align='flex-start'>
                <Stack>
                    <ImageDropzone form={form} imageField='image' w='300px' h='450px' />
                    <TextInput
                        label='Tên tác phẩm'
                        placeholder='Ví dụ: Tấm Cám'
                        required
                        {...form.getInputProps('title')}
                        onChange={(e) => form.setValues({title: e.target.value, slug: transformToUrl(e.target.value)})}
                    />
                    <TextInput
                        label='Thẻ URL'
                        placeholder='Đường dẫn đến bài viết của bạn'
                        required
                        {...form.getInputProps('slug')}
                    />
                </Stack>
                <Stack>
                    <TextInput label='Tác giả' placeholder='Nhập tên tác giả...' {...form.getInputProps('author')} />
                    <TextInput
                        label='Thời gian sáng tác'
                        placeholder='Ví dụ: Mùa xuân năm 1975'
                        required
                        {...form.getInputProps('timeOfCreation')}
                    />
                    <Textarea
                        minRows={4}
                        label='Giới thiệu'
                        placeholder='Giới thiệu chung về tác phẩm...'
                        required
                        {...form.getInputProps('intro')}
                    />
                    <Textarea
                        minRows={8}
                        label='Tóm tắt'
                        placeholder='Tóm tắt về nội dung của tác phẩm'
                        required
                        {...form.getInputProps('summary')}
                    />
                    <Checkbox label='Hiển thị' checked={form.values.visibility} {...form.getInputProps('visibility')} />
                    <Checkbox
                        label='Tác phẩm tiêu biểu'
                        checked={form.values.featured}
                        {...form.getInputProps('featured')}
                    />
                    <Button type='submit'>Lưu</Button>
                </Stack>
            </Group>
        </form>
    )
}

export default LiteraryForm
