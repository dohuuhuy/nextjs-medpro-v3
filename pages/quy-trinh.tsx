import dynamic from 'next/dynamic'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const QuyTrinhPage = () => {
  return null
}

QuyTrinhPage.Layout = DefaultLayout
export default QuyTrinhPage
