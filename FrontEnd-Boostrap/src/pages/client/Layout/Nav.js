'use client'
import {Group, NavLink} from '@mantine/core'
import Link from 'next/link'
import {useState} from 'react'
function Nav({active, setActive, categories}) {
    return (
        <Group position='center' align='center'>
            {categories &&
                categories.map((item) => (
                    <Link
                        href={'/literary?category=' + item.slug}
                        // href={'/literary/category/' + item.slug}
                        key={item.slug}
                        scroll={false}
                        style={{borderRadius: '8px', overflow: 'hidden'}}>
                        <NavLink
                            label={item.categoryName}
                            active={item.slug === active}
                            onClick={() => setActive(item.slug)}
                            fw='bold'></NavLink>
                    </Link>
                ))}
        </Group>
    )
}

export default Nav
