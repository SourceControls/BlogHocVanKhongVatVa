import {Image, Title, Text, Box, Paper, Group, Stack, ScrollArea, Spoiler, AspectRatio} from '@mantine/core'
import Link from 'next/link'
import {Eye, News, ThumbUp} from 'tabler-icons-react'
import {useMediaQuery} from '@mantine/hooks'

export function LiteraryContainer(props) {
    const smScreen = useMediaQuery('(max-width: 48em)')
    if (!props.literary?.literaryId) return <></>
    return (
        <Box
            // w={props.width}
            // display='inline-block'
            sx={(theme) => ({
                backgroundColor: 'transparent',
                paddingTop: '24px',
                transition: '0.3s',
                ' .bookContainer': {
                    transition: '0.3s',
                },
                '&:hover .bookContainer': {
                    transform: 'translate(-1%,-3%)',
                },
                borderRadius: '12px',
            })}>
            <Group grow align='flex-start'>
                <Link
                    href={'/literary/' + props.literary.slug}
                    style={{
                        display: 'block',
                        position: 'relative',
                        width: props.showContent ? '40%' : 'auto',
                    }}
                    className='bookContainer'>
                    <AspectRatio ratio={3 / 4}>
                        <img
                            src={props.literary.image}
                            alt=''
                            style={{borderRadius: '24px'}}
                            width='100%'
                            height='100%'
                        />
                    </AspectRatio>
                </Link>
                {props.showContent && (
                    <Stack w={smScreen ? '100%' : '80%'} ml={'xs'} h='100%' spacing='xs'>
                        <Link href={'/literary/' + props.literary.slug}>
                            <Title order={2}>{props.literary.title}</Title>
                            <Text size='xs' color='dimmed'>
                                {props.literary.author || 'Khuyết Danh'}
                            </Text>
                        </Link>
                        <ScrollArea h={160}>
                            <Spoiler maxHeight={125} showLabel='...Xem thêm' align='justify'>
                                {props.literary.summary}
                            </Spoiler>
                        </ScrollArea>
                        <Group spacing='md' align='flex-start' noWrap>
                            <Group spacing='6px'>
                                <Eye />
                                <Text>{props.literary.view}</Text>
                            </Group>
                            <Group spacing='6px'>
                                <News />
                                <Text>
                                    {props.literary.postCount + ' '}
                                    bài viết
                                </Text>
                            </Group>
                        </Group>
                    </Stack>
                )}
            </Group>
        </Box>
    )
}
