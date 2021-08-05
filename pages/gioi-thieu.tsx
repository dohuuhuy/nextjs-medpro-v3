import dynamic from 'next/dynamic'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const GioiThieuPage = () => {
  return null
}

GioiThieuPage.Layout = DefaultLayout
export default GioiThieuPage
