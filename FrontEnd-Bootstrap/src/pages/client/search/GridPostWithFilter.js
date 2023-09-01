import {Group, Select, Stack, Title} from '@mantine/core'
import {GridPost, FloatingLabelInput} from '@comp'
import {useEffect, useState} from 'react'
import {useMediaQuery} from '@mantine/hooks'
import {Search} from 'tabler-icons-react'
import {useRouter} from 'next/router'

function GridPostWithFilter() {
    const smScreen = useMediaQuery('(max-width: 48em)')
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
            <Group align='flex-end' mx='xs' mb='md' position='left' spacing='xl'>
                {router.query.tag ? (
                    <Title order={3}>Kết quả tìm kiếm theo hashtag: {"'#" + router.query.tag + "'"}</Title>
                ) : (
                    <Title order={3}>Kết quả tìm kiếm theo từ khóa: {"'" + router.query.key + "'"}</Title>
                )}
                {/* <FloatingLabelInput
                    label='Tìm kiếm'
                    w='30%'
                    miw='300px'
                    required
                    icon={<Search />}
                    placeholder='"Phân tích nhân vật Chàng - Vợ Nhặt"'
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            changeQuery('key', e.target.value)
                        }
                    }}
                /> */}
                <Select
                    ml='auto'
                    defaultValue=''
                    onChange={(val) => changeQuery('sortBy', val)}
                    data={[
                        {value: '', label: 'Mới nhất'},
                        {value: 'view', label: 'Lượt xem'},
                        {value: 'likeCount', label: 'Lượt like '},
                    ]}
                    label='Sắp xếp theo'></Select>
            </Group>
            <GridPost query={query} />
        </Stack>
    )
}

export default GridPostWithFilter
