import Literaries from './Literaries'
import Layout from '../Layout'
import {useRouter} from 'next/router'

function Literary() {
    const category = useRouter()
    return <Literaries />
}
Literary.Layout = Layout
export default Literary
