import {Group, Image, Stack, Title, Text, ActionIcon, Badge, Paper, Button, ScrollArea} from '@mantine/core';
import {IconMinus, IconPlus, IconTrash} from '@tabler/icons-react';
import {useState} from 'react';
import Price from '../../component/Price';

function Details() {
    const [quantity, setQuantity] = useState(1);

    return (
        <Paper shadow='sm' withBorder mb={6}>
            <Group p='sm'>
                <Image
                    src='https://static.kfcvietnam.com.vn/images/items/lg/D1-new.jpg?v=4aj0lg'
                    height={60}
                    width={60}
                    alt='FoodName'
                />
                <Stack style={{flexGrow: 1}}>
                    <Group position='apart' style={{flexGrow: 1}}>
                        <Text weight={500} lineClamp={1}>
                            Gà giòn chiên xù 65gram
                        </Text>
                        <ActionIcon variant='filled'>
                            <IconTrash />
                        </ActionIcon>
                    </Group>
                    <Group position='apart'>
                        <Price data={95000}></Price>
                        <Group>
                            <ActionIcon onClick={() => setQuantity((q) => (q - 1 > 0 ? --q : 1))}>
                                <IconMinus />
                            </ActionIcon>
                            <Badge size='xl'>{quantity}</Badge>

                            <ActionIcon onClick={() => setQuantity((q) => ++q)}>
                                <IconPlus />
                            </ActionIcon>
                        </Group>
                    </Group>
                </Stack>
            </Group>
        </Paper>
    );
}

export default Details;
