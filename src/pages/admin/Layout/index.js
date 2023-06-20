import {AppShell} from '@mantine/core'
import MyHeader from './Header'
import Sidebar from './Sidebar'

function Layout({children}) {
    return (
        <AppShell
            padding='md'
            header={<MyHeader></MyHeader>}
            navbar={<Sidebar />}
            styles={(theme) => ({
                main: {backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0]},
            })}>
            {children}
        </AppShell>
    )
}

export default Layout
