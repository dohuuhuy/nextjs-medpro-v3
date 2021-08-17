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

  const listPatient = useSelector(
    (state: AppState) => state.userReducer.listPatient
  )

  const findHospital = find(listHospital, { partnerId })

  const methods = {
    listPatient,
    bookingTree,
    info: findHospital
  }

  return <ThongTinDatKham {...methods} />
}

export default BookingInformationPage
