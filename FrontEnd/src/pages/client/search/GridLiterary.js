import {Box, Button, Grid, Group, SegmentedControl, Select, Stack, Title} from '@mantine/core'
import {LiteraryContainer, FloatingLabelInput} from '@comp'
import {useMediaQuery} from '@mantine/hooks'
import {Search} from 'tabler-icons-react'
import {useRouter} from 'next/router'
import {useLiteries, useCategories} from '@util'
function GridLiterary() {
    const router = useRouter()
    const query = '&limit=4&' + router.asPath.split('?')[1]
    const {literaries, isLoading, size, setSize} = useLiteries(query)
    const {categories} = useCategories('&limit=0')

    const smScreen = useMediaQuery('(max-width: 48em)')
    const changeQuery = (key, value) => {
        router.push({
            query: {
                ...router.query,
                [key]: value,
            },
        })
    }
    if (router.query.tag) return <Title order={3}>Không có tác phẩm cho hashtag: {"'#" + router.query.tag + "'"}</Title>
    return (
        <Stack>
            <Group align='flex-end' mb='1rem' spacing='xl'>
                <Title order={3}>
                    Kết quả tìm kiếm tác phẩm cho: {"'" + (router.query.key || router.query.tag) + "'"}
                </Title>

                <Select
                    ml={smScreen ? '0' : 'auto'}
                    defaultValue=''
                    data={[
                        {value: '', label: 'Mới nhất'},
                        {value: 'view', label: 'Lượt xem'},
                        {value: 'postCount', label: 'Bài viết'},
                    ]}
                    onChange={(val) => changeQuery('sortBy', val)}
                    label='Sắp xếp theo'></Select>
                <Select
                    defaultValue=''
                    onChange={(val) => changeQuery('categorySlug', val)}
                    data={
                        categories[0]?.categoryId
                            ? [
                                  {value: '', label: 'Tất Cả'},
                                  ...categories.map((cate) => ({
                                      value: cate.slug,
                                      label: cate.categoryName,
                                  })),
                              ]
                            : []
                    }
                    label='Thể Loại'></Select>
            </Group>
            <Grid>
                {literaries?.map((item, index) => (
                    <Grid.Col md={6} key={index} p={smScreen ? '0 22px 22px 0' : '0 42px 42px 0'}>
                        <LiteraryContainer index={index} showContent={true} literary={item} />
                    </Grid.Col>
                ))}
            </Grid>
            <Box>
                <Button variant='outline' m='32px auto' display='block' onClick={() => setSize(size + 1)}>
                    Xem Thêm
                </Button>
            </Box>
        </Stack>
    )
}

export default GridLiterary
