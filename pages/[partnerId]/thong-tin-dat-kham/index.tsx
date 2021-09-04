import BookingInformationPage from '@components/pages/BookingInformationPage'
import dynamic from 'next/dynamic'
const DefaultLayout = dynamic(() => import('@templates/Default'))
import * as ac from '@actionStore/rootAction'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const ThongTinDatKhamPage = () => {
  const router = useRouter()

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(ac.getBookingTree(router.query?.partnerId))
  }, [])

  return <BookingInformationPage />
}

ThongTinDatKhamPage.Layout = DefaultLayout
export default ThongTinDatKhamPage
