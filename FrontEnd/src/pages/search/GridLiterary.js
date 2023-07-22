import {Box, Button, Grid, Group, Select, Stack} from '@mantine/core'
import {LiteraryContainer, Section, FloatingLabelInput} from '@comp'
import {useEffect, useState} from 'react'
import {useMediaQuery} from '@mantine/hooks'
import {Search} from 'tabler-icons-react'
import {useRouter} from 'next/router'

function GridLiterary() {
    const router = useRouter()
    const [searchKey, setSearchKey] = useState(router.query.key)
    const [sortBy, setSortBy] = useState('publishedAt')
    const [genre, setGenre] = useState('all')
    const handleRemoveQuery = () => {
        router.push(
            {
                pathname: router.pathname, // Keep the current pathname
                query: {}, // Set an empty object as the query
            },
            undefined,
            {replace: true},
        )
    }
    useEffect(() => {
        handleRemoveQuery()
    }, [])
    useEffect(() => {
        setSearchKey('')
    }, [router.query.category])

    const smScreen = useMediaQuery('(max-width: 48em)')

    return (
        <Stack>
            <Group align='flex-end' mb='md' spacing='xl'>
                <FloatingLabelInput
                    label='Tìm kiếm'
                    w='30%'
                    miw='300px'
                    required
                    icon={<Search />}
                    placeholder='Nhập tên tác phẩm, tác giả...'
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
                <Select
                    defaultValue='all'
                    value={genre}
                    onChange={setGenre}
                    data={[
                        {value: 'all', label: 'Tất Cả'},
                        {value: 'Thơ', label: 'Thơ'},
                        {value: 'Văn Suôi', label: 'Văn Suôi'},
                        {value: 'Truyện', label: 'Lượt like '},
                    ]}
                    label='Thể Loại'></Select>
            </Group>
            <Grid>
                {[1, 1, 1, 1].map((item, index) => (
                    <>
                        <Grid.Col md={6} key={index} p={smScreen ? '0 22px 22px 0' : '0 42px 42px 0'}>
                            <LiteraryContainer index={index} showContent={true} />
                        </Grid.Col>
                    </>
                ))}
            </Grid>
            <Box>
                <Button variant='outline' m='32px auto' display='block'>
                    Xem Thêm
                </Button>
            </Box>
        </Stack>
    )
}

export default GridLiterary
