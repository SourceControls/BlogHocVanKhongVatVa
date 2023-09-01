import React, {useRef, useState} from 'react'
import {Editor} from '@tinymce/tinymce-react'
import {getNews, transformToUrl, uploadImg} from '@util'
import {
    Badge,
    Button,
    Checkbox,
    Divider,
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
import {createPost, useTags, publishPost, updatePost, requestPublish, hidePost, useUsers, useLiteries} from '@util'
import {EyeOff, Pencil, Send, WorldUpload} from 'tabler-icons-react'
import {ImageDropzone} from '@comp'

function getInitialValues(post) {
    if (!post)
        return {
            title: 'Phân tích Mị trong đêm tình mùa xuân và đêm đông cứu A Phủ',
            slug: 'phan-tich-mi-trong-dem-tinh-mua-xuan-va-dem-dong-cuu-a-phu',
            summary:
                'Vợ chồng A Phủ là một trong những tác phẩm xuất sắc nhất của Tô Hoài, ông đã để lại trong lòng bạn đọc nhiều ấn tượng độc đáo, bằng ngòi bút tài năng điều đặc biệt nhất có lẽ chính ở nhân vật Mị. Hiểu về Mị ta mới thấy được một sức sống mãnh liệt dù bị đầy ải khó nhọc, đặc biệt là cảnh Mị trong đêm tình mùa xuân.',
            htmlContent: `<p>Vợ chồng A Phủ l&agrave; một trong những t&aacute;c phẩm xuất sắc nhất của T&ocirc; Ho&agrave;i, &ocirc;ng đ&atilde; để lại trong l&ograve;ng bạn đọc nhiều ấn tượng độc đ&aacute;o, bằng ng&ograve;i b&uacute;t t&agrave;i năng điều đặc biệt nhất c&oacute; lẽ ch&iacute;nh ở nh&acirc;n vật Mị. Hiểu về Mị ta mới thấy được một sức sống m&atilde;nh liệt d&ugrave; bị đầy ải kh&oacute; nhọc, đặc biệt l&agrave; cảnh Mị trong đ&ecirc;m t&igrave;nh m&ugrave;a xu&acirc;n.</p>
<p><iframe style="display: table; margin-left: auto; margin-right: auto;" src="https://www.youtube.com/embed/2WfFeVvpa8Q" width="560" height="314" allowfullscreen="allowfullscreen"></iframe></p>
<p>Đọc một t&aacute;c phẩm, kh&ocirc;ng chỉ nhớ về nh&acirc;n vật, nhớ về những gi&aacute; trị nghệ thuật độc đ&aacute;o. M&agrave; hơn hết, qua những t&igrave;nh huống, chi tiết đắt gi&aacute; trong truyện mở ra cho bạn đọc trăm lối suy nghĩ, cảm nhận v&agrave; đồng điệu c&ugrave;ng t&aacute;c giả. Đặc sắc trong truyện c&oacute; lẽ nằm ở chỗ đ&oacute;, T&ocirc; Ho&agrave;i bằng t&agrave;i năng đ&atilde; vẽ l&ecirc;n một c&ocirc; Mị trong đ&ecirc;m t&igrave;nh m&ugrave;a xu&acirc;n với cảm x&uacute;c t&acirc;m l&iacute; rất mới, khiến bạn đọc cảm thấy r&otilde; n&eacute;t v&agrave; hiểu hơn về nh&acirc;n vật, cũng như tư tưởng s&acirc;u sắc của một nh&agrave; văn.</p>
<p>Mị vốn l&agrave; một c&ocirc; con g&aacute;i trong một gia đ&igrave;nh nh&agrave; ngh&egrave;o, m&agrave; lại l&agrave; mang một c&aacute;i ngh&egrave;o gia truyền. V&igrave; kh&ocirc;ng thể trả được nợ, nh&agrave; thống l&iacute; đ&atilde; c&oacute; &yacute; định muốn Mị về l&agrave;m con d&acirc;u gạt nợ. Mị, một c&ocirc; g&aacute;i trẻ như một đ&oacute;a hoa đương thời k&igrave; nở rộ giữa n&uacute;i rừng, lại th&ecirc;m vẻ đẹp phẩm chất tuyệt đẹp, c&ocirc; tuyệt đối kh&ocirc;ng chấp nhận một cuộc sống mất tự do, kh&ocirc;ng t&igrave;nh y&ecirc;u, rằng buộc. C&ocirc; đ&atilde; n&oacute;i: &ldquo;con nay đ&atilde; biết cuốc nương l&agrave;m ng&ocirc;, con phải l&agrave;m nương ng&ocirc; giả nợ thay cho bố. Bố đừng b&aacute;n con cho nh&agrave; gi&agrave;u&rdquo; Mị kh&ocirc;ng những xinh đẹp, c&oacute; t&agrave;i thổi k&egrave;n l&aacute; rất hay, bao nhi&ecirc;u người m&ecirc;, lại th&ecirc;m sự hiếu thảo, một tr&aacute;i tim khao kh&aacute;t tự do, tự chủ v&agrave; y&ecirc;u đời mạnh mẽ như vậy, Mị ho&agrave;n to&agrave;n xứng đ&aacute;ng c&oacute; được những g&igrave; m&igrave;nh mong muốn.</p>
<p><img src="https://o.rada.vn/data/image/2021/12/18/Dem-tinh-mua-xuan-1.jpg"></p>
<div id="articleads2" class="adbox in-article adsense"><ins class="adsbygoogle" data-ad-format="fluid" data-ad-layout="in-article" data-ad-client="ca-pub-9275417305531302" data-ad-slot="5272636388" data-adsbygoogle-status="done" data-ad-status="unfilled">
<div id="aswift_6_host" tabindex="0" title="Advertisement" aria-label="Advertisement">Nhưng kh&ocirc;ng, kh&ocirc;ng may Mị bị bắt c&uacute;ng tr&igrave;nh ma l&agrave;m con d&acirc;u nh&agrave; thống l&iacute; P&aacute; Tra. C&aacute;i ngh&egrave;o khổ của cuộc sống, c&aacute;i h&agrave;nh hạ khốn c&ugrave;ng của nh&agrave; địa chủ đ&atilde; khiến một c&ocirc; g&aacute;i vốn kh&aacute;t khao y&ecirc;u đời l&agrave; thế, c&ocirc; đ&atilde; từng nghĩ đến việc ăn l&aacute; ng&oacute;n tự tử để tho&aacute;t số phận n&agrave;y, để tự do cho ch&iacute;nh m&igrave;nh, nhưng từ khi về nh&agrave; thống l&iacute;, nỗi kh&aacute;t khao y&ecirc;u đời cũng bị dập tắt, nguội lạnh, trai sạn v&agrave; v&ocirc; cảm. Mị sống như con r&ugrave;a nu&ocirc;i trong x&oacute; cửa, gương mặt l&uacute;c n&agrave;o cũng buồn rười rượi. Tr&aacute;i tim kh&ocirc; h&eacute;o, bản th&acirc;n chỉ biết l&agrave;m những việc li&ecirc;n tục, lặp đi lặp lại như một c&aacute;i m&aacute;y v&ocirc; tri v&ocirc; gi&aacute;c.</div>
</ins></div>
<p>Rồi đ&ecirc;m t&igrave;nh m&ugrave;a xu&acirc;n cũng tới, đ&acirc;y ch&iacute;nh l&agrave; n&uacute;t mở trong c&acirc;u chuỗi đang li&ecirc;n tiếp những đau khổ bất hạnh của Mị. M&ugrave;a xu&acirc;n ở những v&ugrave;ng n&uacute;i cao mới phơi phới, mới h&acirc;n hoan l&agrave;m sao. Đ&acirc;y ch&iacute;nh l&agrave; thời điểm mọi người kh&ocirc;ng lo toan về những nương ng&ocirc;, về cuộc sống mưu sinh, l&agrave;m lụng vất vả cả năm trời. Họ h&aacute;t h&ograve;, nhảy m&uacute;a, họ vui chơi, họ d&agrave;nh thời gian đi t&igrave;m t&igrave;nh y&ecirc;u cho m&igrave;nh. Đặc biệt l&agrave; tiếng s&aacute;o cứ lảnh l&oacute;t.</p>
<p style="text-align: center;"><em>M&agrave;y c&oacute; con trai con g&aacute;i rồi</em><br><em>M&agrave;y đi l&agrave;m nương</em><br><em>Ta kh&ocirc;ng c&oacute; con trai con g&aacute;i</em><br><em>Ta đi t&igrave;m người y&ecirc;u</em></p>
<p>Mị, một c&ocirc; g&aacute;i cũng từng sống trong ho&agrave;n cảnh ấy, cũng phơi phới xu&acirc;n th&igrave;, cũng đi t&igrave;m những t&igrave;nh y&ecirc;u ph&ugrave; hợp với m&igrave;nh. Mị vốn c&ograve;n trẻ, vốn như một b&ocirc;ng hoa đẹp, mọi thứ đều t&igrave;m đến Mị, sự tương phản giữa qu&aacute; khứ với tương lai như một đ&ograve;n bẩy trong t&acirc;m l&iacute;, khiến Mị trở n&ecirc;n u uất, &ldquo;Mị lim mặt ngồi đấy nh&igrave;n mọi người nhảy đồng, người h&aacute;t, nhưng l&ograve;ng Mị th&igrave; đang sống về ng&agrave;y trước&rdquo; c&ocirc; Mị năm ấy chưa bị bắt, c&ograve;n trẻ, c&ograve;n ca h&aacute;t, c&ograve;n nhảy m&uacute;a cũng vui tươi lắm. Mị t&igrave;m rượu, như thức uống giải tỏa t&acirc;m l&iacute; đ&egrave; n&eacute;n bấy l&acirc;u nay &ldquo;Mị l&eacute;n lấy hũ rượu, cứ uống ực từng b&aacute;t&rdquo; Mị say, Mị nhớ lại m&igrave;nh qu&aacute; khứ biết bao nhi&ecirc;u, Mị thấy phơi phới, Mị đột nhi&ecirc;n thấy vui sướng, rượu l&agrave; chất x&uacute;c t&aacute;c khiến t&acirc;m hồn Mị như mở ra, như được t&igrave;m về niềm vui &ldquo;Mị trẻ lắm, Mị c&ograve;n trẻ, Mị muốn đi chơi&rdquo; cuộc sống n&agrave;y với Mị chẳng c&oacute; g&igrave;, kh&ocirc;ng t&igrave;nh y&ecirc;u, lu&ocirc;n phải l&agrave;m việc, vất vả khổ cực, bị h&agrave;nh hạ thể x&aacute;c v&agrave; tinh thần. Nắm l&aacute; ng&oacute;n m&agrave; Mị từng vứt đi, Mị từng chẳng muốn ăn nữa, v&igrave; sống l&acirc;u trong c&aacute;i khổ cũng quen khổ rồi, th&igrave; nay Mị lại mong muốn t&igrave;m về, người ta muốn sống, cũng ch&iacute;nh l&agrave; l&uacute;c ham sống nhất, v&igrave; kh&ocirc;ng muốn chịu khổ nữa, Mị muốn giải tho&aacute;t &ldquo;Mị sẽ ăn cho chết ngay, chứ kh&ocirc;ng buồn nhớ lại nữa&rdquo; Ch&iacute;nh v&igrave; thế, c&ocirc; Mị vốn bản chất từ đầu l&agrave; một c&ocirc; g&aacute;i kh&aacute;t khao y&ecirc;u sống, nay như h&ograve;n than bị thổi đi lớp tro t&agrave;n b&aacute;m đầy ph&iacute;a tr&ecirc;n. Tiếng s&aacute;o cứ du dương vọng lại, văng vẳng trong tai, li&ecirc;n tiếp mở ra những h&agrave;nh động quyết liệt tiếp theo của Mị.</p>
<p>&ldquo;Mị đến g&oacute;c nh&agrave;, lấy ống mỡ xắn một miếng bỏ th&ecirc;m v&agrave;o đĩa đ&egrave;n cho s&aacute;ng&rdquo; rồi &ldquo;Mị quấn lại t&oacute;c, Mị với tay lấy c&aacute;i v&aacute;y hoa vắt ở ph&iacute;a trong v&aacute;ch&rdquo; Mị c&oacute; bao giờ như thế? &Yacute; thức như thế đ&acirc;u? H&agrave;nh động n&agrave;y hiện l&ecirc;n như minh chứng một tr&aacute;i tim m&atilde;nh liệt đ&atilde; t&igrave;m về đ&uacute;ng với chủ nh&acirc;n của n&oacute;. Kh&ocirc;ng may bị A Sử bắt gặp, bị A Sử tr&oacute;i đứng v&agrave;o cột &ldquo;Mị kh&ocirc;ng c&uacute;i, kh&ocirc;ng nghi&ecirc;ng được đầu nữa&rdquo; cả th&acirc;n thể đau rức, nhưng &ldquo;Mị vẫn nghe tiếng s&aacute;o đưa Mị theo những cuộc chơi, những đ&aacute;m chơi&rdquo; &ldquo;l&uacute;c nồng n&agrave;n tha thiết nhớ. Hơi ượu tỏa. Tiếng s&aacute;o. Tiếng ch&oacute; sủa xa xa. Mị l&uacute;c m&ecirc;, l&uacute;c tỉnh&rdquo; trong mơ tưởng, Mị kh&ocirc;ng thấy m&igrave;nh bị tr&oacute;i, m&agrave; t&acirc;m hồn vẫn vọng về tiếng s&aacute;o, vẫn khao kh&aacute;t được giải tho&aacute;t, t&igrave;m thấy niềm vui, khao kh&aacute;t được sống l&agrave; ch&iacute;nh m&igrave;nh thật m&atilde;nh liệt. D&ugrave; bị hiện thực dập tắt, ta vẫn như được truyền sang một ngọn lửa ấm &aacute;p về sức sống của con người.</p>
<p>Qua đ&oacute; thể hiện một tấm l&ograve;ng nh&acirc;n đạo của T&ocirc; Ho&agrave;i, &ocirc;ng đ&atilde; khắc họa l&ecirc;n r&otilde; n&eacute;t một c&ocirc; g&aacute;i với sức sống tiềm t&agrave;ng, h&oacute;a ra &ocirc;ng lu&ocirc;n đặt trọn niềm tin v&agrave;o sức sống của con người, d&ugrave; bị &aacute;p bức đến c&ugrave;ng cực, họ vẫn lu&ocirc;n hướng về sự sống, muốn sống đ&uacute;ng l&agrave; m&igrave;nh, muốn được l&agrave; m&igrave;nh. Ca ngợi Mị, tr&acirc;n trọng v&agrave; hiểu c&ocirc; như thế, cũng ch&iacute;nh l&agrave; t&ocirc;n vinh những người d&acirc;n T&acirc;y Bắc xưa, v&agrave; cũng l&agrave; ph&ecirc; ph&aacute;n l&ecirc;n &aacute;n hiện thực t&agrave;n khốc v&agrave; d&atilde; man, đ&atilde; l&agrave;m thay đổi con người.</p>
<p>Quả thực qua t&igrave;nh tiết n&agrave;y của c&acirc;u truyện, đ&atilde; khắc họa ch&acirc;n thực t&iacute;nh c&aacute;ch t&acirc;m hồn của người d&acirc;n tộc &ndash; Mị. C&ugrave;ng một giọng văn nhẹ nh&agrave;ng, lối mi&ecirc;u tả tinh tế, gi&agrave;u chất tạo h&igrave;nh lại vừa gi&agrave;u chất thơ, đ&atilde; để lại cho ta một h&igrave;nh ảnh c&ocirc; Mị trong đ&ecirc;m t&igrave;nh m&ugrave;a xu&acirc;n thật đẹp m&agrave; cũng thật x&oacute;t xa.</p>
<p>Cảm ơn T&ocirc; Ho&agrave;i, c&acirc;y b&uacute;t gi&agrave;u t&agrave;i năng trong nền văn học Việt Nam. Suốt cuộc đời cầm b&uacute;t, chưa bao giờ th&ocirc;i trăn trở, tin tưởng v&agrave;o con người. V&agrave; chắc chắn với nh&acirc;n vật Mị, c&ugrave;ng sự hồi sinh của c&ocirc; trong đ&ecirc;m t&igrave;nh m&ugrave;a xu&acirc;n, đ&atilde; lu&ocirc;n để lại ấn tượng đẹp v&agrave; nhiều gi&aacute; trị &yacute; nghĩa trong l&ograve;ng bạn đọc, xứng đ&aacute;ng với những t&acirc;m huyết, t&agrave;i năng của &ocirc;ng đ&atilde; x&acirc;y dựng l&ecirc;n.</p>`,
            featuredImage: 'https://i.ibb.co/k2brkkW/untitled1-1405.jpg',
            featured: true,
            status: 'DRAFT',
            visibility: true,
            createdBy: 1,
            literary: undefined,
            postTag: [6],
            file: undefined,
        }
    else {
        post = {
            ...post,
            file: undefined,
            postTag: post.postTag.map((e) => e.tag.tagId),
        }
        console.log(post.literary)
    }
    return post
}

MyEditor.Layout = Layout

export default function MyEditor({post, close, mutate, posts}) {
    const {tags} = useTags('&limit=0')
    const {literaries, setLiteraries} = useLiteries('&limit=0')
    const {users} = useUsers('', '/profile')
    const editorRef = useRef(null)

    const form = useForm({
        initialValues: () => getInitialValues(post),
    })

    const handleMutate = async (updatedPost) => {
        if (!updatedPost?.postId) return
        form.setValues(getInitialValues(updatedPost))
        const newItems = posts.map((item) => (item.postId == updatedPost.postId ? updatedPost : item))
        mutate(newItems, false)
    }
    const handleSubmit = async (status) => {
        if (form.values.file) form.values.featuredImage = await uploadImg(form.values.file)
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
                <Group align='center'>
                    {form.values.status === 'PUBLISHED' && <Badge color='green'>Công khai</Badge>}
                    {form.values.status === 'DRAFT' && <Badge color='dark'>Nháp</Badge>}
                    {form.values.status === 'HIDE' && <Badge color='red'>Đã ẩn</Badge>}
                    {form.values.status === 'PENDING' && <Badge color='orange'>Chờ duyệt</Badge>}
                </Group>
                <Group>
                    {users[0]?.role !== 'CONTRIBUTOR' && (
                        <Checkbox
                            checked={form.values.featured}
                            onChange={(e) => form.setValues({featured: e.target.checked == 1})}
                            label='Bài viết nổi bật'
                        />
                    )}
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
                    {users[0]?.role !== 'CONTRIBUTOR' && (
                        <Button onClick={() => handleSubmit('published')} leftIcon={<WorldUpload />}>
                            Lưu & Công khai
                        </Button>
                    )}
                </Group>
            </Group>
            <Group noWrap align='flex-start' spacing='md' id='editor' mt='md'>
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
                        <Text mt='xl'>Ảnh bìa</Text>
                        <ImageDropzone form={form} imageField='featuredImage' w='100%' h='auto' />
                        {literaries[0]?.literaryId && (
                            <>
                                <Select
                                    data={literaries.map((lit) => ({label: lit.title, value: lit.literaryId}))}
                                    allowDeselect
                                    label='Tác Phẩm'
                                    transitionProps={{transition: 'pop-top-left', duration: 80, timingFunction: 'ease'}}
                                    {...form.getInputProps('literary')}></Select>
                                <Image
                                    width={100}
                                    height={133}
                                    fit='cover'
                                    mx='auto'
                                    alt=''
                                    src={literaries.filter((e) => e.literaryId == form.values.literary)[0]?.image}
                                />
                            </>
                        )}

                        <Textarea minRows={5} label='Tóm Tắt' {...form.getInputProps('summary')} />

                        {tags[0]?.tagId && (
                            <MultiSelect
                                data={tags.map((item) => ({value: item.tagId, label: '#' + item.tagName}))}
                                label='Tags'
                                transitionProps={{transition: 'pop-top-left', duration: 80, timingFunction: 'ease'}}
                                {...form.getInputProps('postTag')}></MultiSelect>
                        )}

                        {/* <TextInput label='Link ảnh bìa' {...form.getInputProps('featuredImage')} />
                        <Image src={form.values.featuredImage} alt='' /> */}
                    </Stack>
                </ScrollArea>
            </Group>
        </>
    )
}
