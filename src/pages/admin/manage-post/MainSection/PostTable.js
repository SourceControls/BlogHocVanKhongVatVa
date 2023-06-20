import {ScrollArea, Table} from '@mantine/core'
import {getNews} from '@util'
import {useState, useEffect} from 'react'
import Row from './Row'
function PostTable(props) {
    return (
        <ScrollArea h='70vh'>
            <Table verticalSpacing='xs' striped highlightOnHover>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tiêu đề</th>
                        <th>Tóm tắt</th>
                        <th>Tác giả</th>
                        <th>Trạng thái</th>
                        <th>Ngày tạo</th>
                        <th>Lượt xem</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {props.listPost &&
                        props.listPost.map((item, index) => <Row post={item} index={index} key={index}></Row>)}
                </tbody>
            </Table>
        </ScrollArea>
    )
}

export default PostTable
