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
import {createPost, useTags, publishPost, updatePost, requestPublish, hidePost, useUsers, useLiteries} from '@util'
import {EyeOff, Pencil, Send, WorldUpload} from 'tabler-icons-react'
import {ImageDropzone} from '@comp'

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
        if (form.values.file) console.log(editorRef.current.getContent())
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
