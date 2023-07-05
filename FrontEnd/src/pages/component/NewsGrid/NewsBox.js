import {Anchor, BackgroundImage, Box, Stack, Text, Title, Center, Flex} from '@mantine/core'
import Link from 'next/link'
import ExtraInfo from '../../component/ExtraInfo'

function getConfig(size) {
    switch (size) {
        case 'sm':
            return {
                lineClamp: 3,
                order: 4,
                hideContent: true,
                textBoxHeight: '50%',
            }
        case 'md':
            return {
                lineClamp: 2,
                contentClamp: 2,
                order: 3,
            }
        default:
            return {
                lineClamp: 2,
                contentClamp: 3,
                order: 1,
            }
    }
}

function NewsBox(props) {
    const config = getConfig(props.size)
    return (
        <Box {...props}>
            {props.new && (
                <BackgroundImage src={props.new.image} h='100%'>
                    <Stack align='flex-end' justify='flex-end' h='100%'>
                        <Stack
                            p='md'
                            h={config.textBoxHeight}
                            w='100%'
                            style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                            }}>
                            <Title order={config.order} lineClamp={config.lineClamp}>
                                <Link href={props.new.url} style={{color: 'white'}}>
                                    {props.new.title}
                                </Link>
                            </Title>
                            {config.hideContent ? null : (
                                <Text lineClamp={config.contentClamp} color='white'>
                                    {props.new.subTitle}
                                </Text>
                            )}
                            <ExtraInfo
                                publisher={props.new.publisher}
                                publishedAt={props.new.publishedAt}
                                color='white'
                            />
                        </Stack>
                    </Stack>
                </BackgroundImage>
            )}
        </Box>
    )
}

export default NewsBox
