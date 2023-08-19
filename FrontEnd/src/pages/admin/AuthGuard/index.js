// components/AuthGuard.js
import {useEffect} from 'react'
import {useRouter} from 'next/router'
import {useUsers} from '@util'
import {toast} from 'react-toastify'
import {LoadingOverlay} from '@mantine/core'

const AuthGuard = ({children, allowedRoles}) => {
    const router = useRouter()
    const {users, mutate, isLoading} = useUsers(undefined, '/profile')

    if (isLoading) return <LoadingOverlay visible />
    if (!users[0]?.role) {
        toast.info('Bạn cần đăng nhập trước!')
        return <></>
    }
    if (!allowedRoles.includes(users[0]?.role)) {
        router.push('/home') // Redirect to an unauthorized page or handle accordingly
        return <></>
    }
    return <>{children}</>
}

export default AuthGuard
