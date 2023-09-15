import {useSettings, requestPost} from '@util'
import {useState} from 'react'
import {Button, Form, InputGroup, Stack} from 'react-bootstrap'
function RequestPostForm({close}) {
    const {settings, isLoading} = useSettings()
    const [form, setForm] = useState({
        title: 'Phân tích Mị trong đêm tình mùa xuân và đêm đông cứu A Phủ',
        detail: `- Dễ nhớ
- Ngắn gọn
- Dùng cho học sinh giỏi văn`,
        limitTime: undefined,
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        requestPost(form).then((rs) => {
            if (rs) {
                close()
            }
        })
    }
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    return (
        <>
            <img src={settings[1].logo} alt='' />
            <p className='h1 fw-bold'>Gửi Yêu Cầu Viết Bài</p>
            <form onSubmit={handleSubmit}>
                <Stack gap={1}>
                    <div>
                        <Form.Label className='mb-0'>Tiêu Đề</Form.Label>
                        <Form.Control
                            value={form.title}
                            onChange={handleChange}
                            name='title'
                            placeholder='Nhập tiêu đề bài viết'
                            aria-label='Nhập tiêu đề bài viết'
                        />
                    </div>
                    <div>
                        <Form.Label className='mb-0'>Chi tiết</Form.Label>
                        <Form.Control
                            value={form.detail}
                            onChange={handleChange}
                            name='detail'
                            as='textarea'
                            placeholder='Yêu cầu chi tiết, hoặc dàn ý'
                        />
                    </div>
                    <input
                        value={form.limitTime}
                        name='limitTime'
                        onChange={handleChange}
                        id='startDate'
                        class='form-control'
                        type='date'
                    />
                    <Button type='submit' className='mx-auto mt-4'>
                        Xác Nhận
                    </Button>
                </Stack>
            </form>
        </>
    )
}

export default RequestPostForm
