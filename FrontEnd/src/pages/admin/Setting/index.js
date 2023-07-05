import {Button, Group, Image, NumberInput, Radio, Select, Stack, TextInput} from '@mantine/core'
import {useForm} from '@mantine/form'
import {useState} from 'react'
import {getConfig, updateConfig} from '@util'

const listFontFamily = [
    'Open Sans',
    'Arial',
    'Verdana',
    'Tahoma',
    'Trebuchet MS',
    'Times New Roman',
    'Georgia',
    'Garamond',
    'Courier New',
    'Brush Script MT',
]

// matine color
const listColor = [
    'gray',
    'red',
    'pink',
    'grape',
    'violet',
    'indigo',
    'blue',
    'cyan',
    'teal',
    'green',
    'lime',
    'yellow',
    'orange',
]

function Setting({}) {
    const form = useForm({
        initialValues: getConfig,
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        updateConfig(form.values)
    }
    return (
        <form onSubmit={handleSubmit}>
            <Stack>
                <Select
                    withAsterisk
                    label='Kiểu chữ'
                    data={listFontFamily}
                    {...form.getInputProps('fontFamily')}></Select>
                <Select
                    withAsterisk
                    label='Màu chủ đạo'
                    data={listColor}
                    {...form.getInputProps('primaryColor')}></Select>
                <TextInput withAsterisk label='Cỡ chữ (px)' {...form.getInputProps('baseFontSize')}></TextInput>
                <TextInput withAsterisk label='Tiêu đề trang' {...form.getInputProps('pageTitle')}></TextInput>
                <TextInput
                    withAsterisk
                    label='Logo'
                    {...form.getInputProps('logo')}
                    icon={<Image src={form.values.logo} mx='8px' />}
                    iconWidth={44}></TextInput>
                <TextInput
                    withAsterisk
                    label='Icon'
                    {...form.getInputProps('favIcon')}
                    iconWidth={44}
                    icon={<Image src={form.values.favIcon} mx='8px' />}></TextInput>
                <Radio.Group label='Home Hero' withAsterisk {...form.getInputProps('homePageHero')}>
                    <Group mt='xs'>
                        <Radio value='grid' label='Grid' />
                        <Radio value='carousel' label='Carousel' />
                    </Group>
                </Radio.Group>
                <Radio.Group label='Category Hero' withAsterisk {...form.getInputProps('categoryPageHero')}>
                    <Group mt='xs'>
                        <Radio value='grid' label='Grid' />
                        <Radio value='carousel' label='Carousel' />
                    </Group>
                </Radio.Group>
                <Button type='submit'>Lưu</Button>
            </Stack>
        </form>
    )
}

export default Setting
