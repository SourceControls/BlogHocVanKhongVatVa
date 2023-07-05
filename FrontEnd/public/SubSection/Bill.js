import {Divider, Group, Stack, Text, Title} from '@mantine/core';
import {primaryColor} from '../../../components/globalStyle';
import Price from '../../component/Price';

function Bill() {
    return (
        <Stack bg='#f8f8f8' p='md'>
            <Title order={3}>Hóa đơn</Title>
            <Divider size='md' color={primaryColor} />
            <Group position='apart'>
                <Text>Tổng phụ:</Text>
                <Price data={95000} align='right' />
            </Group>
            <Group position='apart'>
                <Text>Khuyến mại:</Text>
                <Price data={-20000} align='right' />
            </Group>
            <Divider size='md' color={primaryColor} />
            <Group position='apart'>
                <Text size='lg' fw='bold'>
                    Tổng:
                </Text>
                <Price data={80000} align='right' />
            </Group>
        </Stack>
    );
}

export default Bill;
