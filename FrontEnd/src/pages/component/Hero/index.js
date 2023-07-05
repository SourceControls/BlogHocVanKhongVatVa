import {getConfig, getNews} from '@util'
import NewsCarousel from './../NewsCarousel/index'
import NewsGrid from './../NewsGrid/index'
import {useState, useEffect} from 'react'
function Hero(props) {
    const [hotNews, setHotNews] = useState()
    useEffect(() => {
        getNews({category: props.category, displayType: 'HOT', limit: 5}).then((rs) => {
            setHotNews(rs.data)
        })
    }, [props.category])
    if (hotNews) {
        let heroType = 'grid'
        if (location.pathname.includes('category')) {
            heroType = getConfig().categoryPageHero
        } else {
            heroType = getConfig().homePageHero
        }
        if (heroType == 'carousel') return <NewsCarousel {...props} news={hotNews}></NewsCarousel>
        return <NewsGrid {...props} news={hotNews}></NewsGrid>
    }
}

export default Hero
