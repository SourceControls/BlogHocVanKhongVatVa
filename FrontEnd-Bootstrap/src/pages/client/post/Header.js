import {IconArrowNarrowRight, IconSocial} from '@tabler/icons-react'
import {Button, Stack} from 'react-bootstrap'

function Header(props) {
    return (
        <Stack direction='horizontal' className='align-items-center mb-4' gap={2}>
            <img className='rounded-3' width='75px' src={props.post.createdByUser.avatarImage} alt="it's me" />
            <Stack style={{flex: 1}} spacing='0'>
                <Stack direction='horizontal' className='align-items-center'>
                    <p className='fw-bold'>{props.post.createdByUser.name}</p>
                    <p className='text-muted fs-6'>
                        {props.post.createdByUser.role === 'VIEWER' && '(Người xem)'}
                        {props.post.createdByUser.role === 'CONTRIBUTOR' && '(Cộng tác viên)'}
                        {props.post.createdByUser.role === 'ADMIN' && '(Quản trị viên)'}
                        {props.post.createdByUser.role === 'SUPERADMIN' && '(QTV cao cấp)'}
                    </p>
                </Stack>
                <p className='text-muted'>{props.post.createdByUser.email}</p>
            </Stack>
            <Button as='a' variant='link' target='_blank' href={props.post.createdByUser.website || '#'}>
                Liên hệ
                {<IconArrowNarrowRight />}
            </Button>
        </Stack>
    )
}

export default Header
