import BookingInformationPage from '@components/pages/BookingInformationPage'
import dynamic from 'next/dynamic'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const ThongTinDatKhamPage = () => {
  return <BookingInformationPage />
}

ThongTinDatKhamPage.Layout = DefaultLayout
export default ThongTinDatKhamPage
