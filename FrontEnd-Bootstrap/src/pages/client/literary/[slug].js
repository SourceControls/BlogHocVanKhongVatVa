import Layout from '../Layout'
import {useRouter} from 'next/router'
import {Section, GridPost, AnimatedDivider} from '@comp'
import {IconEye, IconEyeOff, IconNews} from '@tabler/icons-react'
import {useLiteries, countLiterayView} from '@util'
import ViewTracker from './ViewTracker'
import {useRef, useState} from 'react'
import Head from 'next/head'
import {Stack} from 'react-bootstrap'
import Spoiler from '../../../components/Spoiler'
function Category() {
    const router = useRouter()
    const [viewed, setViewed] = useState(false)
    const {literaries, isLoading, mutate} = useLiteries('', `/${router.query.slug}`)

    const handleCountView = () => {
        setViewed(true)
        countLiterayView(literaries[0].slug).then((rs) => {
            if (rs?.literaryId) {
                mutate([rs], false)
            }
        })
    }
    if (!literaries[0]?.literaryId) {
        return <p>Loading...</p>
    }
    return (
        <div>
            <Head>
                <title>Tác phẩm {literaries[0].title + ' - ' + literaries[0].authorName} </title>
            </Head>
            <Stack className='mx-auto mt-5' style={{maxWidth: '800px'}}>
                <Stack className='flex-md-row' gap={3}>
                    <div style={{flexBasis: '50%'}}>
                        <div className='ratio-4-3'>
                            <img src={literaries[0].image} alt='' style={{borderRadius: '24px'}} />
                        </div>
                    </div>

                    <Stack gap={3}>
                        <h1 className='fw-bold'>{literaries[0].title}</h1>
                        <div>
                            <span className='fw-bold fs-4 me-3'>Tác giả:</span>
                            {literaries[0].authorName}
                        </div>
                        <div>
                            <span className='fw-bold fs-4 me-3'> Sáng tác:</span>
                            {literaries[0].timeOfCreation}
                        </div>
                        <div>
                            <span className='fw-bold fs-4 me-3'> Thể loại:</span>
                            {literaries[0].literaryCategory[0]?.category.categoryName}
                        </div>
                        <div className='d-flex align-items-center'>
                            <IconEye className='me-1' />
                            {literaries[0].view}
                            <IconNews className='ms-3 me-1' />
                            {literaries[0].postCount} bài viết
                        </div>
                    </Stack>
                </Stack>
                <p className='fw-bold fs-4 mt-4'>Giới thiệu</p>
                <p pb='md' className='format-content'>
                    {literaries[0].intro}
                </p>
                <p className='fw-bold fs-4 mt-4'>Tóm tắt</p>
                <Spoiler>{literaries[0].summary}</Spoiler>
            </Stack>

            <AnimatedDivider />
            {!viewed && <ViewTracker literaryId={literaries[0]?.literaryId} onComponentInView={handleCountView} />}

            <Section title={'Bài Viết Về: ' + literaries[0].title}>
                <GridPost query={'&status=published&literarySlug=' + router.query.slug} />
            </Section>
        </div>
    )
}

Category.Layout = Layout
export default Category
