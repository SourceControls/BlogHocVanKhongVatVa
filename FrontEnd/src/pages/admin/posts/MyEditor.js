import React, {useRef, useState} from 'react'
import {Editor} from '@tinymce/tinymce-react'
import {getNews, transformToUrl} from '@util'
import {
    Badge,
    Button,
    Checkbox,
    Group,
    Image,
    MultiSelect,
    ScrollArea,
    Select,
    Stack,
    Text,
    Textarea,
    TextInput,
} from '@mantine/core'
import {useForm} from '@mantine/form'
import Layout from '../Layout'
import {createPost, useTags, publishPost, updatePost, requestPublish, hidePost, useUsers} from '@util'
import {EyeOff, Pencil, Send, WorldUpload} from 'tabler-icons-react'
const content = `<p class="description" style="text-align: justify;">&nbsp;</p>
<article class="fck_detail ">
<p class="Normal" style="text-align: justify;">&nbsp;</p>
<p class="Normal" style="text-align: justify;">C&ograve;n ng&agrave;y nay, tr&ecirc;n Internet cũng c&oacute; thể triển khai dịch vụ viễn th&ocirc;ng xuy&ecirc;n bi&ecirc;n giới, đặt ra b&agrave;i to&aacute;n quản l&yacute; phải bảo đảm nguy&ecirc;n tắc b&igrave;nh đẳng giữa c&aacute;c dịch vụ c&ugrave;ng vấn đề an to&agrave;n, an ninh. V&igrave; vậy, dự thảo quy định chi tiết về quản l&yacute; việc cung cấp v&agrave; h&igrave;nh thức cấp ph&eacute;p với dịch vụ viễn th&ocirc;ng, trong đ&oacute; c&oacute; trung t&acirc;m dữ liệu, điện to&aacute;n đ&aacute;m m&acirc;y để đảm bảo t&iacute;nh linh hoạt, đảm bảo cơ chế khuyến kh&iacute;ch dịch vụ mới ph&aacute;t triển.</p>
<p class="Normal" style="text-align: justify;">&Ocirc;ng H&ugrave;ng n&oacute;i th&ecirc;m, sự ph&aacute;t triển của c&ocirc;ng nghệ vệ tinh mới như vệ tinh ch&ugrave;m đặt ra y&ecirc;u cầu bổ sung, ho&agrave;n thiện quy định quản l&yacute; hoạt động cung cấp dịch vụ viễn th&ocirc;ng vệ tinh xuy&ecirc;n bi&ecirc;n giới v&agrave;o Việt Nam, bảo vệ quyền lợi của người sử dụng tại Việt Nam</p>
<figure class="image"><img src="https://vcdn-vnexpress.vnecdn.net/2023/06/02/1a874784732fad71f43e-168567410-3241-6869-1685674603.jpg?w=680&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=uEI-6FbA5qbz38nSDb6Www" alt="Bộ trưởng Th&ocirc;ng tin v&agrave; Truyền th&ocirc;ng Nguyễn Mạnh H&ugrave;ng ph&aacute;t biểu s&aacute;ng 2/6. Ảnh: Media Quốc hội" width="1200px">
<figcaption>
<figure class="tplCaption action_thumb_added" data-size="true">
<figcaption>
<div class="Image" style="text-align: center;">Bộ trưởng Th&ocirc;ng tin v&agrave; Truyền th&ocirc;ng Nguyễn Mạnh H&ugrave;ng s&aacute;ng 2/6. Ảnh:&nbsp;<em>Media Quốc hội</em></div>
</figcaption>
</figure>
</figcaption>
</figure>
<p class="Normal" style="text-align: justify;">Đại diện cơ quan thẩm tra, &ocirc;ng L&ecirc; Quang Huy, Chủ nhiệm Ủy ban Khoa học, C&ocirc;ng nghệ v&agrave; M&ocirc;i trường, cho rằng OTT về bản chất l&agrave; d&ugrave;ng Internet để cung cấp phần mềm ứng dụng, như Zalo, Viber, Telegram. Theo kinh nghiệm quốc tế, về cơ bản, OTT được chia th&agrave;nh hai loại ch&iacute;nh, gồm OTT viễn th&ocirc;ng v&agrave; OTT cung cấp nội dung th&ocirc;ng tin</p>
<p class="Normal" style="text-align: justify;">OTT c&oacute; chức năng hội thoại, họp trực tuyến, chat, tin nhắn kh&ocirc;ng thu ph&iacute;. Đặc điểm n&agrave;y dẫn đến việc sử dụng dịch vụ OTT ph&aacute;t triển rất nhanh, ảnh hưởng lớn đến doanh thu tin nhắn v&agrave; thoại truyền thống của doanh nghiệp viễn th&ocirc;ng nhiều quốc gia, trong đ&oacute; c&oacute; thị trường Việt Nam. Quản l&yacute; OTT viễn th&ocirc;ng sẽ l&agrave; ch&iacute;nh s&aacute;ch quan trọng, c&oacute; t&aacute;c động lớn đến người d&acirc;n, doanh nghiệp, đến c&ocirc;ng cuộc chuyển đổi số, ph&aacute;t triển kinh tế số, x&atilde; hội số.</p>
<p class="Normal" style="text-align: justify;">Đa số &yacute; kiến của Ủy ban nhất tr&iacute; rằng việc ph&aacute;p luật chưa c&oacute; quy định quản l&yacute; về vấn đề n&agrave;y sẽ dẫn đến quyền lợi của người d&ugrave;ng chưa được bảo đảm về bảo mật dịch vụ, t&iacute;nh minh bạch, th&ocirc;ng tin, khả năng truy cập. Do đ&oacute;, OTT viễn th&ocirc;ng cần được quản l&yacute; theo c&aacute;ch thức ph&ugrave; hợp.</p>
<figure class="image"><img src="https://vcdn-vnexpress.vnecdn.net/2023/06/02/983445387193afcdf682-6653-1685674603.jpg?w=680&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=orbhHJdyYuOSR3WxwblbFA" alt="Chủ nhiệm Ủy ban Khoa học, C&ocirc;ng nghệ v&agrave; M&ocirc;i trường L&ecirc; Quang Huy. Ảnh: Media Quốc hội" width="1200px">
<figcaption>
<figure class="tplCaption action_thumb_added" data-size="true">
<figcaption>
<p class="Image" style="text-align: center;">Chủ nhiệm Ủy ban Khoa học, C&ocirc;ng nghệ v&agrave; M&ocirc;i trường L&ecirc; Quang Huy. Ảnh:&nbsp;<em>Media Quốc hội</em></p>
</figcaption>
</figure>
</figcaption>
</figure>
<div class="sidebar-1">
<article class="fck_detail ">
<p class="Normal" style="text-align: justify;">Trước đ&oacute;, tại cuộc họp của Bộ Th&ocirc;ng tin v&agrave; Truyền th&ocirc;ng th&aacute;ng 4, &ocirc;ng Cao Anh Sơn, Tổng gi&aacute;m đốc Viettel Telecom, cho biết doanh nghiệp viễn th&ocirc;ng đang chứng kiến sự suy giảm lớn về dịch vụ gọi điện v&agrave; SMS, nhưng ứng dụng OTT lại ph&aacute;t triển mạnh mẽ, trong đ&oacute; c&oacute; những ứng dụng tăng trưởng ở mức hai con số. "Trong sự dịch chuyển đ&oacute;, nh&agrave; mạng lu&ocirc;n đảm bảo hạ tầng cho c&aacute;c OTT ph&aacute;t triển, tuy nhi&ecirc;n lại kh&ocirc;ng được chia sẻ về đầu tư hạ tầng. G&aacute;nh nặng cho nh&agrave; mạng trong đầu tư hạ tầng l&agrave; vấn đề lớn", &ocirc;ng Sơn n&oacute;i.</p>
<p class="Normal" style="text-align: justify;">C&ograve;n trong cuộc họp giữa th&aacute;ng 4 của Ủy ban Thường vụ Quốc hội, Bộ trưởng Th&ocirc;ng tin v&agrave; Truyền th&ocirc;ng Nguyễn Mạnh H&ugrave;ng cho rằng 90% dung lượng mạng đang phục vụ dịch vụ OTT, nhưng nh&agrave; mạng kh&ocirc;ng thu được lợi nhuận tương ứng để đảm bảo hạ tầng.</p>
<p class="Normal" style="text-align: justify;">"L&agrave;m c&aacute;ch n&agrave;o để ph&aacute;t triển hạ tầng mạng khi c&aacute;c OTT ng&agrave;y một gi&agrave;u l&ecirc;n, c&ograve;n nh&agrave; mạng đang ngh&egrave;o đi?", Bộ trưởng đặt c&acirc;u hỏi.</p>
<p class="Normal" style="text-align: justify;">B&ecirc;n cạnh đ&oacute;, tại cuộc họp s&aacute;ng nay, c&oacute; &yacute; kiến cho rằng việc dự thảo đưa trung t&acirc;m dữ liệu, điện to&aacute;n đ&aacute;m m&acirc;y v&agrave; viễn th&ocirc;ng cơ bản tr&ecirc;n Internet v&agrave;o nh&oacute;m cần điều chỉnh c&oacute; thể sẽ l&agrave;m tăng chi ph&iacute; tu&acirc;n thủ của doanh nghiệp li&ecirc;n quan, ảnh hưởng đến lợi &iacute;ch m&agrave; dịch vụ đ&oacute; c&oacute; thể mang lại đối với nền kinh tế, t&aacute;c động ti&ecirc;u cực đến thu h&uacute;t đầu tư nước ngo&agrave;i tại Việt Nam.</p>
<p class="Normal" style="text-align: justify;">Do đ&oacute;, Ủy ban đề nghị cơ quan chủ tr&igrave; soạn thảo nghi&ecirc;n cứu v&agrave; tham khảo kinh nghiệm lập ph&aacute;p của c&aacute;c nước, l&agrave;m r&otilde; hơn việc mở rộng phạm vi điều chỉnh của dự thảo v&agrave; b&aacute;o c&aacute;o Quốc hội về định hướng thiết kế hệ thống luật li&ecirc;n quan đến lĩnh vực c&ocirc;ng nghệ th&ocirc;ng tin v&agrave; truyền th&ocirc;ng thời gian tới.</p>
<p class="Normal" style="text-align: justify;"><span style="font-size: 14pt;"><strong>Sơn H&agrave;</strong></span><a class="thumb thumb-5x3" title="Thế giới ngầm Telegram tại Việt Nam" href="https://vnexpress.net/the-gioi-ngam-telegram-tai-viet-nam-4599604.html" data-itm-source="#vn_source=Detail-SoHoa_CongNghe-4612674&amp;vn_campaign=Box-TinXemThem&amp;vn_medium=Item-1&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1"><picture><source srcset="https://vcdn1-sohoa.vnecdn.net/2023/04/30/telegramDSC0880711581682848534-1890-9541-1682851458.jpg?w=180&amp;h=108&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=ppEwiqUIiTvOo6y2iW4TJQ 1x, https://vcdn1-sohoa.vnecdn.net/2023/04/30/telegramDSC0880711581682848534-1890-9541-1682851458.jpg?w=180&amp;h=108&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=r-WxQPVcoLuPrmON8Ks9ZQ 2x" data-srcset="https://vcdn1-sohoa.vnecdn.net/2023/04/30/telegramDSC0880711581682848534-1890-9541-1682851458.jpg?w=180&amp;h=108&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=ppEwiqUIiTvOo6y2iW4TJQ 1x, https://vcdn1-sohoa.vnecdn.net/2023/04/30/telegramDSC0880711581682848534-1890-9541-1682851458.jpg?w=180&amp;h=108&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=r-WxQPVcoLuPrmON8Ks9ZQ 2x"></picture></a></p>
</article>
</div>
</article>`
function getInitialValues(post) {
    if (!post)
        return {
            title: 'Phân tích nhân vật Tấm khi bị dì ghẻ bắt ở nhà ' + Math.round(Math.random() * 1000000),
            slug: 'post-demo-' + Math.round(Math.random() * 1000000),

            summary:
                'Bộ Thông tin và Truyền thông cho biết việc sửa đổi Luật Viễn thông, trong đó có OTT viễn thông, nhằm đảm bảo an toàn, an ninh mạng và quyền lợi người dùng.',
            htmlContent: content,
            featuredImage:
                'https://cdn.tgdd.vn/Files/2022/08/12/1455650/loi-ke-va-y-nghia-cua-cau-truyen-co-tich-noi-tieng-tam-cam-202208120839487685.jpg',
            featured: false,
            status: 'DRAFT',
            visibility: true,
            createdBy: 1,
            literary: undefined,
            postTag: [],
        }
    else {
        post = {
            ...post,
            postTag: post.postTag.map((e) => e.tag.tagId),
        }
    }
    return post
}

MyEditor.Layout = Layout

export default function MyEditor({post, close, mutate, posts}) {
    const {tags} = useTags('&limit=0')
    const editorRef = useRef(null)
    const {users} = useUsers('', '/profile')

    const form = useForm({
        initialValues: () => getInitialValues(post),
    })

    const [literaries, setLiteraries] = useState([
        {
            value: 1,
            label: 'Tấm cám 1',
            image: 'https://i.ibb.co/W2zv6HF/T-m-C-m-1-removebg-preview.png',
        },
        {
            value: 2,
            label: 'Tấm cám 2',
            image: 'https://i.ibb.co/W2zv6HF/T-m-C-m-1-removebg-preview.png',
        },
    ])
    const handleMutate = async (updatedPost) => {
        if (!updatedPost?.postId) return
        form.setValues(getInitialValues(updatedPost))
        const newItems = posts.map((item) => (item.postId == updatedPost.postId ? updatedPost : item))
        mutate(newItems, false)
    }
    const handleSubmit = (status) => {
        console.log(editorRef.current.getContent())
        if (editorRef.current) {
            if (!post) {
                //create new
                createPost({...form.values, htmlContent: editorRef.current.getContent()}).then((rs) => {
                    if (status == 'published' && rs?.postId) {
                        publishPost(rs.postId)
                    }
                    if (status == 'pending' && rs?.postId) {
                        requestPublish(rs.postId)
                    }
                    if (rs?.postId) {
                        mutate([rs, ...posts])
                        close()
                    }
                })
            } else {
                //update
                if (status == 'hide') {
                    hidePost(form.values.postId).then((rs) => {
                        handleMutate(rs)
                    })
                } else if (status == 'draft') {
                    updatePost({...form.values, htmlContent: editorRef.current.getContent()}).then((rs) => {
                        handleMutate(rs)
                    })
                } else if (status == 'published') {
                    updatePost({...form.values, htmlContent: editorRef.current.getContent()}).then((rs) => {
                        if (rs?.postId)
                            publishPost(form.values.postId).then((rs) => {
                                handleMutate(rs)
                            })
                    })
                } else if (status == 'pending') {
                    updatePost({...form.values, htmlContent: editorRef.current.getContent()}).then((rs) => {
                        if (rs?.postId)
                            requestPublish(form.values.postId).then((rs) => {
                                handleMutate(rs)
                            })
                    })
                }
            }
        }
    }

    return (
        <>
            <Group position='apart' align='flex-start'>
                <Group align='center' mb='md'>
                    <Text size='xl' fw='bold' pl='4px'>
                        Nội dung
                    </Text>
                    {form.values.status === 'PUBLISHED' && <Badge color='green'>Công khai</Badge>}
                    {form.values.status === 'DRAFT' && <Badge color='dark'>Nháp</Badge>}
                    {form.values.status === 'HIDE' && <Badge color='red'>Đã ẩn</Badge>}
                    {form.values.status === 'PENDING' && <Badge color='orange'>Chờ duyệt</Badge>}
                </Group>
                <Group>
                    {form.values.status === 'PUBLISHED' && (
                        <Button onClick={() => handleSubmit('hide')} variant='light' color='red' leftIcon={<EyeOff />}>
                            Ẩn
                        </Button>
                    )}
                    <Button onClick={() => handleSubmit('draft')} variant='light' leftIcon={<Pencil />}>
                        Lưu nháp
                    </Button>
                    {users[0]?.role === 'CONTRIBUTOR' && (
                        <Button onClick={() => handleSubmit('pending')} leftIcon={<Send />}>
                            Lưu & Gửi duyệt
                        </Button>
                    )}
                    {users[0]?.role !== 'CONTRIBUTOR' && form.values.status !== 'PUBLISHED' && (
                        <Button onClick={() => handleSubmit('published')} leftIcon={<WorldUpload />}>
                            Lưu & Công khai
                        </Button>
                    )}
                </Group>
            </Group>
            <Group noWrap align='flex-start' spacing='md' id='editor'>
                <Editor
                    apiKey='bxn0ggwcir62q9v1mnynxincyleaypne5h9atduc394qhp49'
                    onInit={(evt, editor) => {
                        editorRef.current = editor
                        setTimeout(() => editorRef.current.setContent(form.values.htmlContent), 1000)
                        // if (post) {
                        //     getNews({id: post._id}).then((rs) => {
                        //         editorRef.current.setContent(rs.data[0].content)
                        //     })
                        // }
                    }}
                    init={{
                        language: 'vi',
                        font_css: '/editorStyle.css',
                        body_id: 'editor-body',
                        width: '800px',
                        height: '650px',
                        plugins: [
                            'advlist',
                            'autolink',
                            'link',
                            'image',
                            'lists',
                            'charmap',
                            'preview',
                            'anchor',
                            'pagebreak',
                            'searchreplace',
                            'wordcount',
                            'visualblocks',
                            'code',
                            'fullscreen',
                            'insertdatetime',
                            'media',
                            'table',
                            'emoticons',
                            'template',
                            'help',
                        ],
                        toolbar:
                            'undo redo | styles | bold italic | alignleft aligncenter alignright alignjustify | ' +
                            'bullist numlist outdent indent | link image | print preview media fullscreen | ' +
                            'forecolor backcolor emoticons | help',
                        // menu: {
                        //     favs: {title: 'Phổ Biến', items: 'code visualaid | searchreplace | emoticons'},
                        // },
                        menubar: 'favs file edit view insert format tools table help',
                        image_caption: true,
                        preview_styles: 'body',
                    }}
                />
                <ScrollArea mah='100%' h='650px' w='300px' px='md' style={{flex: '1'}}>
                    <Stack>
                        <TextInput
                            label='Tiêu đề'
                            required
                            {...form.getInputProps('title')}
                            onChange={(e) =>
                                form.setValues({title: e.target.value, slug: transformToUrl(e.target.value)})
                            }
                        />
                        <TextInput label='Thẻ URL' {...form.getInputProps('slug')} />
                        {literaries && (
                            <>
                                <Select
                                    data={literaries}
                                    allowDeselect
                                    label='Tác Phẩm'
                                    transitionProps={{transition: 'pop-top-left', duration: 80, timingFunction: 'ease'}}
                                    {...form.getInputProps('literary')}></Select>
                                <Image
                                    width={100}
                                    mx='auto'
                                    alt=''
                                    src={literaries.filter((e) => e.value == form.values.literary)[0]?.image}
                                />
                            </>
                        )}

                        <Textarea minRows={5} label='Tóm Tắt' {...form.getInputProps('summary')} />

                        <MultiSelect
                            data={tags.map((item) => ({value: item.tagId, label: '#' + item.tagName}))}
                            label='Tags'
                            transitionProps={{transition: 'pop-top-left', duration: 80, timingFunction: 'ease'}}
                            {...form.getInputProps('postTag')}></MultiSelect>

                        <TextInput label='Link ảnh bìa' {...form.getInputProps('featuredImage')} />
                        <Image src={form.values.featuredImage} alt='' />
                        <Checkbox
                            checked={form.values.featured}
                            onChange={(e) => form.setValues({featured: e.target.checked == 1})}
                            label='Đặt làm bài viết nổi bật'
                        />
                    </Stack>
                </ScrollArea>
            </Group>
        </>
    )
}
