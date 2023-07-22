import {Box, Divider, Flex, Group, Text} from '@mantine/core'
import {IconClockHour4} from '@tabler/icons-react'

export function ExtraInfo({publisherName = 'Khuyết Danh', publishedAt = '...', color = 'dimmed'}) {
    return (
        <Text color={color}>
            <Group noWrap>
                <Text lineClamp={1} fw='bold'>
                    {publisherName}
                </Text>
                {/* <Divider orientation='vertical' size='sm' /> */}
                {'-'}
                <Group noWrap>
                    {/* <IconClockHour4 /> */}
                    <Text lineClamp={1}>{'21 phút trước'}</Text>
                </Group>
            </Group>
        </Text>
    )
}
