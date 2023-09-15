import {IconMailForward} from '@tabler/icons-react'
import RequestPostForm from './RequestPostForm'
import {useSettings, useUsers} from '@util'
import {useRouter} from 'next/router'
import {Stack, Button, Image, Container, Row, Col, Ratio, Modal, ToastContainer, Toast} from 'react-bootstrap'
import {useState} from 'react'

function Hero() {
    const [openedRequireLoginDialog, setOpenedRequireLoginDialog] = useState(false)
    const router = useRouter()
    const {settings, isLoading} = useSettings()
    const {users} = useUsers('', '/profile')
    return (
        <>
            <Container>
                <Row className='align-items-center'>
                    <Col>
                        <Stack gap={3}>
                            <h1 className='fw-bold'>{settings[1].homeHeroTitle} </h1>
                            <h6>{settings[1].homeHeroSubtitle}</h6>
                            <p className='h2 fw-bold'>Bạn cần gấp?</p>
                            <button
                                className='btn btn-secondary w-50 d-flex justify-content-center align-items-center'
                                onClick={() => setOpenedRequireLoginDialog(true)}>
                                Liên Hệ Với Chúng Tôi
                                <IconMailForward className='ms-2' />
                            </button>
                        </Stack>
                    </Col>
                    <Col className='d-none d-md-block'>
                        <Ratio aspectRatio='1x1'>
                            <Image
                                class='img-fluid'
                                style={{objectFit: 'cover'}}
                                src={settings[1].homeHeroCover}
                                alt=''></Image>
                        </Ratio>
                    </Col>
                </Row>
            </Container>
            {users[0]?.userId ? (
                <Modal scrollable show={openedRequireLoginDialog} onHide={() => setOpenedRequireLoginDialog(false)}>
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body>
                        <RequestPostForm close={close} />
                    </Modal.Body>
                </Modal>
            ) : (
                (() => {
                    return (
                        <ToastContainer position='bottom-end'>
                            <Toast
                                onClose={() => setOpenedRequireLoginDialog(false)}
                                show={openedRequireLoginDialog}
                                delay={3000}
                                pos
                                autohide>
                                <Toast.Header>
                                    <p className='fw-bold fs-5'>Hãy trở thành viên để sử dụng chức năng!</p>
                                </Toast.Header>
                                <Toast.Body>
                                    <Button
                                        onClick={() => {
                                            close()
                                            router.push(router.asPath + '#signIn')
                                        }}>
                                        Đăng nhập
                                    </Button>
                                    <Button
                                        variant='outline'
                                        onClick={() => {
                                            close()
                                            router.push(router.asPath + '#signUp')
                                        }}>
                                        Đăng kí
                                    </Button>
                                </Toast.Body>
                            </Toast>
                        </ToastContainer>
                    )
                })()
            )}
        </>
    )
}

export default Hero
