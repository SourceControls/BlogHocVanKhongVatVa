import React, {useEffect, useRef, useState} from 'react'
import {Editor} from '@tinymce/tinymce-react'
import {getNews, updatePost, addPost} from '@util'
import {Button, MultiSelect, Select, TextInput, Stack, filterProps, Group, Image} from '@mantine/core'
import {useForm} from '@mantine/form'

function getInitialValues(post) {
    if (!post)
        return {
            title: 'Title',
            subTitle: 'Subtitle',
            displayType: 'NORMAL',
            categories: ['6476fc4be125802070155733'],
            image: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1czaFj.img?w=612&h=407&m=6&x=235&y=111&s=107&d=107',
            content: 'Content',
        }
    post.categories = post.categories.map((item) => item.categoryId)
    console.log(post.categories)
    return post
}

export default function MyEditor({post}) {
    const editorRef = useRef(null)
    const form = useForm({
        initialValues: () => getInitialValues(post),
    })
    const [displayType, setDisplayType] = useState([
        {value: 'NORMAL', label: 'NORMAL'},
        {value: 'TOP', label: 'TOP'},
        {value: 'HOT', label: 'HOT'},
        {value: 'HIDE', label: 'HIDE'},
    ])
    const [category, setcategory] = useState([
        {value: '6476fc4be125802070155733', label: 'Y Tế'},
        {value: '6476fc3be125802070155732', label: 'Giáo Dục'},
        {value: '6476fc08e125802070155730', label: 'Chính Trị'},
    ])

    const submit = () => {
        if (editorRef.current) {
            if (post) {
                updatePost({...form.values, id: post.id, content: editorRef.current.getContent()}).then((rs) =>
                    console.log(rs),
                )
            } else {
                addPost({...form.values, content: editorRef.current.getContent()}).then((rs) => console.log(rs))
            }
        }
    }

    return (
        <Stack spacing={0}>
            <h3>Nội dung</h3>
            <Group align='flex-start' position='apart'>
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
                        width: '68%',
                        height: 600,
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
                        menu: {
                            favs: {title: 'My Favorites', items: 'code visualaid | searchreplace | emoticons'},
                        },
                        menubar: 'favs file edit view insert format tools table help',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
                        image_caption: true,
                    }}
                />
                <Stack w={'30%'}>
                    <TextInput label='Tiêu đề' withAsterisk {...form.getInputProps('title')} />
                    <TextInput label='Tóm Tắt' withAsterisk {...form.getInputProps('subTitle')} />
                    {displayType && (
                        <Select
                            data={displayType}
                            label='Dạng hiển thị'
                            defaultValue={form.displayType}
                            transitionProps={{transition: 'pop-top-left', duration: 80, timingFunction: 'ease'}}
                            {...form.getInputProps('displayType')}></Select>
                    )}
                    {category && (
                        <MultiSelect
                            data={category}
                            label='Danh mục'
                            defaultValue={form.values.categories}
                            transitionProps={{transition: 'pop-top-left', duration: 80, timingFunction: 'ease'}}
                            {...form.getInputProps('categories')}></MultiSelect>
                    )}
                    <TextInput label='Link ảnh bìa' withAsterisk {...form.getInputProps('image')} />
                    <Image src={form.values.image} />
                    <Button onClick={submit}>Lưu thông tin</Button>
                </Stack>
            </Group>
        </Stack>
    )
}
