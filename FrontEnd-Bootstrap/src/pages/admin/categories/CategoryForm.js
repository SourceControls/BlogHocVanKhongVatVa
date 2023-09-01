import {useForm} from '@mantine/form'
import {Button, Checkbox, Stack, Textarea, TextInput} from '@mantine/core'
import {transformToUrl, createCategory, updateCategory} from '@util'
function getInitialValues(category) {
    return category
        ? {
              ...category,
          }
        : {
              categoryName: 'Truyện cổ tích ' + Math.round(Math.random().toFixed(5) * 1000),
              slug: 'truyen-co-tich-' + Math.round(Math.random().toFixed(5) * 1000),
              description:
                  'Truyện cổ tích một thể loại văn học được tự sự dân gian sáng tác có xu thế hư cấu, bao gồm cổ tích thần kỳ, cổ tích thế sự, cổ tích phiêu lưu và cổ tích loài vật.',
          }
}
function CategoryForm({category, close, mutate, categories}) {
    const form = useForm({
        initialValues: getInitialValues(category),
    })
    const handleSubmit = async () => {
        if (!category) {
            //create new
            const rs = await createCategory(form.values)
            if (rs.categoryId) {
                mutate([rs, ...categories], false)
                close()
            }
        } else {
            //update
            const rs = await updateCategory(form.values)
            form.setValues(getInitialValues(rs))
            const newItems = categories.map((item) => (item.categoryId == rs.categoryId ? rs : item))
            mutate(newItems, false)
        }
    }
    return (
        <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack>
                <TextInput
                    label='Tên danh mục'
                    placeholder='Nhập tên danh mục'
                    required
                    {...form.getInputProps('categoryName')}
                    onChange={(e) =>
                        form.setValues({categoryName: e.target.value, slug: transformToUrl(e.target.value)})
                    }
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

export default CategoryForm
