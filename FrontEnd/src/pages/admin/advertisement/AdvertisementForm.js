import {useForm} from '@mantine/form'
import {Button, Checkbox, Group, NumberInput, Select, Stack, Textarea, TextInput} from '@mantine/core'
import {ImageDropzone} from '@comp'
import {DateInput} from '@mantine/dates'

import {transformToUrl, createAdvertisement, uploadImg, updateAdvertisement} from '@util'
function getInitialValues(ad) {
    return ad
        ? {
              ...ad,
              price: parseFloat(ad.price),
              file: undefined,
              startDate: new Date(ad.startDate),
              endDate: new Date(ad.endDate),
          }
        : {
              title: 'Học bổng Úc ' + Math.round(Math.random() * 1000),
              description: 'Học bổng úc trọn gói, thi đánh giá năng lực',
              image: '',
              displayPosition: 'HOME',
              target: '#hocbonguc',
              startDate: new Date(),
              endDate: new Date(new Date().getTime() + 60 * 60 * 24 * 15 * 1000),
              price: Math.round(Math.random() * 100),
              createdBy: 1,
              visibility: true,
              file: undefined,
          }
}
function AdvertisementForm({ad, close, mutate, ads}) {
    const form = useForm({
        initialValues: getInitialValues(ad),
    })
    const handleSubmit = async () => {
        if (form.values.file) form.values.image = await uploadImg(form.values.file)

        if (!ad) {
            //create new
            createAdvertisement(form.values).then((rs) => {
                if (rs.advertisementId) {
                    mutate([rs, ...ads], false)
                    close()
                }
            })
        } else {
            //update
            const rs = await updateAdvertisement(form.values)
            form.setValues(getInitialValues(rs))
            const newItems = ads.map((item) => (item.advertisementId == rs.advertisementId ? rs : item))
            mutate(newItems, false)
        }
    }
    return (
        <form onSubmit={form.onSubmit(handleSubmit)}>
            <Group align='center' position='right'>
                <Checkbox
                    checked={form.values.visibility}
                    onChange={(e) => form.setValues({visibility: e.target.checked == 1})}
                    label='Cho phép hiển thị'
                />
                <Button type='submit' display='inline-block'>
                    Lưu
                </Button>
            </Group>
            <Group grow align='center' my='xl'>
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
                        {...form.getInputProps('target')}
                    />

                    <DateInput valueFormat='DD - MM - YYYY' label='Ngày bắt đầu' {...form.getInputProps('startDate')} />
                    <DateInput valueFormat='DD - MM - YYYY' label='Ngày kết thúc' {...form.getInputProps('endDate')} />
                    <Select
                        label='Vị trí hiển thị'
                        data={[
                            {value: 'HOME', label: 'Trang chủ'},
                            {value: 'READ', label: 'Trang đọc bài viết'},
                            {value: 'LITERARY', label: 'Trang tác phẩm'},
                            {value: 'SEARCH', label: 'Trang tìm kiếm'},
                        ]}
                        {...form.getInputProps('displayPosition')}
                    />
                    <Textarea
                        minRows={3}
                        label='Mô tả'
                        placeholder='Mô tả thêm cho quảng cáo...'
                        {...form.getInputProps('description')}
                    />
                    {/* <NumberInput
                        {...form.getInputProps('price')}
                        precision={4}
                        defaultValue={0}
                        min={0}
                        placeholder='Nhập tiền hoa hồng'
                        label='Hoa hồng'
                    /> */}
                </Stack>
                <ImageDropzone form={form} imageField='image' h='100px' />
            </Group>
        </form>
    )
}

export default AdvertisementForm
