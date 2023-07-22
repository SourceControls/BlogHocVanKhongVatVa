import {Image, Title, Text, Box, Paper, Group, Stack, ScrollArea, Spoiler} from '@mantine/core'
import Link from 'next/link'
import {Eye, News, ThumbUp} from 'tabler-icons-react'
import {useMediaQuery} from '@mantine/hooks'

export function LiteraryContainer(props) {
    const smScreen = useMediaQuery('(max-width: 48em)')
    return (
        <Box
            sx={(theme) => ({
                backgroundColor: 'transparent',
                transition: '0.3s',
                ' .shadow': {
                    boxShadow: '8px 16px 16px rgba(0,0,0,0.6)',
                    transition: '0.3s',
                },
                ' .bookContainer': {
                    transition: '0.3s',
                },
                '&:hover .bookContainer': {
                    transform: 'translate(-1%,-3%)',
                    ' .shadow': {
                        top: 0,
                    },
                },
                borderRadius: '12px',
            })}>
            <Group noWrap={!smScreen} align='flex-start'>
                <Link
                    href='/literary/tam-cam'
                    style={{
                        display: 'block',
                        position: 'relative',
                        width: props.showContent ? '40%' : 'auto',
                    }}
                    className='bookContainer'>
                    <Box className='shadow' ml='4px' w='97%' h='97%' pos='absolute'></Box>
                    <Image src='https://i.ibb.co/W2zv6HF/T-m-C-m-1-removebg-preview.png' alt='' radius='12px' />
                </Link>
                {props.showContent && (
                    <Stack w={smScreen ? '100%' : '80%'} ml={'xs'} h='100%' spacing='xs'>
                        <Link href='/literary/tam-cam'>
                            <Title order={2}>Tấm Cám</Title>
                            <Text size='xs' color='dimmed'>
                                Khuyết Danh
                            </Text>
                        </Link>
                        <ScrollArea h={160}>
                            <Spoiler maxHeight={125} showLabel='...Xem thêm' align='justify'>
                                Tấm Cám là câu chuyện dân gian kể về hai chị em Tấm Cám. Tấm mồ côi mẹ từ nhỏ sống với
                                mẹ con dì ghẻ và Cám. Mẹ con Cám thường xuyên hành hạ đối xử bất công với Tấm. Khi thì
                                cướp hết cá mà Tấm bắt được, khi thì lại giết hại cả bống bạn của Tấm, lúc lại không cho
                                Tấm đi trẩy hội, bắt Tấm ở nhà nhặt thóc và gạo. Tuy nhiên khi được Bụt giúp đỡ Tấm đã
                                được đi chơi hội và gặp gỡ nhà vua. Khi trở về từ dạ tiệc Tấm đánh rơi chiếc hài và nhà
                                vua theo đó mà tìm được người để cưới về làm vợ. Tấm trở thành hoàng hậu, điều đó làm mẹ
                                con Cám ganh ghét và lập mưu giết hại Tấm. Nhưng Tấm đã hóa thành chim vàng anh, cây
                                xoan đào, khung cửi, quả thị. Và cuối cùng Tấm gặp lại nhà vua và sống trong cung hạnh
                                phúc đến suốt đời. Còn mẹ con Cám phải chịu báo ứng vì những tội ác mà mình đã gây ra.
                            </Spoiler>
                        </ScrollArea>
                        <Group spacing='md' align='flex-start' noWrap>
                            <Group spacing='6px'>
                                <Eye />
                                <Text>96.6k</Text>
                            </Group>
                            <Group spacing='6px'>
                                <ThumbUp />
                                <Text>11.2k</Text>
                            </Group>
                            <Group spacing='6px'>
                                <News />
                                <Text>18 bài viết</Text>
                            </Group>
                        </Group>
                    </Stack>
                )}
            </Group>
        </Box>
    )
}
