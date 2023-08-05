import {Box, Center} from '@mantine/core'

export function Adverting({type = 'horizontal'}) {
    if (type == 'horizontal')
        return (
            <>
                <Center style={{border: '1px solid black'}} w='100%' h='200px' mx='auto' mb='md'>
                    Adverting
                </Center>
            </>
        )
}
