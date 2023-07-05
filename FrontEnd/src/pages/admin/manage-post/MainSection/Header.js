import {Button, Group, Input, Modal, Pagination, Select, Stack, Text, Title} from '@mantine/core'
import {IconPlus, IconSearch} from '@tabler/icons-react'
import {useEffect, useState} from 'react'
import {getCategories} from '@util'
import {useDisclosure} from '@mantine/hooks'
import MyEditor from './Editor'

function Header(props) {
    const [category, setCategory] = useState()
    const [opened, {open, close}] = useDisclosure(false)

    useEffect(() => {
        getCategories().then((rs) =>
            setCategory([
                {value: '', label: 'Tất cả'},
                ...rs.data.map((item) => ({value: item.subEndPoint, label: item.name})),
            ]),
        )
    }, [])
    return (
        <>
            <Stack>
                <Group>
                    <Stack spacing={0}>
                        <Title>Xin chào!</Title>
                        <Text color='dimmed'>Hôm nay có gì hot!</Text>
                    </Stack>
                    <Button leftIcon={<IconPlus />} style={{marginLeft: 'auto'}} onClick={open}>
                        Thêm Post
                    </Button>

                    <Input
                        icon={<IconSearch />}
                        placeholder='Tìm kiếm...'
                        w='300px'
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                props.setSearchKey(e.target.value)
                            }
                        }}></Input>

                    <>
                        {category && (
                            <Select
                                data={category}
                                defaultValue=''
                                transitionProps={{transition: 'pop-top-left', duration: 80, timingFunction: 'ease'}}
                                onChange={(value) => {
                                    props.setCurrentCategory(value)
                                }}></Select>
                        )}
                    </>
                </Group>
                <Pagination total={10} ml='auto' value={props.currentPage} onChange={props.setCurrentPage} />
            </Stack>
            <Modal size={1200} opened={opened} onClose={close} title='Bài viết' centered yOffset='1vh' xOffset={0}>
                <MyEditor />
            </Modal>
        </>
    )
}

export default Header
