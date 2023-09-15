import {useState} from 'react'

export function FloatingLabelInput(props) {
    const [focused, setFocused] = useState(false)
    const [value, setValue] = useState('')
    const floating = value.trim().length !== 0 || focused
    return (
        <div style={{position: 'relative', borderBottom: '2px solid var(--primary-color-5)'}}>
            <div
                className={'position-absolute top-50 ' + (floating ? 'color-5' : 'color-2')}
                style={{transform: 'translateY(-50%)', left: '0.2rem'}}>
                {props.icon}
            </div>
            <label
                style={{
                    position: 'absolute',
                    zIndex: 2,
                    top: '50%',
                    left: '40px',
                    pointerEvents: 'none',
                    transition: 'transform 150ms ease, color 150ms ease, font-size 150ms ease',
                    transform: floating ? `translate(-2rem,-150%)` : 'translateY(-50%)',
                    fontSize: floating ? '.8rem' : '1rem',
                    fontWeight: floating ? 500 : 300,
                }}>
                {props.label}
            </label>
            <input
                className='bg-transparent rounded-pill py-1 outline-none'
                style={{paddingLeft: '2rem', border: 'none', outline: 'none', width: '85%'}}
                {...props}
                placeholder={floating ? props.placeholder : ''}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onChange={(e) => {
                    setValue(e.target.value)
                    props.onChange && props.onChange(e)
                }}
            />
        </div>
    )
}
