import dynamic from 'next/dynamic'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const ThongTinDatKhamPage = () => {
  return null
}

ThongTinDatKhamPage.Layout = DefaultLayout
export default ThongTinDatKhamPage
