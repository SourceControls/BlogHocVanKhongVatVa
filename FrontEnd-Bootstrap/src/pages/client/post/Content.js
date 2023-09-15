import Parser from 'html-react-parser'
import {useState, useEffect} from 'react'
import {Stack} from 'react-bootstrap'

function Content(props) {
    const [parsedContent, setParsedContent] = useState('')

    useEffect(() => {
        setParsedContent(Parser(props.post.htmlContent))
    }, [])
    return (
        <Stack gap={3}>
            <h1>{props.post.title}</h1>
            <div className='format-content post-content'>{parsedContent}</div>
            <Stack direction='horizontal' gap={2}>
                {props.post.postTag.map((e, i) => (
                    <p color='dimmed' key={i}>
                        {'#' + e.tag.tagName}
                    </p>
                ))}
            </Stack>
        </Stack>
    )
}

export default Content
