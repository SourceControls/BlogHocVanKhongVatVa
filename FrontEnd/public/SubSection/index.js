import Header from './Header';
import Details from './Details';
import Bill from './Bill';
import {Button, ScrollArea, Select, Stack, Title} from '@mantine/core';
import Options from './Options';

function OrderSection(props) {
    return (
        <Stack w={props.w} p='md' justify='flex-start' bg='white'>
            <Header></Header>
            <Stack>
                <Title order={3}>Chi tiết đơn đặt</Title>
                <ScrollArea h={310}>
                    {[1, 1, 1, 1, 1, 1].map((e) => (
                        <Details></Details>
                    ))}
                </ScrollArea>
            </Stack>
            <Options></Options>
            <Bill></Bill>
            <Button>Thanh toán</Button>
        </Stack>
    );
}

export default OrderSection;
