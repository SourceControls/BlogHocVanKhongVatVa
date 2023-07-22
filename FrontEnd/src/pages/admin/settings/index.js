import {useForm} from '@mantine/form'
import {Button, Divider, Group, Image, Radio, Select, SimpleGrid, Text, TextInput} from '@mantine/core'
import Layout from '../Layout'
import {getConfig} from '@util'

const listFontFamily = [
    'Mali',
    'Open Sans',
    'Arial',
    'Verdana',
    'Tahoma',
    'Trebuchet MS',
    'Times New Roman',
    'Georgia',
    'Garamond',
    'Courier New',
    'Brush Script MT',
]

// matine color
const listColor = [
    'brown',
    'gray',
    'red',
    'pink',
    'grape',
    'violet',
    'indigo',
    'blue',
    'cyan',
    'teal',
    'green',
    'lime',
    'yellow',
    'orange',
]

function Settings() {
    const form = useForm({
        initialValues: {
            ...getConfig(),
        },
    })
    const handleSubmit = () => {
        console.log(form.values)
    }
    return (
        <>
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <Group mb='38px' noWrap align='flex-end'>
                    <Text mr='auto' size='xl' fw='bold'>
                        Cấu hình website
                    </Text>
                    <Button type='submit' ml='auto '>
                        Lưu
                    </Button>
                </Group>
                <Text mr='auto' size='lg' fw='bold'>
                    Chung
                </Text>
                <SimpleGrid cols={2} mt='md'>
                    <Select
                        withAsterisk
                        label='Kiểu chữ'
                        data={listFontFamily}
                        {...form.getInputProps('fontFamily')}></Select>
                    <Select
                        withAsterisk
                        label='Màu chủ đạo'
                        data={listColor}
                        {...form.getInputProps('primaryColor')}></Select>
                    <TextInput
                        withAsterisk
                        label='Tiêu đề web'
                        description='Mô tả ngắn về trang web được hiển thị trên tab trình duyệt'
                        {...form.getInputProps('pageTitle')}></TextInput>

                    <TextInput
                        withAsterisk
                        label='Logo'
                        {...form.getInputProps('logo')}
                        description='Logo của trang web'></TextInput>
                    <TextInput
                        withAsterisk
                        label='Icon'
                        {...form.getInputProps('favIcon')}
                        description='Hiển thị trên tab trình duyệt'
                        leftIcon={<Image src={form.values.favIcon} mx='8px' />}
                        iconWidth={44}></TextInput>
                </SimpleGrid>
                <Divider size='md' my='xl' />
                <Text mr='auto' size='lg' fw='bold'>
                    Trang chủ
                </Text>
                <SimpleGrid cols={2} mt='md'>
                    <TextInput
                        withAsterisk
                        label='Tiêu đề chính'
                        description='Hiển thị ở khu vực đầu tiên của trang chủ'
                        {...form.getInputProps('homeDescription')}></TextInput>
                    <TextInput
                        withAsterisk
                        label='Tiêu đề phụ'
                        description='Hiển thị ngay bên dưới tiêu đề chính'
                        {...form.getInputProps('homeSubDescription')}></TextInput>
                    <TextInput
                        withAsterisk
                        label='Ảnh bìa'
                        {...form.getInputProps('homePublicatorCover')}
                        description='Hiển thị ngay đầu trang chủ'></TextInput>
                </SimpleGrid>
                <Divider size='md' my='xl' />

                <Text mr='auto' size='lg' fw='bold'>
                    Trang đọc
                </Text>
                <SimpleGrid>
                    <TextInput
                        withAsterisk
                        label='Ảnh bìa'
                        {...form.getInputProps('categoryCover')}
                        description='Hiển thị ngay đầu trang đọc bài viết'></TextInput>
                    <Radio.Group label='Home Hero' withAsterisk {...form.getInputProps('homePageHero')}>
                        <Group mt='xs'>
                            <Radio value='grid' label='Grid' />
                            <Radio value='carousel' label='Carousel' />
                        </Group>
                    </Radio.Group>
                    <Radio.Group label='Category Hero' withAsterisk {...form.getInputProps('categoryPageHero')}>
                        <Group mt='xs'>
                            <Radio value='grid' label='Grid' />
                            <Radio value='carousel' label='Carousel' />
                        </Group>
                    </Radio.Group>
                </SimpleGrid>
            </form>
        </>
    )
}
Settings.Layout = Layout
export default Settings
