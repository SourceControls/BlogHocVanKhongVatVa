import {useForm} from '@mantine/form'
import {Button, Checkbox, Stack, Textarea, TextInput} from '@mantine/core'
import {transformToUrl} from '@util'
function CategoriesForm() {
    const form = useForm({
        initialValues: {
            categoryId: '',
            categoryName: '',
            slug: '',
            description: '',
            group: '',
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
                    label='Tên danh mục'
                    placeholder='Nhập tên danh mục'
                    required
                    {...form.getInputProps('tagName')}
                    onChange={(e) => form.setValues({title: e.target.value, slug: transformToUrl(e.target.value)})}
                />
                <TextInput
                    label='Thẻ URL'
                    placeholder='Đường dẫn đến danh mục'
                    required
                    {...form.getInputProps('slug')}
                />
                <Textarea
                    minRows={4}
                    label='Mô tả'
                    placeholder='Mô tả cho danh mục'
                    {...form.getInputProps('description')}
                />

                <Button type='submit'>Lưu</Button>
            </Stack>
        </form>
    )
}

export default CategoriesForm
