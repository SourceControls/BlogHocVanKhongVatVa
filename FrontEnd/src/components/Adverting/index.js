import {Anchor, Box, Center} from '@mantine/core'
import {useAdvertisements} from '@util'

export function Adverting({type = 'horizontal', position, ...props}) {
    const {advertisements: ads} = useAdvertisements('', '/client/' + position)
    if (!ads[0]?.advertisementId) return <></>

    if (type == 'horizontal')
        return (
            <>
                <Center w='100%' mah='200px' mx='auto' {...props}>
                    <Anchor target='_blank' href={ads[0].target} style={{border: '1px solid var(--primary-color-3)'}}>
                        <img src={ads[0].image} />
                    </Anchor>
                </Center>
            </>
        )
}
