import HandlerGetContentPage from '@components/molecules/HandlerGetContentPage'
import dynamic from 'next/dynamic'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const HuongDanPage = () => {
  return <HandlerGetContentPage />
}

HuongDanPage.Layout = DefaultLayout
export default HuongDanPage
