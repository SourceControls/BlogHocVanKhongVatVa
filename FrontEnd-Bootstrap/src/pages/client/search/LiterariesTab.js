import {useRouter} from 'next/router'
import {useLiteries, useCategories} from '@util'
import {Button, Col, Container, Form, Row, Stack} from 'react-bootstrap'
import Literary from './Literary'
function GridLiterarySkeleton({smScreen}) {
    return (
        <>
            {[1, 1].map((e, i) => (
                <div className='d-flex gap-3' key={i}>
                    <div className='ratio-4-3' style={{flexBasis: '50%'}}>
                        <div
                            className='animated-skeleton'
                            style={{borderRadius: '24px', width: '100%', height: '400px'}}></div>
                    </div>
                    <Stack>
                        <div style={{height: '24px'}} className='animated-skeleton rounded-3 ' />
                        <div style={{height: '8px'}} className='animated-skeleton mt-4 rounded-3 ' />
                        <div style={{height: '8px'}} className='animated-skeleton mt-3 rounded-3 ' />
                        <div style={{height: '8px'}} className='animated-skeleton mt-3 rounded-3 ' />
                        <div style={{height: '8px'}} className='animated-skeleton mt-3 rounded-3 ' />
                        <div style={{height: '8px'}} className='animated-skeleton mt-3 rounded-3 w-75' />
                        <div style={{height: '8px'}} className='animated-skeleton mt-3 rounded-3 w-75' />
                        <div style={{height: '8px'}} className='animated-skeleton mt-3 rounded-3 w-25' />
                        <div style={{height: '8px'}} className='animated-skeleton mt-3 rounded-3 w-25' />
                    </Stack>
                </div>
            ))}
        </>
    )
}
function LiterariesTab() {
    const router = useRouter()
    const query = '&limit=4&' + router.asPath.split('?')[1]
    const {literaries, isLoading, size, setSize} = useLiteries(query)
    const {categories} = useCategories('&limit=0')

    const changeQuery = (key, value) => {
        router.push({
            query: {
                ...router.query,
                [key]: value,
            },
        })
    }
    const categoryOptions = categories[0]?.categoryId
        ? [
              {value: '', label: 'Tất Cả'},
              ...categories.map((cate) => ({
                  value: cate.slug,
                  label: cate.categoryName,
              })),
          ]
        : []
    if (router.query.tag) return <p className='h3'>Không có tác phẩm cho hashtag: {"'#" + router.query.tag + "'"}</p>
    return (
        <Stack>
            <Stack direction='horizontal' className='align-items-end mb-4' gap={4}>
                <p className='h3 maw-50'>
                    Kết quả tìm kiếm tác phẩm cho: {"'" + (router.query.key || router.query.tag) + "'"}
                </p>
                <Form.Select
                    defaultValue=''
                    className='ms-md-auto w-25'
                    onChange={(event) => {
                        const {value} = event.target
                        changeQuery('sortBy', value)
                    }}>
                    <option value=''>Mới nhất</option>
                    <option value='view'>Lượt xem</option>
                    <option value='postCount'>Bài viết</option>
                </Form.Select>

                <Form.Select
                    className='ms-md-auto w-25'
                    defaultValue=''
                    onChange={(event) => {
                        const {value} = event.target
                        changeQuery('category', value)
                    }}>
                    {categoryOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </Form.Select>
            </Stack>
            <Container className='overflow-hidden'>
                <Row xs={1} md={2} className='gy-5 gx-3'>
                    {!literaries[0]?.literaryId && <GridLiterarySkeleton />}
                    {literaries?.map((item, index) => (
                        <Col key={index}>
                            <Literary index={index} literary={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
            <Button variant='primary mx-auto mt-5' onClick={() => setSize(size + 1)}>
                Xem thêm
            </Button>
        </Stack>
    )
}

export default LiterariesTab
