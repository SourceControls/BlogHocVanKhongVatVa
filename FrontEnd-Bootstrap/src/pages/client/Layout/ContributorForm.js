import {useSettings, contributorRegister} from '@util'
import {useState} from 'react'
import {Button, Stack} from 'react-bootstrap'
function ContributorForm({close}) {
    const {settings, isLoading} = useSettings()
    const [form, setform] = useState({
        name: 'Thu Huyền',
        phone: '0973343541',
        address: 'Phủ Lý, Hà Nam',
        carrer: 'Giáo viên văn học',
        intro: 'Tôi là một người đam mê về văn học, sinh năm 1998 và hiện đang là một giảng viên về môn này. Từ khi còn nhỏ, tôi đã luôn mê mải đắm chìm trong thế giới của các tác phẩm văn học, từ những cuốn sách kinh điển cho đến những bài viết ngắn đầy cảm xúc. Được trải qua những hành trình tinh tế trong các trang sách, tôi đã thấu hiểu được sức mạnh của từng câu chữ, từng dòng văn, và tầm ảnh hưởng của chúng đối với cuộc sống của mỗi người.',
    })
    const handleSubmit = () => {
        contributorRegister(form.values).then((rs) => {
            if (rs) close()
        })
    }
    return (
        <>
            <img src={settings[1].logo} alt='' />
            <p className='h1 fw-bold'>Đăng kí trở thành cộng tác viên</p>
            <form onSubmit={handleSubmit}>
                <Stack>
                    <input {...form.phone} label='Số điện thoại' placeHolder='Số điện thoại của bạn' required />
                    <input {...form.address} label='Địa chỉ' placeHolder='Tỉnh hoặc thành phố bạn đang ở' required />
                    <input
                        {...form.carrer}
                        label='Nghề nghiệp'
                        placeHolder='Ví dụ: Học sinh cấp 3, giáo viên...'
                        required
                    />
                    <textarea
                        {...form.intro}
                        autosize
                        minRows={5}
                        label='Giới thiệu'
                        placeHolder='Giới thiệu về bản thân bạn'
                        required
                    />
                    <Button type='submit' className='mx-auto'>
                        Xác Nhận
                    </Button>
                </Stack>
            </form>
        </>
    )
}

export default ContributorForm
