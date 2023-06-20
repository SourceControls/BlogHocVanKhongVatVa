import {Input, Select, TextInput, Button, Stack} from '@mantine/core';
import {useForm} from '@mantine/form';
import {IconNewSection, IconPlus} from '@tabler/icons-react';
function AddCustomerForm() {
    const form = useForm({
        initialValues: {name: '', email: '', phone: '', address: ''},
        validate: {
            name: (value) => (value.length < 2 ? 'Tên phải có ít nhất 2 kí tự' : null),
            phone: (value) => (value.match(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g) ? null : 'Số điện thoại không đúng!'),
            email: (value) => {
                if (value.trim().length === 0) return null;
                return /^\S+@\S+$/.test(value) ? null : 'Email không hợp lệ';
            },
        },
    });
    return (
        <form onSubmit={form.onSubmit(console.log)}>
            <Stack>
                <TextInput
                    label='Họ tên'
                    placeholder='Nhập họ tên...'
                    {...form.getInputProps('name')}
                    withAsterisk
                    data-autofocus></TextInput>
                <TextInput
                    label='Số điện thoại'
                    placeholder='Nhập số điện thoại...'
                    {...form.getInputProps('phone')}
                    withAsterisk></TextInput>
                <TextInput label='Email' placeholder='Nhập email...' {...form.getInputProps('email')}></TextInput>
                <TextInput label='Địa chỉ' placeholder='Nhập địa chỉ...'></TextInput>
                <Button leftIcon={<IconPlus />} type='submit'>
                    Thêm mới
                </Button>
            </Stack>
        </form>
    );
}

export default AddCustomerForm;
