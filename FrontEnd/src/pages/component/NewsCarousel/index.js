import {Flex, Image, Text, Title, Anchor, Stack, Paper} from '@mantine/core'
import {Carousel} from '@mantine/carousel'
import {IconArrowLeft, IconArrowRight} from '@tabler/icons-react'
import Autoplay from 'embla-carousel-autoplay'
import {useRef} from 'react'
import ExtraInfo from '../ExtraInfo'
import Link from 'next/link'
function NewsCarousel(props) {
    const autoplay = useRef(Autoplay({delay: 3000}))
    return (
        <Carousel
            mx='auto'
            maw={1200}
            my='32px'
            loop
            withIndicators
            controlSize={45}
            plugins={[autoplay.current]}
            nextControlIcon={<IconArrowRight size={25} />}
            previousControlIcon={<IconArrowLeft size={25} />}>
            {props.news.map((item, index) => {
                return (
                    <Carousel.Slide key={index}>
                        <Stack align='center'>
                            <Link href={item.url}>
                                <Image width={1200} height={500} fit='cover' src={item.image} alt='' />
                            </Link>
                            <Paper
                                w={'80%'}
                                h={300}
                                bg='#FFFFFF'
                                mt='-200px'
                                style={{zIndex: '10'}}
                                shadow='xl'
                                p={48}
                                mb={64}>
                                <Flex direction='column' gap='xl'>
                                    <Title order={1} mx='md' lineClamp={2}>
                                        <Link href={item.url} variant='nav'>
                                            {item.title}
                                        </Link>
                                    </Title>
                                    <Text mx='xl' lineClamp={5}>
                                        {item.subTitle}
                                    </Text>
                                    <ExtraInfo publisher={item.publisher} publishedAt={item.publishedAt} />
                                </Flex>
                            </Paper>
                        </Stack>
                    </Carousel.Slide>
                )
            })}
        </Carousel>
    )
}

export default NewsCarousel
