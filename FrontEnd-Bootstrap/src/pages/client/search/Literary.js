import Link from 'next/link'
import {IconEye, IconNews, IconThumbUp} from '@tabler/icons-react'
import {Stack} from 'react-bootstrap'

export default function Literary(props) {
    if (!props.literary?.literaryId) return <></>
    return (
        <Stack direction='horizontal' gap={3}>
            <Link href={'/literary/' + props.literary.slug} style={{flexBasis: '50%'}}>
                <div className='ratio-4-3'>
                    <img src={props.literary.image} alt='' />
                </div>
            </Link>
            <Stack gap='3' style={{flexBasis: '50%'}}>
                <Link href={'/literary/' + props.literary.slug}>
                    <h2>{props.literary.title}</h2>
                    <p size='xs' color='dimmed'>
                        {props.literary.author || 'Khuyết Danh'}
                    </p>
                </Link>
                <p className='text-justify max-line-5'>{props.literary.summary}</p>
                <Stack direction='horizontal' gap={3}>
                    <Stack className='align-items-center' direction='horizontal' gap={1}>
                        <IconEye />
                        <p>{props.literary.view}</p>
                    </Stack>
                    <Stack className='align-items-center' direction='horizontal' gap={1}>
                        <IconNews />
                        <p>
                            {props.literary.postCount + ' '}
                            bài viết
                        </p>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}
