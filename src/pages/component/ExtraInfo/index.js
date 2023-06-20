import {Flex, Text} from '@mantine/core'
import {IconClockHour4} from '@tabler/icons-react'

function ExtraInfo({publisher = {}, publishedAt = '', justify = 'flex-end', color = 'grey', fontSize = '0.9rem'}) {
    return (
        <Flex justify={justify} mt='auto'>
            <Flex align={'center'}>
                <Text
                    style={{
                        color,
                        fontSize,
                    }}
                    lineClamp={1}>
                    {publisher[0].name + ', '}
                </Text>
                <IconClockHour4 style={{padding: '0 4px 0 6px'}} color={color} />
                <Text
                    style={{
                        color,
                        fontSize,
                    }}
                    lineClamp={1}>
                    {publishedAt}
                </Text>
            </Flex>
        </Flex>
    )
}

export default ExtraInfo
