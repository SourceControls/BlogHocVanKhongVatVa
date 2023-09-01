import {Title, Text, Stack, Group} from '@mantine/core'
import Parser from 'html-react-parser'
import {useState, useEffect} from 'react'

function Postcontent(props) {
    const [parsedContent, setParsedContent] = useState('')

    useEffect(() => {
        setParsedContent(Parser(props.post.htmlContent))
    }, [])
    return (
        <Stack>
            <Title>{props.post.title}</Title>

            <Text
                // className='client-post-content'
                sx={{
                    '& .image': {
                        width: '90% !important',
                        display: 'block',
                        margin: '2rem auto 0.3rem',
                    },
                    '& img': {
                        width: '100% !important',
                    },
                }}
                className='format-content'
                style={{overflow: 'hidden'}}>
                {parsedContent}
            </Text>

            <Group spacing='xs'>
                {props.post.postTag.map((e, i) => (
                    <Text color='dimmed' key={i}>
                        {'#' + e.tag.tagName}
                    </Text>
                ))}
            </Group>
        </Stack>
    )
}

export default Postcontent
