import {Carousel} from '@mantine/carousel'
import {LoadingOverlay} from '@mantine/core'
import {IconArrowLeft, IconArrowRight} from '@tabler/icons-react'
import Autoplay from 'embla-carousel-autoplay'
import {useRef} from 'react'
import {LiteraryContainer} from '../LiteraryContainer'
import {useMediaQuery} from '@mantine/hooks'
import {useLiteries} from '@util'
export function FeaturedLiterary(props) {
    const autoplay = useRef(Autoplay({delay: 3000}))
    const smScreen = useMediaQuery('(max-width: 48em)')
    const {literaries, isLoading} = useLiteries('&featured=true&limit=8')
    if (!literaries[0]?.literaryId) return <LoadingOverlay />

    return (
        <Carousel
            style={{zIndex: 1}}
            loop
            px={64}
            pb={48}
            my='xl'
            w='90%'
            mx='auto'
            slidesToScroll={smScreen ? 1 : 3}
            slideSize={smScreen ? '100%' : '33.33%'}
            align='start'
            withIndicators
            controlSize={45}
            // plugins={[autoplay.current]}
            nextControlIcon={<IconArrowRight size={25} />}
            previousControlIcon={<IconArrowLeft size={25} />}>
            {literaries &&
                literaries.map((item, index) => {
                    return (
                        <Carousel.Slide key={index} px={24}>
                            <LiteraryContainer literary={item} />
                        </Carousel.Slide>
                    )
                })}
        </Carousel>
    )
}
