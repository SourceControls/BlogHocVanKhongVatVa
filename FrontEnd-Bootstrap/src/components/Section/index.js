import {Divider, Flex, Group, Stack, Title} from '@mantine/core'

export function Section(props) {
    return (
        <Stack mb='xl'>
            <Flex align='center'>
                {props.titlePosition == 'center' && <Divider size='md' mr='xl' style={{flex: '1 1 auto'}} />}
                <Title order={2} align='center' style={{flex: '0 0 auto'}}>
                    {props.title}
                </Title>
                <Divider size='md' style={{flex: '1 1 auto'}} ml='xl' />
            </Flex>
            {props.children}
        </Stack>
    )
}
