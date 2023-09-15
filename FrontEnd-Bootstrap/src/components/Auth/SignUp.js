import {signUp} from '@util'
import {useState} from 'react'
import {Button, Form, Stack} from 'react-bootstrap'
import {Controller, useForm} from 'react-hook-form'
function SignUp() {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        defaultValues: {
            name: 'Tuấn Hùng',
            email: 'hungbuituan1@gmail.com',
            password: '123456',
            confirmPassword: '123456',
        },
    })

    const handleSignUp = (data) => {
        signUp(data).then((rs) => {
            console.log(rs)
        })
    }
    return (
        <Form onSubmit={handleSubmit(handleSignUp)}>
            <Stack gap={3}>
                <Form.Group>
                    <Form.Label>Họ Tên</Form.Label>
                    <Form.Control placeholder='Nhập họ tên của bạn' />
                </Form.Group>

                <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        name='email'
                        placeholder='Nhập email của bạn'
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address',
                            },
                        })}
                    />
                    {errors.email && <div className='text-danger'>{errors.email.message}</div>}
                </Form.Group>

                <Form.Group>
                    <Form.Label>Mật khẩu</Form.Label>
                    <Form.Control name='password' type='password' placeholder='Nhập mật khẩu' />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Nhập lại mật khẩu</Form.Label>
                    <Form.Control name='confirm-password' type='password' placeholder='Nhập lại mật khẩu' />
                </Form.Group>

                <Button type='submit' className='mx-auto mt-3'>
                    Xác Nhận
                </Button>
            </Stack>
        </Form>
    )
}

export default SignUp
