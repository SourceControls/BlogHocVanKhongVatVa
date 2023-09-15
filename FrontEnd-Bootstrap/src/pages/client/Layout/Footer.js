import {IconArrowNarrowRight, IconBrandFacebook, IconBrandTwitter, IconBrandYoutube} from '@tabler/icons-react'
import {Button, Col, Container, Row, Stack} from 'react-bootstrap'
import {toast} from 'react-toastify'

function Footer() {
    return (
        <footer className='border-2 border-top'>
            <Container className='mx-auto  p-5 gy-5'>
                <Row className='gy-5'>
                    <Col>
                        <Stack gap='3'>
                            <p className='h3 fw-bold'>Liên Hệ</p>
                            <Stack direction='horizontal' gap='3'>
                                <IconBrandTwitter href='#' />

                                <IconBrandFacebook href='#' />

                                <IconBrandYoutube href='#' />
                            </Stack>
                            <a href='#'>admin@vietlit.com</a>
                        </Stack>
                    </Col>
                    <Col>
                        <Stack gap='3'>
                            <p className='h3 fw-bold'>Liên kết</p>
                            <Stack gap='3' className='flex-row flex-md-column'>
                                <a href='#'>Term</a>
                                <a href='#'>Privacy</a>
                                <a href='#'>FAQs</a>
                            </Stack>
                        </Stack>
                    </Col>
                    <Col>
                        <Stack gap='3'>
                            <p className='h3 fw-bold'> Đăng ký nhận thông báo những bài viết mới Nhất</p>
                            <input placeholder='Nhập Email của bạn' icon={<IconArrowNarrowRight />} />
                            <Button
                                className='w-50'
                                onClick={async () => {
                                    toast.info('Coming soon')
                                }}>
                                Xác Nhận
                            </Button>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
