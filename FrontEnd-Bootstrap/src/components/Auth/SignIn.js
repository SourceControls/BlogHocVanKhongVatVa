import {signIn} from '@util'
import {useState} from 'react'
import {Button, Form, Stack} from 'react-bootstrap'
import {useForm} from 'react-hook-form'

function SignIn({closeModal, userMutate}) {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        defaultValues: {
            email: 'tuanhung592001@gmail.com',
            password: '123456',
        },
    })

    const handleSignIn = (data) => {
        signIn(data).then((rs) => {
            if (rs?.userId) {
                userMutate([rs], false)
                closeModal()
            }
        })
    }
    return (
        <Form onSubmit={handleSubmit(handleSignIn)}>
            <Stack gap={3}>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        {...register('email', {
                            required: 'Không được để trống',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Email không hợp lệ',
                            },
                        })}
                        placeholder='Nhập email của bạn'
                    />
                    {errors.email && <div className='text-danger'>{errors.email.message}</div>}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Mật khẩu</Form.Label>
                    <Form.Control
                        type='password'
                        {...register('password', {
                            required: 'Không được để trống',
                        })}
                        placeholder='Nhập mật khẩu'
                    />
                    {errors.password && <div className='text-danger'>{errors.password.message}</div>}
                </Form.Group>
                <Button type='submit' className='mx-auto mt-3'>
                    Xác Nhận
                </Button>
            </Stack>
        </Form>
    )
}

export default SignIn
