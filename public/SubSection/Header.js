import {Title, Stack, Text, ActionIcon, Group, Modal, Select} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import {IconNewSection, IconSearch, IconSettings, IconPlus} from '@tabler/icons-react';
import {primaryColor} from '../../../components/globalStyle';
import AddCustomerForm from './AddCustomerForm';

function Header() {
    const [opened, {open, close}] = useDisclosure(false);
    let listCustomer = [
        {value: '1', label: 'Tuấn Hùng - 0973343541'},
        {value: '2', label: 'Văn A - 0123456'},
        {value: '3', label: 'Văn C - 0398273'},
        {value: '4', label: 'Văn E - 0999999'},
    ];
    return (
        <>
            <Modal opened={opened} onClose={close} title='Thêm khách hàng' centered yOffset='1vh' xOffset={0}>
                <AddCustomerForm></AddCustomerForm>
            </Modal>
            <Stack>
                <Title>Order hiện tại</Title>
                <Group position='apart'>
                    <Select
                        placeholder='Chọn khách hàng'
                        searchable
                        nothingFound='No options'
                        data={listCustomer}
                        clearable
                        icon={<IconSearch />}
                        w='80%'
                    />
                    <ActionIcon title='Thêm mới khách hàng' onClick={open}>
                        <IconPlus />
                    </ActionIcon>
                </Group>
                <Group>
                    <Text>Điểm tích lũy:</Text>
                    <Text fw='bold' color={primaryColor}>
                        1000
                    </Text>
                </Group>
            </Stack>
        </>
    );
}

export default Header;
