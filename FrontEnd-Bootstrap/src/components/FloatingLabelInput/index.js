import {useState} from 'react'
import {TextInput, createStyles, rem} from '@mantine/core'

const useStyles = createStyles((theme, {floating}) => ({
    root: {
        position: 'relative',
        borderBottom: '2px solid var(--primary-color-5)',
    },

    label: {
        position: 'absolute',
        zIndex: 2,
        top: rem(11),
        left: '40px',
        pointerEvents: 'none',
        color: floating
            ? theme.colorScheme === 'dark'
                ? theme.white
                : theme.black
            : theme.colorScheme === 'dark'
            ? theme.colors.dark[3]
            : theme.colors.gray[5],
        transition: 'transform 150ms ease, color 150ms ease, font-size 150ms ease',
        transform: floating ? `translate(-40px, ${rem(-20)})` : 'none',
        fontSize: floating ? theme.fontSizes.xs : theme.fontSizes.sm,
        fontWeight: floating ? 500 : 400,
    },

    required: {
        transition: 'opacity 150ms ease',
        opacity: floating ? 1 : 0,
    },

    input: {
        border: 'none',
        '&::placeholder': {
            transition: 'color 150ms ease',
            color: !floating ? 'transparent' : undefined,
        },
    },
}))

export function FloatingLabelInput(props) {
    const [focused, setFocused] = useState(false)
    const [value, setValue] = useState('')
    const {classes} = useStyles({floating: value.trim().length !== 0 || focused})
    {
    }
    return (
        <TextInput
            {...props}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            classNames={classes}
            onChange={(e) => {
                setValue(e.target.value)
                props.onChange && props.onChange(e)
            }}
        />
    )
}
