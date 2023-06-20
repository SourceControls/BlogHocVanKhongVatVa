import {Paper, Flex, Title, Text, Stack, Space, Image, MantineProvider} from '@mantine/core'
import Parser from 'html-react-parser'
import {useState, useEffect} from 'react'
import style from '@util'

function Postcontent(props) {
    const [parsedContent, setParsedContent] = useState('')

    useEffect(() => {
        setParsedContent(Parser(props.content))
    }, [])
    return (
        <Stack>
            <Title>{props.title}</Title>
            <Text align='justify' style={{overflow: 'hidden'}}>
                {parsedContent}
            </Text>
        </Stack>
    )
}

export default Postcontent
