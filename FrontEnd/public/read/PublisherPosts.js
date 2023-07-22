import {Avatar, Stack, Text, Button, ActionIcon, Group, Title, Divider} from '@mantine/core'
import {IconMail} from '@tabler/icons-react'
import NewsRow from '../component/NewsRow'
import {getNewsByPublisher} from '@util'
import {useEffect, useState} from 'react'
function PublisherPosts(props) {
    const [news, setNews] = useState()
    useEffect(() => {
        getNewsByPublisher({publisher: props.publisher[0]._id, limit: 4}).then((rs) => {
            setNews(rs.data)
        })
    }, [])
    return (
        <Stack p='md'>
            <Avatar
                src='https://www.graphicdesignforum.com/uploads/default/original/2X/0/0e58f26a6dd982e7f04d1286defd4320e6d6153b.jpeg'
                alt="it's me"
                size='xl'
            />
            <Text fw='bold'>{props.publisher[0].name}</Text>
            <Text variant='extraInfor' color='gray'>
                68M follower
            </Text>
            <Text variant='extraInfor' lineClamp={4}>
                {props.publisher[0].bio}
            </Text>
            <Group>
                <Button variant='outline'>Theo dõi</Button>
                <ActionIcon title='Gửi email'>
                    <IconMail />
                </ActionIcon>
            </Group>
            <Divider size='md' my='md' />
            <Title fw='bold' order={3}>
                Bài viết nổi bật
            </Title>
            <Stack>
                {news &&
                    news.map((item, index) => (
                        <NewsRow key={index} {...item} publisher={props.publisher} index={index} size='sm'></NewsRow>
                    ))}
            </Stack>
        </Stack>
    )
}

export default PublisherPosts
