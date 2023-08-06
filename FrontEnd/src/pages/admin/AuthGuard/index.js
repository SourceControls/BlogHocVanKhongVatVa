// components/AuthGuard.js
import {useEffect} from 'react'
import {useRouter} from 'next/router'
import {useUsers} from '@util'
import {toast} from 'react-toastify'

const AuthGuard = ({children, allowedRoles}) => {
    const router = useRouter()
    const {users, mutate, isLoading: isUserLoading} = useUsers(undefined, '/profile')

    useEffect(() => {
        if (!users[0]?.role) {
            toast.info('Bạn cần đăng nhập trước!')
            return
        }
        if (!allowedRoles.includes(users[0]?.role) || users[0]?.status === 'BANNED') {
            // toast.info('Bạn cần đăng nhập trước!')
            router.push('/home') // Redirect to an unauthorized page or handle accordingly
        }
    }, [users[0]?.role])
    if (!users[0]?.role) return <></>
    return <>{children}</>
}

export default AuthGuard
