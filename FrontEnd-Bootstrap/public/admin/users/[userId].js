import {useForm} from '@mantine/form'
import {
    ActionIcon,
    Avatar,
    BackgroundImage,
    Button,
    Checkbox,
    FileButton,
    Group,
    Menu,
    Select,
    Stack,
    Textarea,
    TextInput,
} from '@mantine/core'
import {transformToUrl, useUsers, updateUser, uploadImg} from '@util'
import Link from 'next/link'
import {IconAccessible, IconAccessibleOff, IconArrowNarrowLeft, IconSettings} from '@tabler/icons-react'
import Layout from '../Layout'
import {useRouter} from 'next/router'
import {useEffect} from 'react'
import AuthGuard from '../AuthGuard'
function Profile() {
    const router = useRouter()
    const form = useForm({
        initialValues: {},
    })
    const {users, isLoading, size, setSize, mutate} = useUsers('', '/' + router.query.userId)
    useEffect(() => {
        if (users[0])
            form.setValues({
                ...users[0],
                avatarFile: undefined,
                coverFile: undefined,
            })
    }, [users[0]])
    const handleSubmit = async () => {
        if (form.values.coverFile) form.values.coverImage = await uploadImg(form.values.coverFile)
        if (form.values.avatarFile) form.values.avatarImage = await uploadImg(form.values.avatarFile)
        const rs = await updateUser(form.values)
        form.setValues(rs)
        mutate([rs], false)
    }
    if (!users[0]) return <></>
    return (
        <AuthGuard allowedRoles={['SUPERADMIN']}>
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <Stack>
                    <Group noWrap align='center'>
                        <Link href='/admin/users'>
                            <Button leftIcon={<IconArrowNarrowLeft />} variant='white'>
                                Trở lại
                            </Button>
                        </Link>

                        <Checkbox
                            ml='auto'
                            disabled={users[0].role === 'SUPERADMIN'}
                            checked={form.values.status === 'BANNED'}
                            onChange={(e) => form.setValues({status: e.target.checked == 1 ? 'BANNED' : 'ACTIVE'})}
                            label='Chặn'
                        />

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
                                        form.values.avatarImage ||
                                        'https://cdn-icons-png.flaticon.com/512/3001/3001764.png'
                                    }></Avatar>
                            )}
                        </FileButton>
                    </BackgroundImage>
                    <Stack w='500px' mx='auto' my='84px'>
                        <TextInput label='Email' disabled value={form.values.email} />
                        <TextInput
                            label='Họ Tên'
                            placeholder='Nhập họ tên người dùng'
                            required
                            {...form.getInputProps('name')}
                            onChange={(e) =>
                                form.setValues({name: e.target.value, slug: transformToUrl(e.target.value)})
                            }
                        />
                        <TextInput
                            label='Thẻ URL'
                            placeholder='Đường dẫn đến người dùng'
                            {...form.getInputProps('slug')}
                        />

                        <Textarea
                            minRows={5}
                            label='Giới thiệu'
                            placeholder='Nhập thông tin giới thiệu...'
                            {...form.getInputProps('bio')}
                        />
                        <Select
                            label='Vai trò'
                            disabled={users[0].role === 'SUPERADMIN'}
                            data={[
                                {value: 'VIEWER', label: 'Người xem'},
                                {value: 'CONTRIBUTOR', label: 'Người đóng góp'},
                                {value: 'ADMIN', label: 'Quản trị viên'},
                                {value: 'SUPERADMIN', label: 'Quản trị viên cao cấp'},
                            ]}
                            {...form.getInputProps('role')}
                        />
                        <TextInput
                            label='Website'
                            placeholder='Đường dẫn đến website cá nhân, facebook...'
                            {...form.getInputProps('website')}
                        />
                    </Stack>
                </Stack>
            </form>
        </AuthGuard>
    )
}
Profile.Layout = Layout

export default Profile
