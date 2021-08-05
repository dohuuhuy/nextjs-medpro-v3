import dynamic from 'next/dynamic'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const ChonBenhVienPage = () => {
  return null
}

ChonBenhVienPage.Layout = DefaultLayout
export default ChonBenhVienPage
