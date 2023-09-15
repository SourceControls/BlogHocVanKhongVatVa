import {IconEyeOff} from '@tabler/icons-react'
import {IconEye} from '@tabler/icons-react'
import {useRef, useState} from 'react'

export default function Spoiler({children}) {
    const [show, setshow] = useState(true)
    const elementRef = useRef(null)
    return (
        <>
            <div className='d-flex flex-column'>
                <div
                    style={{
                        maxHeight: show ? '7.8rem' : elementRef.current.getBoundingClientRect().height,
                        overflow: 'hidden',
                        transition: '0.3s',
                    }}>
                    <div className='format-content' ref={elementRef}>
                        {children}
                    </div>
                </div>
                {show ? (
                    <div
                        role='button'
                        className='d-flex align-items-center color-5 text-decoration-underline'
                        onClick={() => setshow(!show)}>
                        ...Xem Thêm
                        <IconEye className='ms-2' />
                    </div>
                ) : (
                    <div
                        role='button'
                        className='d-flex align-items-center color-5 text-decoration-underline'
                        onClick={() => setshow(!show)}>
                        - Ẩn Bớt
                        <IconEyeOff className='ms-2' />
                    </div>
                )}
            </div>
        </>
    )
}
