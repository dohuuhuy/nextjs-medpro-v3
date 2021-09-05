import BookingInformationPage from '@components/pages/BookingInformationPage'
import dynamic from 'next/dynamic'
const DefaultLayout = dynamic(() => import('@templates/Default'))
import * as ac from '@actionStore/rootAction'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { AppState } from 'store/interface'
import { check } from '@utils/checkValue'

const ThongTinDatKhamPage = () => {
  const router = useRouter()

  const bookingTree = useSelector(
    (state: AppState) => state.hospitalReducer.bookingTree
  )

  const dispatch = useDispatch()
  useEffect(() => {
    check(bookingTree) && dispatch(ac.getBookingTree(router.query?.partnerId))
    dispatch(ac.ListPatientRequest())
  }, [])

  return <BookingInformationPage />
}

ThongTinDatKhamPage.Layout = DefaultLayout
export default ThongTinDatKhamPage
