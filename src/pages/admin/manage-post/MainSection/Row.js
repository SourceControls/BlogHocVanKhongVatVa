import {Text, Group, Avatar, Badge} from '@mantine/core'
import {formatDate} from '@util'
import Options from './Options'

function Row({post, index}) {
    return (
        <tr key={index}>
            <td>{index + 1}</td>
            <td style={{maxWidth: '200px'}}>
                <Text fz='sm' fw='bold'>
                    {post.title}
                </Text>
            </td>
            <td style={{maxWidth: '400px'}}>
                <Text fz='sm' fw={500}>
                    {post.subTitle}
                </Text>
            </td>
            <td>
                <Group spacing='sm'>
                    <Avatar size={50} src={post.publisher[0].avatar} radius={50} style={{border: '1px solid black'}} />
                    <Text fz='sm' fw={500}>
                        {post.publisher[0].name}
                    </Text>
                </Group>
            </td>
            <td>
                <Badge>{post.displayType}</Badge>
            </td>
            <td>{formatDate(post.createdAt)[0]}</td>
            <td>{post.view}</td>
            <td>
                <Options post={post}></Options>
            </td>
        </tr>
    )
}

export default Row
