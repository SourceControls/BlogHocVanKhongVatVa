import {useRouter} from 'next/router'
import Layout from '../Layout'
import GridLiterary from './LiterariesTab'
import PostsTab from './PostsTab'
import {toast} from 'react-toastify'
import {Nav} from 'react-bootstrap'
function SearchPage({heading}) {
    const router = useRouter()
    const handleQuery = (type) => {
        router.push({
            pathname: router.pathname.replace('/client', ''),
            query: {
                type,
                key: router.query?.key,
                tag: router.query?.tag,
            },
        })
    }
    if (!router.query.type) handleQuery('literary')
    return (
        <div className='pt-5 px-3'>
            <Nav justify variant='tabs' activeKey={router.query?.type} className='mb-4 w-50'>
                <Nav.Item>
                    <Nav.Link onClick={() => handleQuery('literary')} eventKey='literary'>
                        Tác phẩm
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => handleQuery('post')} eventKey='post'>
                        Bài Viết
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        onClick={async () => {
                            toast.info('Coming soon')
                        }}>
                        Người Dùng
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <div value='literary'>{router.query.type == 'literary' && <GridLiterary />}</div>
            <div value='post'>{router.query.type == 'post' && <PostsTab />}</div>
        </div>
    )
}
SearchPage.Layout = Layout
export default SearchPage
