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
              title: 'Vợ chồng A Phủ',
              slug: 'vo-chong-a-phu',
              intro: '"Vợ Chồng A Phủ" là một tác phẩm văn học nổi tiếng của nhà văn Tô Hoài - một trong những tên tuổi sáng giá của văn học Việt Nam thế kỷ 20. Tác phẩm được viết dưới hình thức truyện ngắn, nhưng lại mang trong mình sự đa chiều, sâu sắc về tình yêu và cuộc sống.Tấm Cám (chữ Nôm: 糝𥽇) là một câu chuyện cổ tích Việt Nam thuộc thể loại truyện cổ tích thần kì. Dù có nhiều dị bản, câu chuyện này phản ánh những mâu thuẫn trong gia đình, đặc biệt là mối quan hệ mẹ kế - con chồng.',
              summary:
                  'Vợ chồng A phủ kể về đôi vợ chồng người H’ Mông ở vùng Tây Bắc. Mị là một cô gái xinh đẹp có tài thổi sáo. Một đêm xuân, Mị bị A Sử lừa, bắt về trình ma và làm con dâu gạt nợ cho nhà thống lí Pá Tra. Ban đầu, Mị định tự tử nhưng vì thương cha đành cam chịu sống trong đau khổ câm lặng “lùi lũi như con rùa nuôi trong xó cửa”. Ngày này qua ngày khác dần dần Mị trở nên vô cảm và nghĩ mình không bằng con trâu con ngựa, chỉ biết làm những việc lặp đi lặp lại, Mị cũng chẳng còn buồn nữa. Ngày Tết lại về, Mị lén uống rượu một mình. Không khí vui nhộn, nhất là tiếng sáo gọi bạn tình đã giúp Mị nhớ lại những ngày trước, khơi dậy ở Mị khát vọng tình yêu hạnh phúc. Mị vào buồng và định thay váy áo đi chơi thì bị A Sử bắt trói đứng vào cột nhà, bằng cả thúng dây đay, cả tóc Mị. Trong cơn chập chờn mê tỉnh, Mị vẫn thả hồn theo các cuộc chơi. Đến lúc thích chí vùng bước đi mới biết toàn thân bị trói chặt, đau buốt. Cũng đêm đó, A Phủ, một thanh niên mồ côi nhưng khoẻ mạnh đã đánh A Sử, vì bất bình trước trò xấc xược của hắn ta. A Phủ bị làng bắt về làng đánh đập dã man và trở thành người ở trong nhà Pá Tra để trừ nợ. Một hôm A Phủ vì mải mê bẫy nhím nên đã để hổ bắt mất một con bò. A Phủ bị thống lí Pá Tra bắt trói đứng vào một cây cột, suốt mấy ngày đêm chờ khi nào A Sử bắn được hổ mới tha. Mị đã nhìn thấy hai dòng nước mắt của A Phủ lặng lẽ rơi trên hai hóm má xám đen vì kiệt sức, tuyệt vọng, Mị động lòng thương người cùng cảnh ngộ. Sau một hồi suy nghĩ, Mị đã cắt dây trói cho A Phủ. Rồi, Mị vụt chạy theo anh ta. Cả hai băng rừng sang Phiềng Sa, trở thành vợ chồng.',
              authorName: 'Tô Hoài',
              timeOfCreation: 'Năm 1952 trong chiến dịch giải phóng Tây Bắc',
              image: '',
              categories: [],
              visibility: true,
              featured: true,
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
                if (rs?.literaryId) {
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
