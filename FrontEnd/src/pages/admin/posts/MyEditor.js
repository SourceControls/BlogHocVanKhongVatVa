import React, {useRef, useState} from 'react'
import {Editor} from '@tinymce/tinymce-react'
import {getNews, transformToUrl} from '@util'
import {
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
import Layout from '../../Layout'
import {useDisclosure} from '@mantine/hooks'

function getInitialValues(post) {
    if (!post)
        return {
            postId: '',
            title: '',
            slug: '',
            subTitle: '',
            summary: '',
            htmlContent: '',
            featuredImage: '',
            featured: 1,
            status: '',
            visibility: '',
            view: '',
            createdBy: '',
            createdAt: '',
            updatedAt: '',
            updatedBy: '',
            publishedBy: '',
            literary: '',
            tags: '',
        }
    return post
}

MyEditor.Layout = Layout

export default function MyEditor({post}) {
    const [opened, {open, close}] = useDisclosure(false)

    const editorRef = useRef(null)
    const form = useForm({
        initialValues: () => getInitialValues(post),
    })
    const [tags, setTags] = useState([
        {value: 'NORMAL', label: 'NORMAL'},
        {value: 'TOP', label: 'TOP'},
        {value: 'HOT', label: 'HOT'},
        {value: 'HIDE', label: 'HIDE'},
    ])
    const [categories, setcategories] = useState([
        {value: '6476fc4be125802070155733', label: 'Y Tế'},
        {value: '6476fc3be125802070155732', label: 'Giáo Dục'},
        {value: '6476fc08e125802070155730', label: 'Chính Trị'},
    ])
    const [literaries, setLiteraries] = useState([
        {
            value: '6476fc4be125802070155733',
            label: 'Y Tế',
            image: 'https://th.bing.com/th?id=ORMS.554205bb6ab1c461bb6552737ea0fdf8&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1.5&p=0',
        },
        {
            value: '6476fc3be125802070155732',
            label: 'Giáo Dục',
            image: 'https://th.bing.com/th?id=ORMS.554205bb6ab1c461bb6552737ea0fdf8&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1.5&p=0',
        },
        {
            value: '6476fc08e125802070155730',
            label: 'Chính Trị',
            image: 'https://th.bing.com/th?id=ORMS.554205bb6ab1c461bb6552737ea0fdf8&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1.5&p=0',
        },
    ])

    const submit = () => {
        if (editorRef.current) {
            if (post) {
                // updatePost({...form.values, id: post.id, content: editorRef.current.getContent()}).then((rs) =>
                //     console.log(rs),
                // )
            } else {
                console.log(editorRef.current.getContent())
                // addPost({...form.values, content: editorRef.current.getContent()}).then((rs) => console.log(rs))
            }
        }
    }

    return (
        <>
            <Group position='apart' align='flex-start'>
                <Text size='xl' fw='bold' pl='4px' mb='md'>
                    Nội dung
                </Text>
                <Group>
                    <Button variant='light'>Lưu vào nháp</Button>
                    <Button>Đăng</Button>
                </Group>
            </Group>
            <Group noWrap align='flex-start' spacing='md' id='editor'>
                <Editor
                    apiKey='bxn0ggwcir62q9v1mnynxincyleaypne5h9atduc394qhp49'
                    onInit={(evt, editor) => {
                        editorRef.current = editor
                        if (post) {
                            getNews({id: post._id}).then((rs) => {
                                editorRef.current.setContent(rs.data[0].content)
                            })
                        }
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
                        {literaries && (
                            <Select
                                data={tags}
                                label='Tags'
                                transitionProps={{transition: 'pop-top-left', duration: 80, timingFunction: 'ease'}}
                                {...form.getInputProps('tags')}></Select>
                        )}
                        <Image src={form.values.literaryImage} />
                        <TextInput label='Thẻ URL' {...form.getInputProps('slug')} />
                        <Textarea minRows={5} label='Tóm Tắt' {...form.getInputProps('summarize')} />
                        {tags && (
                            <MultiSelect
                                data={tags}
                                label='Tags'
                                transitionProps={{transition: 'pop-top-left', duration: 80, timingFunction: 'ease'}}
                                {...form.getInputProps('tags')}></MultiSelect>
                        )}
                        {categories && (
                            <MultiSelect
                                data={categories}
                                label='Danh mục'
                                defaultValue={form.values.categories}
                                transitionProps={{transition: 'pop-top-left', duration: 80, timingFunction: 'ease'}}
                                {...form.getInputProps('categories')}></MultiSelect>
                        )}
                        <TextInput label='Link ảnh bìa' {...form.getInputProps('featuredImage')} />
                        <Image src={form.values.featuredImage} />
                        <Checkbox
                            checked={form.values.featured}
                            {...form.getInputProps('featured')}
                            label='Đặt làm bài viết nổi bật'
                        />
                        <Button onClick={submit}>Lưu thông tin</Button>
                    </Stack>
                </ScrollArea>
            </Group>
        </>
    )
}
