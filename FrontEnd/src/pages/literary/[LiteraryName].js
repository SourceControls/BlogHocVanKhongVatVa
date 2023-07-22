import Layout from '../Layout'
import {useRouter} from 'next/router'
import {Box, Group, Image, Select, Spoiler, Stack, Text, TextInput, Title} from '@mantine/core'
import {Section, GridPost, Decorate} from '@comp'
import {Eye, News, Search, ThumbUp} from 'tabler-icons-react'
import {useMediaQuery} from '@mantine/hooks'

function Category() {
    const router = useRouter()
    const smScreen = useMediaQuery('(max-width: 48em)')
    return (
        <Box px='xs'>
            <Group>
                <Box
                    sx={(theme) => ({
                        backgroundColor: 'transparent',
                        paddingTop: smScreen ? '12px' : '64px',
                        transition: '0.3s',
                        ' .shadow': {
                            boxShadow: '8px 16px 16px rgba(0,0,0,0.6)',
                            transition: '0.3s',
                        },
                        ' .bookContainer': {
                            transition: '0.3s',
                        },
                        'bookContainer:hover .': {
                            transform: 'translate(-1%,-3%)',
                            ' .shadow': {
                                top: 0,
                            },
                        },
                        borderRadius: '12px',
                    })}>
                    <Group noWrap={!smScreen} align='flex-start' spacing='xl'>
                        <Box
                            style={{display: 'block', position: 'relative'}}
                            className='bookContainer'
                            w={smScreen ? '50%' : '20%'}>
                            <Box className='shadow' ml='4px' w='97%' h='97%' pos='absolute'></Box>
                            <Image src='https://i.ibb.co/W2zv6HF/T-m-C-m-1-removebg-preview.png' alt='' radius='12px' />
                        </Box>

                        <Stack w={smScreen ? '100%' : '80%'} h='100%' spacing='6px'>
                            <Title order={2}>Tấm Cám</Title>
                            <Group spacing={0}>
                                <Text size='xl' fw='bold' mb='0'>
                                    Giới thiệu
                                </Text>
                                <Spoiler pb='md' maxHeight={75} showLabel='...Xem Thêm' hideLabel='Ẩn Bớt'>
                                    Tấm Cám (chữ Nôm: 糝𥽇) là một câu chuyện cổ tích Việt Nam thuộc thể loại truyện cổ
                                    tích thần kì. Dù có nhiều dị bản, câu chuyện này phản ánh những mâu thuẫn trong gia
                                    đình, đặc biệt là mối quan hệ mẹ kế - con chồng.Tấm Cám (chữ Nôm: 糝𥽇) là một câu
                                    chuyện cổ tích Việt Nam thuộc thể loại truyện cổ tích thần kì. Dù có nhiều dị bản,
                                    câu chuyện này phản ánh những mâu thuẫn trong gia đình, đặc biệt là mối quan hệ mẹ
                                    kế - con chồng. Tấm Cám (chữ Nôm: 糝𥽇) là một câu chuyện cổ tích Việt Nam thuộc thể
                                    loại truyện cổ tích thần kì. Dù có nhiều dị bản, câu chuyện này phản ánh những mâu
                                    thuẫn trong gia đình, đặc biệt là mối quan hệ mẹ kế - con chồng.Tấm Cám (chữ Nôm:
                                    糝𥽇) là một câu chuyện cổ tích Việt Nam thuộc thể loại truyện cổ tích thần kì. Dù
                                    có nhiều dị bản, câu chuyện này phản ánh những mâu thuẫn trong gia đình, đặc biệt là
                                    mối quan hệ mẹ kế - con chồng.
                                </Spoiler>
                            </Group>
                            <Group spacing='md'>
                                <Text size='xl' fw='bold' mb='0'>
                                    Tác giả:
                                </Text>
                                <Text>Khuyết Danh</Text>
                            </Group>
                            <Group spacing='md'>
                                <Text size='xl' fw='bold' mb='0'>
                                    Thời điểm sáng tác:
                                </Text>
                                <Text>Mùa xuân 1980</Text>
                            </Group>
                            <Group spacing='md'>
                                <Text size='xl' fw='bold' mb='0'>
                                    Thể loại:
                                </Text>
                                <Text>Văn học dân gian</Text>
                            </Group>
                            <Group spacing='xl'>
                                <Group spacing='xs'>
                                    <Eye />
                                    <Text>113.6k</Text>
                                </Group>
                                <Group spacing='xs'>
                                    <ThumbUp />
                                    <Text>11.2k</Text>
                                </Group>
                                <Group spacing='xs'>
                                    <News />
                                    <Text>498 bài viết</Text>
                                </Group>
                            </Group>
                        </Stack>
                    </Group>
                    <Text size='xl' fw='bold' mb='0' mt='xl'>
                        Tóm tắt
                    </Text>
                    <Spoiler maxHeight={smScreen ? 120 : 450} showLabel='...Xem Thêm' hideLabel='Ẩn Bớt'>
                        <Text align='justify' mt='md'>
                            Tấm Cám là câu chuyện dân gian kể về hai chị em Tấm Cám. Tấm mồ côi mẹ từ nhỏ sống với mẹ
                            con dì ghẻ và Cám. Mẹ con Cám thường xuyên hành hạ đối xử bất công với Tấm. Khi thì cướp hết
                            cá mà Tấm bắt được, khi thì lại giết hại cả bống bạn của Tấm, lúc lại không cho Tấm đi trẩy
                            hội, bắt Tấm ở nhà nhặt thóc và gạo. Tuy nhiên khi được Bụt giúp đỡ Tấm đã được đi chơi hội
                            và gặp gỡ nhà vua. Khi trở về từ dạ tiệc Tấm đánh rơi chiếc hài và nhà vua theo đó mà tìm
                            được người để cưới về làm vợ. Tấm trở thành hoàng hậu, điều đó làm mẹ con Cám ganh ghét và
                            lập mưu giết hại Tấm. Nhưng Tấm đã hóa thành chim vàng anh, cây xoan đào, khung cửi, quả
                            thị. Và cuối cùng Tấm gặp lại nhà vua và sống trong cung hạnh phúc đến suốt đời. Còn mẹ con
                            Cám phải chịu báo ứng vì những tội ác mà mình đã gây ra.
                        </Text>
                    </Spoiler>
                </Box>
            </Group>
            <Decorate />
            <Section title='Bài Viết Về: Tấm Cám'>
                {/* <Group align='flex-end' mb='xl'>
                    <TextInput icon={<Search />} placeholder='Tìm kiếm...' />
                    <Select
                        defaultValue='Mới nhất'
                        data={[
                            {value: 'Mới nhất', label: 'Mới nhất'},
                            {value: 'Lượt xem', label: 'Lượt xem'},
                            {value: 'Lượt like ', label: 'Lượt like '},
                        ]}
                        label='Sắp xếp theo'></Select>
                </Group> */}
                <GridPost />
            </Section>
        </Box>
    )
}

Category.Layout = Layout
export default Category
