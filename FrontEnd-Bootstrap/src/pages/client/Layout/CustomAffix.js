import {IconArrowUp} from '@tabler/icons-react'
import {useWindowScroll} from '@mantine/hooks'
import {Affix, Button, Transition, rem, ActionIcon} from '@mantine/core'
function CustomAffix() {
    const [scroll, scrollTo] = useWindowScroll()

    return (
        <>
            <Affix position={{bottom: rem(20), right: rem(20)}}>
                <Transition transition='slide-up' mounted={scroll.y > 0}>
                    {(transitionStyles) => (
                        <ActionIcon
                            size='xl'
                            style={{...transitionStyles}}
                            bg='var(--primary-color-6)'
                            onClick={() => scrollTo({y: 0})}>
                            <IconArrowUp size='1.5rem' stroke='4px' color='white' />
                        </ActionIcon>
                    )}
                </Transition>
            </Affix>
        </>
    )
}

export default CustomAffix
