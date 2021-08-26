import HandlerGetContentPage from '@components/molecules/HandlerGetContentPage'
import dynamic from 'next/dynamic'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const LienHePage = () => {
  return <HandlerGetContentPage />
}

LienHePage.Layout = DefaultLayout
export default LienHePage
