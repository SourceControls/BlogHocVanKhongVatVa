import AuthGuard from '../AuthGuard'
import Layout from '../Layout'
function Analytics() {
    return <AuthGuard allowedRoles={['ADMIN', 'SUPERADMIN']}>Analytics</AuthGuard>
}
Analytics.Layout = Layout
export default Analytics
