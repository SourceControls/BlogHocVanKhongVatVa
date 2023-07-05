import {Flex, Group, Image, Paper, NavLink} from '@mantine/core'
import Link from 'next/link'
import {useState} from 'react'
import {getConfig} from '../../util/service'
import {CategoryContext} from '../Layout/index'
import {useContext} from 'react'
import {useEffect} from 'react'

function Nav(props) {
    const [active, setActive] = useState()
    const categories = useContext(CategoryContext)

    return (
        <Paper shadow='xl' style={{position: 'sticky', zIndex: 1000, top: 0, background: '#ffffff'}} mb='sm'>
            <Flex w={1440} mx='auto' justify='space-between'>
                <Link href='/home' onClick={() => setActive()}>
                    <Image width='150px' src={getConfig().logo} />
                </Link>
                <Group position='right'>
                    {categories.map((item) => (
                        <Link href={item.endPoint} key={item.subEndPoint} scroll={false}>
                            <NavLink
                                label={item.name}
                                active={item.subEndPoint === active}
                                onClick={() => setActive(item.subEndPoint)}
                                fw='bold'></NavLink>
                        </Link>
                    ))}
                </Group>
            </Flex>
        </Paper>
    )
}

export default Nav
