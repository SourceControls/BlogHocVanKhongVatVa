import {Box, MediaQuery, Stack} from '@mantine/core'

// Helper function to convert hex to RGB
const hexToRgb = (hex, opacity = 1) => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
    const fullHexRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i

    let result = null

    // Check for shorthand hex format (e.g., #f00)
    if (hex.match(shorthandRegex)) {
        result = shorthandRegex.exec(hex)
        result = `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)},${opacity})`
    } else if (hex.match(fullHexRegex)) {
        result = fullHexRegex.exec(hex)
        result = `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)},${opacity})`
    }

    return result
}

export function Decorate({align}) {
    return (
        <Stack spacing={0} my='xl' w='100%'>
            <Box
                sx={(theme) => ({
                    backgroundColor: hexToRgb('--primary-color-2', 0.1),
                })}>
                <Box
                    w='15%'
                    h={26}
                    sx={(theme) => ({
                        backgroundColor: hexToRgb('--primary-color-2', 0.5),
                        margin: align == 'left' ? '0 auto 0 0' : '0 0 0 auto',
                    })}></Box>
            </Box>
            <Box
                sx={(theme) => ({
                    backgroundColor: hexToRgb('--primary-color-8', 0.2),
                })}>
                <Box
                    w='30%'
                    h={26}
                    sx={(theme) => ({
                        backgroundColor: hexToRgb('--primary-color-3'),
                        margin: align == 'left' ? '0 auto 0 0' : '0 0 0 auto',
                    })}></Box>
            </Box>
            <Box
                sx={(theme) => ({
                    backgroundColor: hexToRgb('--primary-color-8', 0.35),
                })}>
                <Box
                    w='50%'
                    h={26}
                    sx={(theme) => ({
                        backgroundColor: hexToRgb('--primary-color-5'),
                        margin: align == 'left' ? '0 auto 0 0' : '0 0 0 auto',
                    })}></Box>
            </Box>
            <Box
                sx={(theme) => ({
                    backgroundColor: hexToRgb('--primary-color-8', 0.5),
                })}>
                <Box
                    w='70%'
                    h={26}
                    sx={(theme) => ({
                        backgroundColor: hexToRgb('--primary-color-7'),
                        margin: align == 'left' ? '0 auto 0 0' : '0 0 0 auto',
                    })}></Box>
            </Box>
            <Box sx={(theme) => ({})}>
                <Box
                    w='100%'
                    h={26}
                    sx={(theme) => ({
                        backgroundColor: hexToRgb('--primary-color-9'),
                        margin: align == 'left' ? '0 auto 0 0' : '0 0 0 auto',
                    })}></Box>
            </Box>
        </Stack>
    )
}
