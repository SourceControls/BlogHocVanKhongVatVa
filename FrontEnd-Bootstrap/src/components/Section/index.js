import {Stack} from 'react-bootstrap'

export function Section(props) {
    return (
        <Stack mb='xl'>
            <div className='d-flex align-items-center'>
                {props.titlePosition == 'center' && (
                    <div className='border border-1 border-primary' style={{flex: '1 1 auto'}} />
                )}
                <p className='h3 text-center' style={{flex: '0 0 auto'}}>
                    {props.title}
                </p>
                <div className='border border-1 ms-4 border-primary' style={{flex: '1 1 auto'}} />
            </div>
            {props.children}
        </Stack>
    )
}
