import {Table, Text, Group, Avatar, Badge, Paper, Title, Stack, Divider} from '@mantine/core'
import Price from '../../component/Price'
import Row from '../src/pages/admin/manage-post/MainSection/Row'
import {primaryColor} from './../../../components/globalStyle'
function Detail() {
    return (
        <tr>
            <td colspan='11' style={{'vertical-align': 'top'}}>
                <Group position='right' align='flex-start'>
                    <Table w='800px' withBorder>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Món ăn</th>
                                <th>Giá</th>
                                <th style={{'text-align': 'center'}}>Số lượng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[1, 1, 1].map((item, index) => (
                                <tr>
                                    <td>
                                        <Text fz='sm' c='dimmed'>
                                            {index + 1}
                                        </Text>
                                    </td>
                                    <td>
                                        <Group spacing='sm'>
                                            <Avatar
                                                size={40}
                                                src={
                                                    'https://vinmec-prod.s3.amazonaws.com/images/20210411_144423_886364_bot-ngot.max-1800x1800.jpg'
                                                }
                                                radius={40}
                                            />
                                            <Text fz='sm' fw={500}>
                                                Bột ngọt
                                            </Text>
                                        </Group>
                                    </td>
                                    <td>
                                        <Price data={1000000} align='left'></Price>
                                    </td>
                                    <td align='center'>x 2</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Stack bg='#f8f8f8' p='md' w='300px'>
                        <Group position='apart'>
                            <Text>Tổng phụ:</Text>
                            <Price data={95000} align='right' />
                        </Group>
                        <Group position='apart'>
                            <Text>Khuyến mãi (%):</Text>
                            <Price data={'20%'} align='right' />
                        </Group>
                        <Group position='apart'>
                            <Text>Khuyến mãi (thành tiền):</Text>
                            <Price data={-20000} align='right' />
                        </Group>
                        <Group position='apart'>
                            <Text>Điểm đã dùng:</Text>
                            <Text align='right' color='red'>
                                100
                            </Text>
                        </Group>
                        <Divider size='md' color={primaryColor} />
                        <Group position='apart'>
                            <Text size='lg' fw='bold'>
                                Tổng:
                            </Text>
                            <Price data={80000} align='right' />
                        </Group>
                        <Group position='apart'>
                            <Text>Điểm tích được:</Text>
                            <Text align='right' color='green'>
                                40
                            </Text>
                        </Group>
                    </Stack>
                </Group>
            </td>
        </tr>
    )
}

export default Detail
