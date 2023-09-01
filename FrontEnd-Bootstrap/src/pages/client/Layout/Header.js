import Link from 'next/link'
import {ArrowBarToRight, Logout, MailOpened, User, UserCircle} from 'tabler-icons-react'
import {Auth, FloatingLabelInput} from '@comp'
import {useMediaQuery, useDisclosure} from '@mantine/hooks'
import {useRouter} from 'next/router'
import {IconHome, IconSearch, IconTrash} from '@tabler/icons-react'
import {useState} from 'react'
import {useSettings, useUsers, signOut} from '@util'
import {toast} from 'react-toastify'
import {Modal, Button, Dropdown, Stack, Image} from 'react-bootstrap'

import ContributorForm from './ContributorForm'
import ProfileForm from './ProfileForm'
function Header({categories, active, setActive}) {
    const router = useRouter()
    const [openedContributorForm, setOpenedContributorForm] = useState(false)
    const [openedProfileForm, setOpenedProfileForm] = useState(false)
    const [searchKey, setSearchKey] = useState('')
    const smScreen = useMediaQuery('(max-width: 48em)')
    const {settings, isLoading} = useSettings()
    const {users, mutate: userMutate} = useUsers('', '/profile')
    const closeAuthForm = () => {
        router.push({pathname: router.pathname.replace('/client', ''), query: {...router.query}}, undefined, {
            scroll: false,
        })
    }
    if (!settings[0]) return <></>
    return (
        <>
            <header className='shadow sticky-top init-bg'>
                <div className='container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between '>
                    <Link href='/home' onClick={() => setActive(undefined)}>
                        {smScreen ? (
                            <IconHome size={'2.5rem'} color='var(--primary-color-6)' />
                        ) : (
                            <Image width='200px' src={settings[1].logo} alt='' />
                        )}
                    </Link>
                    <div className='position-relative'>
                        <FloatingLabelInput
                            placeholder='Nhập #hashtag,tác phẩm...'
                            label='Tìm kiếm'
                            radius='xl'
                            value={searchKey}
                            onChange={(e) => {
                                setSearchKey(e.target.value)
                            }}
                            icon={<IconSearch size='1.5rem' stroke={2.5} />}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    searchKey.includes('#')
                                        ? router.push('/search?type=post&tag=' + searchKey.replace('#', ''))
                                        : router.push('/search?key=' + searchKey)
                                }
                            }}
                        />
                        <button
                            className='btn btn-primary position-absolute top-0 end-0 bg-transparent border-0 color-4'
                            onClick={() => {
                                searchKey.includes('#')
                                    ? router.push('/search?type=post&tag=' + searchKey.replace('#', ''))
                                    : router.push('/search?key=' + searchKey)
                            }}>
                            <i class='fas fa-arrow-right'></i>
                        </button>
                    </div>
                    {users[0]?.userId ? (
                        <div>
                            <Dropdown>
                                <Dropdown.Toggle
                                    className='border-0 text-dark d-inline-flex align-items-center bg-transparent'
                                    variant='primary'
                                    id='dropdown-basic'>
                                    <Image fluid src={users[0].avatarImage} roundedCircle width={50} height={50} />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item
                                        className='d-flex align-items-center'
                                        onClick={() => setOpenedProfileForm(true)}>
                                        <User className='me-2' size='1.2rem' />
                                        Tài khoản
                                    </Dropdown.Item>
                                    {users[0].role !== 'VIEWER' && (
                                        <Dropdown.Item
                                            className='d-flex align-items-center'
                                            onClick={() => router.push('/admin/posts')}>
                                            <ArrowBarToRight className='me-2' size='1.2rem' />
                                            Đến trang quản lý
                                        </Dropdown.Item>
                                    )}
                                    {users[0].role === 'VIEWER' && (
                                        <Dropdown.Item
                                            className='d-flex align-items-center'
                                            onClick={() => setOpenedContributorForm(true)}>
                                            <MailOpened className='me-2' size='1.2rem' />
                                            Trở thành cộng tác viên
                                        </Dropdown.Item>
                                    )}

                                    <Dropdown.Item
                                        className='d-flex align-items-center'
                                        onClick={async () => {
                                            await signOut()
                                            userMutate([], false)
                                        }}>
                                        <Logout className='me-2' size='1.2rem' />
                                        Đăng xuất
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item
                                        className='d-flex align-items-center text-danger'
                                        onClick={async () => {
                                            toast.info('Coming soon')
                                        }}>
                                        <IconTrash className='me-2' size='1.2rem' />
                                        Xóa tài khoản
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    ) : smScreen ? (
                        <Button onClick={() => router.push(router.asPath + '#signIn')}>
                            <UserCircle />
                        </Button>
                    ) : (
                        <div>
                            <Button variant='primary' onClick={() => router.push(router.asPath + '#signIn')}>
                                Đăng nhập
                            </Button>
                            <Button
                                variant='link'
                                className='ms-3'
                                onClick={() => router.push(router.asPath + '#signUp')}>
                                Đăng kí
                            </Button>
                        </div>
                    )}
                </div>
            </header>
            <Modal
                scrollable
                show={router.asPath.includes('#signIn') || router.asPath.includes('#signUp')}
                onHide={closeAuthForm}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <Auth closeModal={closeAuthForm} userMutate={userMutate}></Auth>
                </Modal.Body>
            </Modal>
            <Modal scrollable show={openedContributorForm} onHide={() => setOpenedContributorForm(false)}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <ContributorForm close={() => setOpenedContributorForm(false)} />
                </Modal.Body>
            </Modal>
            <Modal scrollable show={openedProfileForm} onHide={() => setOpenedProfileForm(false)}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <ProfileForm close={() => setOpenedProfileForm(false)} />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Header
