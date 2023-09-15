import {Nav} from 'react-bootstrap'
import SignIn from './SignIn'
import SignUp from './SignUp'
import {useSettings} from '@util'
import {useRouter} from 'next/router'

export function Auth({closeModal, userMutate}) {
    const tab = typeof window !== 'undefined' && window.location.hash // Lấy phần định danh từ URL
    const {settings, isLoading} = useSettings()
    const router = useRouter()

    return (
        <>
            <img className='mx-auto d-block' src={settings[1].logo} alt='Logo' />

            <Nav justify variant='tabs' activeKey={tab} className='mb-4 w-100'>
                <Nav.Item>
                    <Nav.Link onClick={() => router.push(router.asPath.split('#')[0] + '#signIn')}>Đăng Nhập</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => router.push(router.asPath.split('#')[0] + '#signUp')}>Đăng Ký</Nav.Link>
                </Nav.Item>
            </Nav>
            {tab == '#signIn' && <SignIn closeModal={closeModal} userMutate={userMutate} />}
            {tab == '#signUp' && <SignUp />}
        </>
    )
}
