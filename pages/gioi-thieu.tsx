import HandlerGetContentPage from '@components/molecules/HandlerGetContentPage'
import dynamic from 'next/dynamic'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const GioiThieuPage = () => {
  return <HandlerGetContentPage />
}

GioiThieuPage.Layout = DefaultLayout
export default GioiThieuPage
