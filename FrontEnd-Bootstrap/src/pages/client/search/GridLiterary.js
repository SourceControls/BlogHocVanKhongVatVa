import {
    Box,
    Button,
    Grid,
    Group,
    SegmentedControl,
    Select,
    AspectRatio,
    Stack,
    Title,
    Skeleton,
    SimpleGrid,
} from '@mantine/core'
import {LiteraryContainer, FloatingLabelInput} from '@comp'
import {useMediaQuery} from '@mantine/hooks'
import {useRouter} from 'next/router'
import {useLiteries, useCategories} from '@util'
function GridLiterarySkeleton({smScreen}) {
    return (
        <SimpleGrid cols={2} w='100%' p={smScreen ? '0 22px 22px 0' : '0 42px 42px 0'}>
            {[1, 1].map((e, i) => (
                <Group grow align='flex-start' p='xl' key={i}>
                    <AspectRatio ratio={3 / 4}>
                        <Skeleton radius='md' />
                    </AspectRatio>
                    <Stack>
                        <Skeleton height={24} radius='xl' />
                        <Skeleton height={8} mt={6} radius='xl' />
                        <Skeleton height={8} mt={6} radius='xl' />
                        <Skeleton height={8} mt={6} radius='xl' />
                        <Skeleton height={8} mt={6} radius='xl' />
                        <Skeleton height={8} mt={6} width='70%' radius='xl' />
                        <Skeleton height={8} mt={6} width='30%' radius='xl' />
                    </Stack>
                </Group>
            ))}
        </SimpleGrid>
    )
}
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
                <Title order={3} maw='60%'>
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
                {!literaries[0]?.literaryId && <GridLiterarySkeleton smScreen={smScreen} />}
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
