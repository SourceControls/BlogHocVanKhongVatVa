import {Header, Image} from '@mantine/core'
import {getConfig} from '@util'
function MyHeader(props) {
    return (
        <Header height={50} p='md' style={{display: 'flex', alignItems: 'center', height: '100%'}}>
            <Image src={getConfig().logo} width='200px' mx=' auto' />
        </Header>
    )
}

export default MyHeader
