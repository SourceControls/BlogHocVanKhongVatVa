import {Group, Select, Stack} from '@mantine/core'
import {GridPost, FloatingLabelInput} from '@comp'
import {useState} from 'react'
import {useMediaQuery} from '@mantine/hooks'
import {Search} from 'tabler-icons-react'

function GridPostWithFilter() {
    const [searchKey, setSearchKey] = useState('')
    const [sortBy, setSortBy] = useState('publishedAt')
    const smScreen = useMediaQuery('(max-width: 48em)')

    return (
        <Stack>
            <Group align='flex-end' mx='xs' mb='md' position='left' spacing='xl'>
                <FloatingLabelInput
                    label='Tìm kiếm'
                    w='30%'
                    miw='300px'
                    required
                    icon={<Search />}
                    placeholder='"Phân tích nhân vật Chàng - Vợ Nhặt"'
                    value={searchKey}
                    onChange={(e) => setSearchKey(e.target.value)}
                />
                <Select
                    defaultValue='publishedAt'
                    value={sortBy}
                    onChange={setSortBy}
                    data={[
                        {value: 'publishedAt', label: 'Mới nhất'},
                        {value: 'view', label: 'Lượt xem'},
                        {value: 'like', label: 'Lượt like '},
                    ]}
                    label='Sắp xếp theo'></Select>
            </Group>
            <GridPost />
        </Stack>
    )
}

export default GridPostWithFilter
