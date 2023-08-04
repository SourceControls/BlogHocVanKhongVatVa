// components/AuthGuard.js
import {useEffect} from 'react'
import {useRouter} from 'next/router'
import {useUsers} from '@util'

const AuthGuard = ({children, allowedRoles}) => {
    const router = useRouter()
    const {users, mutate, isLoading: isUserLoading} = useUsers(undefined, '/profile')

    useEffect(() => {
        if (!users[0]?.role) return
        if (!allowedRoles.includes(users[0]?.role) || users[0]?.status === 'BANNED') {
            router.push('/home') // Redirect to an unauthorized page or handle accordingly
        }
    }, [users[0]?.role])
    if (!users[0]?.role) return <></>
    return <>{children}</>
}

export default AuthGuard
