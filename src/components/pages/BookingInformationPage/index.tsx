import { ThongTinDatKham } from '@componentsTest/ThongTinDatKham'
import { AppState } from '@store/interface'
import { find } from 'lodash'
import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'

const BookingInformationPage = () => {
  const router = useRouter()
  const { partnerId } = router.query
  const listHospital = useSelector(
    (state: AppState) => state.hospitalReducer.listHospital
  )

  const bookingTree = useSelector(
    (state: AppState) => state.hospitalReducer.bookingTree
  )

  const findHospital = find(listHospital, { partnerId })

  return <ThongTinDatKham info={findHospital} bookingTree={bookingTree} />
}

export default BookingInformationPage
