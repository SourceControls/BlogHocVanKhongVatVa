import {ActionIcon, Anchor, Box, Button, Divider, Grid, Group, Stack, Text, TextInput} from '@mantine/core'
import {IconBrandFacebook, IconBrandTwitter, IconBrandYoutube} from '@tabler/icons-react'
import Link from 'next/link'
import {toast} from 'react-toastify'
import {ArrowNarrowRight} from 'tabler-icons-react'

function Footer() {
    return (
        <>
            <Divider w='100%' mt='xl' />
            <Box w='100%' className='limit-w' mx='auto' p='md' px='xs'>
                <Grid m='0 auto'>
                    <Grid.Col xs={12} lg={6}>
                        <Stack justify='space-between' h='100%'>
                            <Text size='xl' fw='bold'>
                                {' '}
                                Đăng ký nhận thông báo những bài viết mới Nhất
                            </Text>
                            <TextInput placeholder='Nhập Email của bạn' icon={<ArrowNarrowRight />} w='320px' />
                            <Button
                                w='200px'
                                onClick={async () => {
                                    toast.info('Coming soon')
                                }}>
                                Xác Nhận
                            </Button>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col xs={6} sm={6} lg={3}>
                        <Stack>
                            <Text size='xl' fw='bold'>
                                Liên Hệ
                            </Text>
                            <Group align='center'>
                                <Anchor lh={1.0} href='#'>
                                    <ActionIcon>
                                        <IconBrandTwitter href='#' />
                                    </ActionIcon>
                                </Anchor>
                                <Anchor lh={1.0} href='#'>
                                    <ActionIcon>
                                        <IconBrandFacebook href='#' />
                                    </ActionIcon>
                                </Anchor>
                                <Anchor lh={1.0} href='#'>
                                    <ActionIcon>
                                        <IconBrandYoutube href='#' />
                                    </ActionIcon>
                                </Anchor>
                            </Group>
                            <Link href='#'>admin@vietlit.com</Link>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col xs={6} sm={6} lg={3}>
                        <Stack>
                            <Text size='xl' fw='bold'>
                                Liên kết
                            </Text>
                            <Link href='#'>Term</Link>
                            <Link href='#'>Privacy</Link>
                            <Link href='#'>FAQs</Link>
                        </Stack>
                    </Grid.Col>
                </Grid>
            </Box>
        </>
    )
}

export default Footer
