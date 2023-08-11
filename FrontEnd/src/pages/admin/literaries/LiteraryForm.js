import {useForm} from '@mantine/form'
import {Button, Checkbox, Group, MultiSelect, Select, Stack, Textarea, TextInput} from '@mantine/core'
import {ImageDropzone} from '@comp'
import {transformToUrl, uploadImg, createLiterary, useCategories, updateLiterary, deleteLiteray} from '@util'

function getInitialValues(literary) {
    return literary
        ? {
              ...literary,
              file: undefined,
              categories: literary.literaryCategory.map((e) => e.category.categoryId),
          }
        : {
              title: 'Tấm cám ' + Math.round(Math.random() * 1000),
              slug: 'tam-cam-' + Math.round(Math.random() * 1000),
              intro: 'Tấm Cám (chữ Nôm: 糝𥽇) là một câu chuyện cổ tích Việt Nam thuộc thể loại truyện cổ tích thần kì. Dù có nhiều dị bản, câu chuyện này phản ánh những mâu thuẫn trong gia đình, đặc biệt là mối quan hệ mẹ kế - con chồng.',
              summary:
                  'Tấm Cám là câu chuyện dân gian kể về hai chị em Tấm Cám. Tấm mồ côi mẹ từ nhỏ sống với mẹcon dì ghẻ và Cám. Mẹ con Cám thường xuyên hành hạ đối xử bất công với Tấm. Khi thì cướp hếtcá mà Tấm bắt được, khi thì lại giết hại cả bống bạn của Tấm, lúc lại không cho Tấm đi trẩyhội, bắt Tấm ở nhà nhặt thóc và gạo. Tuy nhiên khi được Bụt giúp đỡ Tấm đã được đi chơi hộivà gặp gỡ nhà vua. Khi trở về từ dạ tiệc Tấm đánh rơi chiếc hài và nhà vua theo đó mà tìmđược người để cưới về làm vợ. Tấm trở thành hoàng hậu, điều đó làm mẹ con Cám ganh ghét vàlập mưu giết hại Tấm. Nhưng Tấm đã hóa thành chim vàng anh, cây xoan đào, khung cửi, quảthị. Và cuối cùng Tấm gặp lại nhà vua và sống trong cung hạnh phúc đến suốt đời. Còn mẹ conCám phải chịu báo ứng vì những tội ác mà mình đã gây ra.',
              authorName: 'Khuyết danh',
              timeOfCreation: 'Mùa xuân 1975',
              image: 'https://i.ibb.co/W2zv6HF/T-m-C-m-1-removebg-preview.png',
              visibility: true,
              featured: false,
              file: undefined,
          }
}

function LiteraryForm({literary, close, mutate, literaries}) {
    const {categories} = useCategories('&limit=0')

    const form = useForm({
        initialValues: getInitialValues(literary),
    })
    const handleSubmit = async () => {
        if (form.values.file) form.values.image = await uploadImg(form.values.file)
        if (!literary) {
            //create new
            createLiterary(form.values).then((rs) => {
                if (rs.literaryId) {
                    mutate([rs, ...literaries], false)
                    close()
                }
            })
        } else {
            //update
            const rs = await updateLiterary(form.values)
            form.setValues(getInitialValues(rs))
            const newItems = literaries.map((item) => (item.literaryId == rs.literaryId ? rs : item))
            mutate(newItems, false)
        }
    }
    return (
        <form onSubmit={form.onSubmit(handleSubmit)}>
            <Button type='submit' ml='auto' display='block'>
                Lưu
            </Button>

            <Group grow align='flex-start'>
                <Stack>
                    <ImageDropzone form={form} imageField='image' w='300px' h='450px' />
                </Stack>
                <Stack align='stretch'>
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
                    <TextInput
                        label='Tác giả'
                        placeholder='Nhập tên tác giả...'
                        {...form.getInputProps('authorName')}
                    />
                    <TextInput
                        label='Thời gian sáng tác'
                        placeholder='Ví dụ: Mùa xuân năm 1975'
                        {...form.getInputProps('timeOfCreation')}
                    />
                    <MultiSelect
                        data={
                            categories[0]?.categoryId
                                ? categories.map((e) => ({label: e.categoryName, value: e.categoryId}))
                                : []
                        }
                        placeholder='Chọn danh mục'
                        label='Danh mục'
                        {...form.getInputProps('categories')}
                    />
                    <Checkbox
                        checked={form.values.visibility}
                        onChange={(e) => form.setValues({visibility: e.target.checked == 1})}
                        label='Hiển thị'
                    />
                    <Checkbox
                        checked={form.values.featured}
                        onChange={(e) => form.setValues({featured: e.target.checked == 1})}
                        label='Đặt làm tác phẩm tiêu biểu'
                    />
                </Stack>
                <Stack>
                    <Textarea
                        minRows={6}
                        label='Giới thiệu'
                        placeholder='Giới thiệu chung về tác phẩm...'
                        required
                        {...form.getInputProps('intro')}
                    />
                    <Textarea
                        minRows={9}
                        label='Tóm tắt'
                        placeholder='Tóm tắt về nội dung của tác phẩm'
                        required
                        {...form.getInputProps('summary')}
                    />
                </Stack>
            </Group>
        </form>
    )
}

export default LiteraryForm
