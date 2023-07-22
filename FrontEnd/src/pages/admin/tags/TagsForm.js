import {useForm} from '@mantine/form'
import {Button, Checkbox, Group, Stack, Textarea, TextInput} from '@mantine/core'
import {ImageDropzone} from '@comp'
import {transformToUrl} from '@util'
function TagsForm() {
    const form = useForm({
        initialValues: {
            tagId: '',
            tagName: '',
            slug: '',
            description: '',
            visibility: 1,
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
            <Stack>
                <TextInput
                    label='Tên tags'
                    placeholder='Ví dụ: Tấm Cám'
                    required
                    {...form.getInputProps('tagName')}
                    onChange={(e) => form.setValues({title: e.target.value, slug: transformToUrl(e.target.value)})}
                />
                <TextInput
                    label='Thẻ URL'
                    placeholder='Đường dẫn đến bài viết của bạn'
                    required
                    {...form.getInputProps('slug')}
                />
                <Textarea
                    minRows={4}
                    label='Mô tả'
                    placeholder='Mô tả cho thẻ...'
                    required
                    {...form.getInputProps('description')}
                />

                <Checkbox label='Hiển thị' checked={form.values.visibility} {...form.getInputProps('visibility')} />

                <Button type='submit'>Lưu</Button>
            </Stack>
        </form>
    )
}

export default TagsForm
