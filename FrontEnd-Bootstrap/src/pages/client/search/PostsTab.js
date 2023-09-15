import {GridPost, FloatingLabelInput} from '@comp'
import {useRouter} from 'next/router'
import {Form, Stack} from 'react-bootstrap'

function PostsTab() {
    const router = useRouter()
    const query = '&limit=3&status=published&' + router.asPath.split('?')[1]

    const changeQuery = (key, value) => {
        router.push({
            query: {
                ...router.query,
                [key]: value,
            },
        })
    }

    return (
        <Stack>
            <Stack direction='horizontal' className='mb-2' gap={3}>
                {router.query.tag ? (
                    <p className='h3'>Kết quả tìm kiếm theo hashtag: {"'#" + router.query.tag + "'"}</p>
                ) : (
                    <p className='h3'>Kết quả tìm kiếm theo từ khóa: {"'" + router.query.key + "'"}</p>
                )}

                <Form.Select
                    className='ms-auto w-25'
                    defaultValue=''
                    onChange={(val) => changeQuery('sortBy', val)}
                    label='Sắp xếp theo'>
                    <option value=''>Mới nhất</option>
                    <option value='view'>Lượt xem</option>
                    <option value='likeCount'>Lượt like</option>
                </Form.Select>
            </Stack>
            <GridPost query={query} />
        </Stack>
    )
}

export default PostsTab
