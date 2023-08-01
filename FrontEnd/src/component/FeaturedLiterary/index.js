import {Carousel} from '@mantine/carousel'
import {Box, Divider, LoadingOverlay, Text} from '@mantine/core'
import {IconArrowLeft, IconArrowRight} from '@tabler/icons-react'
import Autoplay from 'embla-carousel-autoplay'
import {useRef} from 'react'
import {LiteraryContainer} from '../LiteraryContainer'
import Shelf from './Shelf'
import {useMediaQuery} from '@mantine/hooks'
import {useLiteries} from '@util'
export function FeaturedLiterary(props) {
    const autoplay = useRef(Autoplay({delay: 3000}))
    const smScreen = useMediaQuery('(max-width: 48em)')
    const {literaries, isLoading} = useLiteries('&featured=true&limit=8')
    if (isLoading) return <LoadingOverlay visible={true} overlayBlur={2} />
    // if (!literaries || literaries.length === 0)
    //     return (
    //         <Text fw='bold' size='xl' my='xl' align='center'>
    //             Oops!!...
    //         </Text>
    //     )
    return (
        <Box pos='relative' mb='xl'>
            <Carousel
                style={{zIndex: 1}}
                loop
                px={smScreen ? 64 : 64}
                pb={smScreen ? 22 : 44}
                pt='0'
                slidesToScroll={smScreen ? 1 : 4}
                slideSize={smScreen ? '100%' : '25%'}
                align='center'
                withIndicators
                controlSize={45}
                // plugins={[autoplay.current]}
                nextControlIcon={<IconArrowRight size={25} />}
                previousControlIcon={<IconArrowLeft size={25} />}>
                {literaries &&
                    literaries.map((item, index) => {
                        return (
                            <Carousel.Slide key={index} py={smScreen ? 33 : 44} px={44}>
                                <LiteraryContainer literary={item} />
                            </Carousel.Slide>
                        )
                    })}
            </Carousel>
            <Shelf />
        </Box>
    )
}
