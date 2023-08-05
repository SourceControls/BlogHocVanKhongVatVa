import {Button, Center, Image, PasswordInput, Stack, Tabs, Text, Textarea, TextInput} from '@mantine/core'
import {useForm} from '@mantine/form'
import {ImageDropzone} from '@comp'
import {useUsers, updateUser, changePassword, uploadImg} from '@util'
import {useEffect} from 'react'

function BaseInfo() {
    const {users, mutate} = useUsers('', '/profile')
    const form = useForm({
        initialValues: {},
    })
    useEffect(() => {
        form.setValues(users[0])
    }, [users[0]?.userId])
    const handleSubmit = async () => {
        if (form.values.file) form.values.avatarImage = await uploadImg(form.values.file)
        updateUser(form.values).then((rs) => {
            if (rs) mutate([rs])
        })
    }
    return (
        <>
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <Stack mt='xl'>
                    <ImageDropzone form={form} imageField='avatarImage' radius='50%' fit='cover' />
                    <TextInput
                        label='Email'
                        disabled
                        placeholder='Nhập họ tên người dùng'
                        required
                        {...form.getInputProps('email')}
                    />
                    <TextInput
                        disabled
                        label='Thẻ URL'
                        placeholder='Đường dẫn đến profile của bạn'
                        value={form.values.slug}
                    />
                    <TextInput
                        label='Họ Tên'
                        placeholder='Nhập họ tên người dùng'
                        required
                        {...form.getInputProps('name')}
                    />

                    <TextInput
                        label='Website'
                        placeholder='Đường dẫn đến website cá nhân, facebook...'
                        {...form.getInputProps('website')}
                    />
                    <Textarea
                        minRows={5}
                        label='Bio'
                        placeholder='Viết vài điều về bạn...'
                        {...form.getInputProps('bio')}
                    />
                    <Button type='submit' mx='auto' mt='lg'>
                        Lưu
                    </Button>
                </Stack>
            </form>
        </>
    )
}
function AuthInfo() {
    const form = useForm({
        initialValues: {password: '', newPassword: '', confirmPassword: ''},
    })
    const handleSubmit = () => {
        changePassword(form.values).then((rs) => {
            if (rs) form.reset()
        })
    }
    return (
        <>
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <Stack mt='xl'>
                    <PasswordInput
                        {...form.getInputProps('password')}
                        label='Mật khẩu'
                        placeholder='Nhập mật khẩu hiện tại'
                        required
                    />
                    <PasswordInput
                        {...form.getInputProps('newPassword')}
                        label='Mật khẩu'
                        placeholder='Nhập mật khẩu mới'
                        required
                    />
                    <PasswordInput
                        {...form.getInputProps('confirmPassword')}
                        label='Nhập lại mật khẩu'
                        placeholder='Nhập lại mật khẩu mới'
                        required
                    />
                    <Button type='submit' mx='auto' mt='lg'>
                        Lưu
                    </Button>
                </Stack>
            </form>
        </>
    )
}
function ProfileForm() {
    return (
        <Tabs defaultValue='base' pb='xl'>
            <Tabs.List mb='md'>
                <Tabs.Tab value='base'>Thông tin người dùng</Tabs.Tab>
                <Tabs.Tab value='changePass'>Đổi mật khẩu</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value='base'>
                <BaseInfo />
            </Tabs.Panel>
            <Tabs.Panel value='changePass'>
                <AuthInfo />
            </Tabs.Panel>
        </Tabs>
    )
}

export default ProfileForm
