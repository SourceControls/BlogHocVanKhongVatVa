import {Box, Image} from '@mantine/core'
import {useMediaQuery} from '@mantine/hooks'

function Shelf() {
    const smScreen = useMediaQuery('(max-width: 48em)')

    return (
        <Box
            styles={{
                zIndex: -1,
                boxShadow: '8px 16px 16px rgba(0,0,0,0.6)',
            }}>
            <Image mx='auto' src='https://i.ibb.co/StcbPKk/My-project.png' mt={smScreen ? '-15%' : '-10%'} alt='' />
        </Box>
    )
}

export default Shelf
