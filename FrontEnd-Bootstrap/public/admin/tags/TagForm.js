import {useForm} from '@mantine/form'
import {Button, Stack, Textarea, TextInput} from '@mantine/core'
import {transformToUrl, createTag, updateTag} from '@util'
function getInitialValues(tag) {
    return tag
        ? {
              ...tag,
          }
        : {
              tagName: 'tam' + Math.round(Math.random() * 1000),
              slug: 'tam' + Math.round(Math.random() * 1000),
              description: 'Một câu chuyện đặc sắc với nhiều tầng ý nghĩa và thông điệp nhân văn.',
          }
}
function TagForm({tag, close, mutate, tags}) {
    const form = useForm({
        initialValues: getInitialValues(tag),
    })
    const handleSubmit = async () => {
        if (!tag) {
            //create new
            createTag(form.values).then((rs) => {
                if (rs.tagId) {
                    mutate([rs, ...tags], false)
                    close()
                }
            })
        } else {
            //update
            const rs = await updateTag(form.values)
            form.setValues(getInitialValues(rs))
            const newItems = tags.map((item) => (item.tagId == rs.tagId ? rs : item))
            mutate(newItems, false)
        }
    }
    return (
        <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack>
                <TextInput
                    label='Tên tags'
                    placeholder='Ví dụ: Tấm Cám'
                    required
                    {...form.getInputProps('tagName')}
                    onChange={(e) => form.setValues({tagName: e.target.value, slug: transformToUrl(e.target.value)})}
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

                <Button type='submit'>Lưu</Button>
            </Stack>
        </form>
    )
}

export default TagForm
