import {useLiteries} from '@util'
import Link from 'next/link'
import {useRef} from 'react'

export default function FeaturedLiterary(props) {
    const {literaries, isLoading} = useLiteries('&featured=true&limit=8')
    const carouselRef = useRef(null)
    const handleNextClick = () => {
        const carouselWidth = carouselRef.current.scrollWidth
        const cardWidth = document.querySelector('.carousel-item').offsetWidth
        const newPosition = carouselRef.current.scrollLeft + cardWidth
        console.log(cardWidth, newPosition, carouselWidth)
        const displayedBooks = window.innerWidth <= 767 ? (window.innerWidth <= 576 ? 1 : 2) : 3
        if (carouselWidth < carouselRef.current.scrollLeft + cardWidth * displayedBooks) {
            carouselRef.current.scrollLeft = carouselWidth
        } else carouselRef.current.scrollBy({left: cardWidth, behavior: 'smooth'})
    }

    const handlePrevClick = () => {
        const cardWidth = document.querySelector('.carousel-item').offsetWidth
        const newPosition = carouselRef.current.scrollLeft - cardWidth
        console.log(cardWidth, newPosition)
        if (newPosition <= -1) {
            carouselRef.current.scrollLeft = 0
        } else {
            carouselRef.current.scrollBy({left: -cardWidth, behavior: 'smooth'})
        }
    }
    if (!literaries[0]?.literaryId) return <></>
    return (
        <div className='carousel carousel-dark' id='myCarousel'>
            <div class='carousel-inner' ref={carouselRef}>
                {literaries &&
                    literaries.map((item, index) => {
                        return (
                            <Link
                                href={'/literary/' + item.slug}
                                className={'carousel-item ' + (index == 0 ? 'active' : '')}
                                key={index}>
                                <div className='ratio-4-3'>
                                    <img src={item.image} alt='' />
                                </div>
                            </Link>
                        )
                    })}
            </div>
            <button class='carousel-control-prev' type='button' onClick={handlePrevClick}>
                <span class='carousel-control-prev-icon' aria-hidden='true'></span>
                <span class='visually-hidden'>Previous</span>
            </button>
            <button class='carousel-control-next' type='button' onClick={handleNextClick}>
                <span class='carousel-control-next-icon' aria-hidden='true'></span>
                <span class='visually-hidden'>Next</span>
            </button>
        </div>
    )
}
