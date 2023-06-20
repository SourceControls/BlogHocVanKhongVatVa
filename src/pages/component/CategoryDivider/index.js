import {Divider, Flex, Stack, Text, Button, Anchor} from '@mantine/core'
import {IconArrowRight} from '@tabler/icons-react'

function CategoryDivider({name = 'Tin tức', width = '100%', endPoint}) {
    return (
        <Stack w={width} mx='auto' spacing='3px'>
            <Flex justify='space-between'>
                <Text tt='uppercase' color='white' fs='1.3rem' fw='bold' px={12} py={2} variant='category'>
                    {name}
                </Text>
                {endPoint && (
                    <Anchor
                        fw='bold'
                        size='md'
                        variant='category'
                        href={endPoint}
                        style={{
                            display: 'flex',
                            justifyItems: 'center',
                        }}>
                        Xem tất cả
                        <IconArrowRight />
                    </Anchor>
                )}
            </Flex>
            <Divider mb='md' size='md' w='100%' />
        </Stack>
    )
}

export default CategoryDivider
