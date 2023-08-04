import React, {useEffect, useRef, useState} from 'react'

const ViewCountTracker = ({onComponentInView, postId}) => {
    const componentRef = useRef(null)

    const handleScroll = () => {
        if (componentRef.current) {
            const rect = componentRef.current.getBoundingClientRect()
            if (rect.top >= 0 && rect.top <= window.innerHeight) {
                onComponentInView() // Gọi hàm callback khi component cuộn tới
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [postId])

    return <div ref={componentRef}>ads</div>
}

export default ViewCountTracker
