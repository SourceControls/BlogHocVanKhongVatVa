import {Title, Text, Stack} from '@mantine/core'
import Parser from 'html-react-parser'
import {useState, useEffect} from 'react'

function Postcontent(props) {
    const [parsedContent, setParsedContent] = useState('')

    useEffect(() => {
        setParsedContent(Parser(props.post.htmlContent))
    }, [])
    return (
        <Stack>
            <Title>Phân Tích Nhân Vật Phùng Trong Tấm Cám</Title>
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
                // align='justify'
                style={{overflow: 'hidden', letterSpacing: '0.05rem', wordSpacing: '0.2rem', lineHeight: '1.6rem'}}>
                {parsedContent}
            </Text>
        </Stack>
    )
}

export default Postcontent
