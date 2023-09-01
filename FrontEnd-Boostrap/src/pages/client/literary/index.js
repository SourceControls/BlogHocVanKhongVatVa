import Layout from '../Layout'
import {useRouter} from 'next/router'

function Literary() {
    const router = useRouter()
    router.push('/search?type=literary')
    return <></>
}
Literary.Layout = Layout
export default Literary
