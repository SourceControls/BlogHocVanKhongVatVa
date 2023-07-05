import {Anchor, Flex, Title, Image, Text, Stack} from '@mantine/core'
import Link from 'next/link'

import {useEffect, useState} from 'react'
import {getNews} from '../../../util/service'
import ExtraInfo from '../ExtraInfo'

function TopNews(props) {
    const [news, setNews] = useState()
    useEffect(() => {
        getNews({category: props.category, displayType: 'TOP', limit: 2}).then((rs) => {
            setNews(rs.data[0])
        })
    }, [])
    return (
        <Stack w='35%'>
            {news && (
                <Stack pl='xl'>
                    <Link href={news.url}>
                        <Image fit='cover' src={news.image} alt='' />
                    </Link>
                    <Flex direction='column' gap='xl'>
                        <Title order={2} lineClamp={3}>
                            <Link href={news.url} variant='mdTitle'>
                                {news.title}
                            </Link>
                        </Title>
                        <Text lineClamp={6}>{news.subTitle}</Text>
                        <ExtraInfo {...news} />
                    </Flex>
                </Stack>
            )}
        </Stack>
    )
}

export default TopNews
