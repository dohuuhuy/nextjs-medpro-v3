import dynamic from 'next/dynamic'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const XacNhanThongTinPage = () => {
  return null
}

XacNhanThongTinPage.Layout = DefaultLayout
export default XacNhanThongTinPage
