import {Flex, Anchor, Image, Title, Text, Divider, Stack} from '@mantine/core'
import Link from 'next/link'
import ExtraInfo from '../ExtraInfo'

function getConfig(size) {
    let config = {
        image: {
            width: 200,
            height: 140,
        },
        title: {
            order: 3,
            lineClamp: 1,
        },
        showContent: true,
    }

    if (size == 'sm') {
        config = {
            image: {
                width: 100,
                height: 80,
            },
            title: {
                order: 6,
                lineClamp: 3,
            },
        }
    }
    return config
}

function NewsRow(props) {
    const config = getConfig(props.size)
    return (
        <>
            <Flex>
                <Link href={props.url}>
                    <Image {...config.image} fit='cover' src={props.image} alt='news img' />
                </Link>
                <Stack spacing='0' pl='md'>
                    <Title {...config.title}>
                        <Link href={props.url}>{props.title}</Link>
                    </Title>
                    {config.showContent && <Text lineClamp={3}>{props.subTitle}</Text>}
                    <ExtraInfo publisher={props.publisher} publishedAt={props.publishedAt} />
                </Stack>
            </Flex>
            <Divider my='sm' />
        </>
    )
}

export default NewsRow
