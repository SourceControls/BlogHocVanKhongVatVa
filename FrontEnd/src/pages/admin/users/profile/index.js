import {useForm} from '@mantine/form'
import {
    ActionIcon,
    Avatar,
    BackgroundImage,
    Box,
    Button,
    Checkbox,
    FileButton,
    FileInput,
    Group,
    Menu,
    Select,
    Stack,
    Textarea,
    TextInput,
} from '@mantine/core'
import {ImageDropzone} from '@comp'
import {transformToUrl} from '@util'
import Link from 'next/link'
import {IconAccessible, IconAccessibleOff, IconArrowNarrowLeft, IconBan, IconSettings} from '@tabler/icons-react'
import Layout from '../../Layout'
function Profile() {
    const form = useForm({
        initialValues: {
            userId: '',
            name: '',
            slug: '',
            bio: '',
            avatarImage: '',
            coverImage: '',
            status: '',
            email: '',
            website: '',
            password: '',
            userGroup: '',
            avatarFile: '',
            coverFile: '',
            createdAt: '',
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
                <Group noWrap align='center'>
                    <Link href='/admin/users'>
                        <Button leftIcon={<IconArrowNarrowLeft />} variant='white'>
                            Trở lại
                        </Button>
                    </Link>

                    <Menu shadow='md'>
                        <Menu.Target>
                            <ActionIcon size='lg' variant='light' ml='auto'>
                                <IconSettings />
                            </ActionIcon>
                        </Menu.Target>

                        <Menu.Dropdown>
                            <Menu.Item color='red' icon={<IconAccessibleOff />}>
                                Chặn người dùng
                            </Menu.Item>
                            <Menu.Item color='green' icon={<IconAccessible />}>
                                Bỏ chặn
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>

                    <Button type='submit'>Lưu</Button>
                </Group>
                <BackgroundImage
                    pos='relative'
                    h='360px'
                    src={
                        form.values.coverImage ||
                        'https://png.pngtree.com/thumb_back/fh260/background/20200710/pngtree-pastel-rainbow-colored-gradient-background-banner-image_351656.jpg'
                    }>
                    <FileButton
                        style={{top: '20px', left: '20px'}}
                        {...form.getInputProps('coverFile')}
                        onChange={(file) => {
                            form.setValues({coverFile: file, coverImage: URL.createObjectURL(file)})
                        }}
                        accept='image/png,image/jpeg'>
                        {(props) => (
                            <Button {...props} bg='rgba(0,0,0,0.4)'>
                                {' '}
                                Cập nhật ảnh bìa{' '}
                            </Button>
                        )}
                    </FileButton>
                    <FileButton
                        {...form.getInputProps('avatarFile')}
                        onChange={(file) => {
                            form.setValues({avatarFile: file, avatarImage: URL.createObjectURL(file)})
                        }}
                        accept='image/png,image/jpeg'
                        sx={{
                            border: '3px solid white',
                            transform: 'translate(-50%,-50%)',
                            overflow: 'hidden',
                            cursor: 'pointer',
                        }}
                        bg='white'
                        radius='50%'
                        w='150px'
                        h='150px'
                        left='50%'
                        top='100%'
                        pos='absolute'>
                        {(props) => (
                            <Avatar
                                {...props}
                                src={
                                    form.values.avatarImage || 'https://cdn-icons-png.flaticon.com/512/3001/3001764.png'
                                }></Avatar>
                        )}
                    </FileButton>
                </BackgroundImage>
                <Stack w='500px' mx='auto' my='84px'>
                    <TextInput
                        label='Họ Tên'
                        placeholder='Nhập họ tên người dùng'
                        required
                        {...form.getInputProps('tagName')}
                        onChange={(e) => form.setValues({title: e.target.value, slug: transformToUrl(e.target.value)})}
                    />
                    <TextInput label='Thẻ URL' placeholder='Đường dẫn đến người dùng' {...form.getInputProps('slug')} />

                    <Textarea
                        minRows={5}
                        label='Giới thiệu'
                        placeholder='Nhập thông tin giới thiệu...'
                        {...form.getInputProps('bio')}
                    />
                    <Select
                        label='Vai trò'
                        data={[
                            {value: 'VIEWER', label: 'Người xem'},
                            {value: 'CONTRIBUTOR', label: 'Người đóng góp'},
                            {value: 'ADMIN', label: 'Quản trị viên'},
                            {value: 'SUPERADMIN', label: 'Chủ sở hữu'},
                        ]}
                        {...form.getInputProps('userGroup')}
                    />
                    <TextInput
                        label='Website'
                        placeholder='Đường dẫn đến website cá nhân, facebook...'
                        {...form.getInputProps('website')}
                    />
                </Stack>
            </Stack>
        </form>
    )
}
Profile.Layout = Layout

export default Profile
