import {useRouter} from 'next/router'
import {Box, Button, Grid, Group, Select, TextInput} from '@mantine/core'
import {LiteraryContainer, Section, CommonLiterarySection} from '@comp'
import {Search} from 'tabler-icons-react'
import {useMediaQuery} from '@mantine/hooks'
import {useEffect, useState} from 'react'

function Literaries({heading}) {
    const router = useRouter()
    const [key, setKey] = useState(router.query.key)
    const [sortBy, setSortBy] = useState('publishedAt')
    const [genre, setGenre] = useState()

    const smScreen = useMediaQuery('(max-width: 48em)')
    return (
        <Box pt='48px' px='md'>
            <Section title='Tác phẩm tiêu biểu' titlePosition='center'>
                <CommonLiterarySection />
            </Section>
            {/* <Image alt='' src={getConfig().categoryCover} my='xl' fit='cover' imageProps={{objectPotition: 'center'}} /> */}
            <Section title='Tác phẩm văn học'>
                <Grid gutter='xl'>
                    <Grid.Col md={2}>
                        <Group align='flex-end' mb='xl' pos='sticky' top='8rem'>
                            <TextInput
                                icon={<Search />}
                                placeholder='Tìm kiếm...'
                                value={key}
                                onChange={(e) => setKey(e.target.value)}
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
                    </Grid.Col>
                    <Grid.Col md={10}>
                        <Grid gutter='0'>
                            {[1, 1, 1, 1].map((item, index) => (
                                <>
                                    <Grid.Col md={6} key={index} p={smScreen ? '0 22px 22px' : '0 12px 38px'}>
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
                    </Grid.Col>
                </Grid>
            </Section>
        </Box>
    )
}

export default Literaries
